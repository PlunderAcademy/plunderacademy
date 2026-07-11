/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAINNET?: string;
  readonly VITE_WALLETCONNECT_PROJECT_ID?: string;
  readonly VITE_PLUNDER_ACADEMY_API_TESTNET?: string;
  readonly VITE_PLUNDER_ACADEMY_API_MAINNET?: string;
  readonly VITE_PLUNDER_ACADEMY_CONTRACT_ADDRESS_TESTNET?: string;
  readonly VITE_PLUNDER_ACADEMY_CONTRACT_ADDRESS_MAINNET?: string;
  readonly VITE_FACTORY_ADDRESS_TESTNET?: string;
  readonly VITE_FACTORY_ADDRESS_MAINNET?: string;
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
