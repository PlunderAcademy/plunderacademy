import { type Address } from "viem"
import { normalize } from "viem/ens"
import { useQuery } from "@tanstack/react-query"
import { usePublicClient } from "wagmi"
import { zilliqaMainnet } from "@/lib/wagmi"

interface UseZilliqaEnsAddressProps {
  name?: string
  /** Enable/disable the query. Default: true */
  enabled?: boolean
}

interface UseZilliqaEnsAddressReturn {
  /** The resolved Ethereum address, or null if not found */
  address: Address | null
  /** True while the initial query is loading */
  isLoading: boolean
  /** True while any query (including refetch) is in flight */
  isFetching: boolean
  /** Error if the query failed */
  error: Error | null
}

/**
 * Hook to resolve a ZilName to its Ethereum address
 * 
 * @example
 * const { address, isLoading, error } = useZilliqaEnsAddress({ 
 *   name: 'alice.zil' 
 * })
 * // address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1' or null
 */
export function useZilliqaEnsAddress({
  name,
  enabled = true,
}: UseZilliqaEnsAddressProps): UseZilliqaEnsAddressReturn {
  const publicClient = usePublicClient({ chainId: zilliqaMainnet.id })

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['ziladdress', name, zilliqaMainnet.id],
    queryFn: async () => {
      // Guard clause: validate inputs
      if (!name || !publicClient || !name.trim()) {
        return null
      }
      
      try {
        // Normalize the name (critical for security)
        const normalizedName = normalize(name.trim())
        
        // Perform forward resolution (name → address)
        const address = await publicClient.getEnsAddress({
          name: normalizedName,
        })
        
        return address
      } catch (error) {
        console.error('Error resolving address:', error)
        // Re-throw so React Query can handle it
        throw error
      }
    },
    // Only run if name exists and is enabled
    enabled: enabled && !!name && !!publicClient && name.trim().length > 0,
    // Cache for 5 minutes
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    // Retry only once on failure (names either exist or don't)
    retry: 1,
  })

  return { 
    address: data ?? null, 
    isLoading, 
    isFetching,
    error: error as Error | null,
  }
}

