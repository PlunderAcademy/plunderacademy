import { type Address } from "viem"
import { normalize } from "viem/ens"
import { useQuery } from "@tanstack/react-query"
import { usePublicClient } from "wagmi"
import { zilliqaMainnet } from "@/lib/wagmi"
import { useZilliqaEnsName } from "./use-zilliqa-ens-name"

interface UseZilEnsAvatarProps {
  /** Ethereum address to get avatar for */
  address?: Address
  /** Enable/disable the query. Default: true */
  enabled?: boolean
}

interface UseZilEnsAvatarReturn {
  /** The avatar URL, or null if not set */
  avatar: string | null
  /** True while loading (includes name resolution) */
  isLoading: boolean
  /** True while any query is in flight */
  isFetching: boolean
  /** Error if the query failed */
  error: Error | null
}

/**
 * Hook to get the avatar for a ZilName
 * First resolves the address to a name, then fetches the avatar
 * 
 * @example
 * const { avatar, isLoading } = useZilEnsAvatar({ 
 *   address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1' 
 * })
 * // avatar: 'https://...' or null
 */
export function useZilEnsAvatar({
  address,
  enabled = true,
}: UseZilEnsAvatarProps): UseZilEnsAvatarReturn {
  const publicClient = usePublicClient({ chainId: zilliqaMainnet.id })
  
  // First, resolve the address to get the name
  const { name, isLoading: isNameLoading } = useZilliqaEnsName({ 
    address,
    enabled,
  })

  // Then fetch the avatar for that name
  const { data, isLoading: isAvatarLoading, isFetching, error } = useQuery({
    queryKey: ['zilavatar', name, zilliqaMainnet.id],
    queryFn: async () => {
      // Guard clause
      if (!name || !publicClient) {
        return null
      }
      
      try {
        // Fetch avatar URL
        const avatar = await publicClient.getEnsAvatar({
          name: normalize(name),
        })
        
        return avatar
      } catch (error) {
        console.error('Error fetching avatar:', error)
        return null
      }
    },
    // Only fetch avatar after we have a name
    enabled: enabled && !!name && !isNameLoading && !!publicClient,
    // Cache avatars for 10 minutes (they change rarely)
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
  })

  return {
    avatar: data ?? null,
    // Consider loading if either name or avatar is loading
    isLoading: isNameLoading || isAvatarLoading,
    isFetching,
    error: error as Error | null,
  }
}

