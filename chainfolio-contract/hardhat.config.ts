import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config"

const config: HardhatUserConfig = {

  networks: {
    optimism_goerli_testnet: {
      url: "https://endpoints.omniatech.io/v1/op/goerli/public",
      accounts: [process.env.METAMASK_PROCESS!]
    }
  },
  solidity: {
    version: "0.8.15"
  },
  paths: {
    artifacts: "./data/src/artifacts",
    cache: "./data/src/cache"
  },
  typechain: {
    outDir: "./data/src/types"
  }

};

export default config;
