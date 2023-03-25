import { ethers } from "hardhat";

async function main() {

  const Chainfolio = await ethers.getContractFactory("Chainfolio");
  const chainFolio = await Chainfolio.deploy();

  await chainFolio.deployed();

  console.log(
    `AttestationStation deployed to ${chainFolio.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
