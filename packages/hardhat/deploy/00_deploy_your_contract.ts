import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploySupplyChainContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("SupplyChain", {
    from: deployer,
    args: ["Shiv", "shivbhonde.eth"],
    log: true,
    autoMine: true,
  });
};

export default deploySupplyChainContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deploySupplyChainContract.tags = ["SupplyChain"];
