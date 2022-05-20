const NebuIAID = artifacts.require("NebuIAID");

module.exports = function (deployer, network, accounts) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(NebuIAID);
};
