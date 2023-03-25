import { ethers } from "hardhat";

async function main() {

  const AttestationStation = await ethers.getContractFactory("AttestationStation");
  const attestationStation = await AttestationStation.deploy();

  await attestationStation.deployed();

  console.log(
    `AttestationStation deployed to ${attestationStation.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
