'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// TODO: Add Alert component with: npx shadcn@latest add alert
// For now, using simple div for alerts
import { Badge } from '@/components/ui/badge';
import { 
  Factory,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Copy,
  Loader2
} from 'lucide-react';

// Factory contract ABI (just the createToken function)
const FACTORY_ABI = [
  {
    name: 'createToken',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'name', type: 'string' },
      { name: 'symbol', type: 'string' },
      { name: 'initialSupply', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'address' }]
  }
] as const;

// Factory addresses (from environment variables)
const FACTORY_ADDRESSES = {
  testnet: process.env.NEXT_PUBLIC_FACTORY_ADDRESS_TESTNET as `0x${string}`,
  mainnet: process.env.NEXT_PUBLIC_FACTORY_ADDRESS_MAINNET as `0x${string}`
};

const BLOCK_EXPLORERS = {
  testnet: 'https://zilliqa.blockscout.com',
  mainnet: 'https://zilliqa.blockscout.com'
};

export function TokenFactoryInterface() {
  const { address, isConnected } = useAccount();
  
  // Form state
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [initialSupply, setInitialSupply] = useState('');
  const [selectedChain, setSelectedChain] = useState<'testnet' | 'mainnet'>('testnet');
  
  // Transaction state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ txHash: string; tokenDetails: { name: string; symbol: string; initialSupply: number; creator: `0x${string}`; chainId: number } } | null>(null);
  
  // Contract interaction
  const { writeContract, data: hash, isPending } = useWriteContract();
  
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Form validation
  const isFormValid = () => {
    return (
      tokenName.trim().length > 0 &&
      tokenSymbol.trim().length >= 3 &&
      tokenSymbol.trim().length <= 5 &&
      initialSupply &&
      parseInt(initialSupply) > 0 &&
      parseInt(initialSupply) <= 1000000000 &&
      isConnected &&
      FACTORY_ADDRESSES[selectedChain]
    );
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    
    setError(null);
    setIsSubmitting(true);
    
    try {
      const factoryAddress = FACTORY_ADDRESSES[selectedChain];
      
      if (!factoryAddress) {
        throw new Error(`Factory not deployed on ${selectedChain}`);
      }
      
      await writeContract({
        address: factoryAddress,
        abi: FACTORY_ABI,
        functionName: 'createToken',
        args: [
          tokenName.trim(),
          tokenSymbol.trim().toUpperCase(),
          BigInt(parseInt(initialSupply))
        ],
      });
      
    } catch (err: unknown) {
      console.error('Token creation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create token');
      setIsSubmitting(false);
    }
  };

  // Handle successful transaction
  if (isConfirmed && hash && !success && address) {
    const tokenDetails = {
      name: tokenName.trim(),
      symbol: tokenSymbol.trim().toUpperCase(),
      initialSupply: parseInt(initialSupply),
      creator: address,
      chainId: selectedChain === 'testnet' ? 33101 : 32769
    };
    
    setSuccess({ txHash: hash, tokenDetails });
    setIsSubmitting(false);
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getBlockExplorerUrl = (txHash: string) => {
    return `${BLOCK_EXPLORERS[selectedChain]}/tx/${txHash}`;
  };

  if (success) {
    return (
      <Card className="border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <CheckCircle className="size-5" />
            Token Created Successfully!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">🎉 Your Token Details:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">Name:</span>
                <span className="font-medium">{success.tokenDetails.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">Symbol:</span>
                <span className="font-medium">{success.tokenDetails.symbol}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">Supply:</span>
                <span className="font-medium">{success.tokenDetails.initialSupply.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-700 dark:text-green-300">Network:</span>
                <Badge variant="outline">{selectedChain === 'testnet' ? 'Testnet' : 'Mainnet'}</Badge>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">📄 Transaction Details:</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-blue-700 dark:text-blue-300">Transaction Hash:</span>
                <code className="text-xs bg-blue-100 dark:bg-blue-800/30 px-2 py-1 rounded font-mono break-all">
                  {success.txHash}
                </code>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => copyToClipboard(success.txHash)}
                  className="h-6 w-6 p-0"
                >
                  <Copy className="size-3" />
                </Button>
              </div>
              <Button 
                size="sm" 
                variant="outline" 
                asChild
                className="w-full"
              >
                <a 
                  href={getBlockExplorerUrl(success.txHash)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="size-4" />
                  View on Block Explorer
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <AlertCircle className="size-4 text-blue-600 mt-0.5" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Next Step:</strong> Copy the transaction hash above and submit it in the achievement section below to earn your Module 5 achievement!
            </p>
          </div>

          <Button 
            variant="outline" 
            onClick={() => {
              setSuccess(null);
              setTokenName('');
              setTokenSymbol('');
              setInitialSupply('');
              setError(null);
            }}
            className="w-full"
          >
            Create Another Token
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Factory className="size-5" />
          Token Factory - Create Your ERC-20 Token
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!isConnected && (
          <div className="flex items-center gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <AlertCircle className="size-4 text-yellow-600" />
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Please connect your wallet to use the token factory.
            </p>
          </div>
        )}

        {isConnected && (
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-3 rounded-lg">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">🔗 Connected Wallet:</p>
            <p className="text-xs text-green-700 dark:text-green-300 font-mono break-all mt-1">
              {address}
            </p>
          </div>
        )}

        {/* Chain Selection */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Network</Label>
          <div className="flex gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="factoryChain"
                value="testnet"
                checked={selectedChain === 'testnet'}
                onChange={(e) => setSelectedChain(e.target.value as 'testnet')}
                className="w-4 h-4 text-primary"
              />
              <span className="text-sm">Testnet (Recommended)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="factoryChain"
                value="mainnet"
                checked={selectedChain === 'mainnet'}
                onChange={(e) => setSelectedChain(e.target.value as 'mainnet')}
                className="w-4 h-4 text-primary"
              />
              <span className="text-sm">Mainnet</span>
            </label>
          </div>
          
          {selectedChain === 'mainnet' && (
            <div className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <AlertCircle className="size-4 text-red-600 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-200">
                <strong>⚠️ Mainnet Warning:</strong> Real ZIL will be spent. Your token will be permanently deployed. Consider testing on testnet first.
              </p>
            </div>
          )}
        </div>

        {/* Token Form */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="tokenName">Token Name</Label>
            <Input
              id="tokenName"
              type="text"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              placeholder="e.g., My Learning Token"
              maxLength={50}
              disabled={isSubmitting || isPending || isConfirming}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tokenSymbol">Token Symbol</Label>
            <Input
              id="tokenSymbol"
              type="text"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value.toUpperCase())}
              placeholder="e.g., MLT"
              maxLength={5}
              disabled={isSubmitting || isPending || isConfirming}
            />
            <p className="text-xs text-muted-foreground">3-5 characters, will be converted to uppercase</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="initialSupply">Initial Supply</Label>
            <Input
              id="initialSupply"
              type="number"
              value={initialSupply}
              onChange={(e) => setInitialSupply(e.target.value)}
              placeholder="e.g., 1000000"
              min="1"
              max="1000000000"
              disabled={isSubmitting || isPending || isConfirming}
            />
            <p className="text-xs text-muted-foreground">Number of tokens to create (max 1 billion)</p>
          </div>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <AlertCircle className="size-4 text-red-600" />
            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        )}

        <Button
          onClick={handleSubmit}
          disabled={!isFormValid() || isSubmitting || isPending || isConfirming}
          className="w-full"
        >
          {isPending || isConfirming ? (
            <>
              <Loader2 className="mr-2 size-4 animate-spin" />
              {isPending ? 'Confirming...' : 'Creating Token...'}
            </>
          ) : (
            'Create Token'
          )}
        </Button>

        {(isPending || isConfirming) && (
          <div className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <Loader2 className="size-4 animate-spin text-blue-600" />
            <p className="text-sm text-blue-800 dark:text-blue-200">
              {isPending && 'Please confirm the transaction in your wallet...'}
              {isConfirming && 'Token is being created. This may take a moment...'}
            </p>
          </div>
        )}

        <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded-lg">
          <p className="font-medium mb-1">💡 How it works:</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Your wallet will prompt you to approve the transaction</li>
            <li>Our factory will create a new ERC-20 token for you</li>
            <li>You&apos;ll receive all the initial tokens in your wallet</li>
            <li>Copy the transaction hash to submit for your achievement</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
