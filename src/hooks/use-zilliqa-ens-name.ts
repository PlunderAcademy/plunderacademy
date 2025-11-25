import { type Address, isAddress } from "viem"
import { useQuery } from "@tanstack/react-query"
import { usePublicClient } from "wagmi"
import { zilliqaMainnet } from "@/lib/wagmi"

interface UseZilliqaEnsNameProps {
  address?: Address
  /** Enable/disable the query. Default: true */
  enabled?: boolean
}

interface UseZilliqaEnsNameReturn {
  /** The resolved .zil name, or null if not found */
  name: string | null
  /** True while the initial query is loading */
  isLoading: boolean
  /** True while any query (including refetch) is in flight */
  isFetching: boolean
  /** Error if the query failed */
  error: Error | null
}

/**
 * Hook to resolve an Ethereum address to its primary ZilName
 * 
 * @example
 * const { name, isLoading } = useZilliqaEnsName({ 
 *   address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1' 
 * })
 * // name: 'alice.zil' or null
 */
export function useZilliqaEnsName({
  address,
  enabled = true,
}: UseZilliqaEnsNameProps): UseZilliqaEnsNameReturn {
  const publicClient = usePublicClient({ chainId: zilliqaMainnet.id })

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['zilname', address, zilliqaMainnet.id],
    queryFn: async () => {
      // Guard clause: ensure we have valid inputs
      if (!address || !publicClient || !isAddress(address)) {
        return null
      }
      
      try {
        // Perform reverse resolution (address → name)
        const name = await publicClient.getEnsName({ address })
        return name
      } catch (error) {
        console.error('Error fetching ZilName:', error)
        return null
      }
    },
    // Only run query if address is valid and enabled
    enabled: enabled && !!address && !!publicClient && isAddress(address),
    // Cache for 5 minutes (ENS records don't change frequently)
    staleTime: 5 * 60 * 1000,
    // Keep in cache for 10 minutes after last use
    gcTime: 10 * 60 * 1000,
  })

  return {
    name: data ?? null,
    isLoading,
    isFetching,
    error: error as Error | null,
  }
}

