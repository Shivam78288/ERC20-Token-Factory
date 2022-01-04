const ERC20TokenCreator  = artifacts.require("ERC20TokenCreator.sol");

module.exports = function (deployer, network) {
    if(network === "maticMumbai"){
        deployer.deploy(ERC20TokenCreator);
    }
  
};
