var HDWalletProvider = require("truffle-hdwallet-provider");
// const MNEMONIC = 'helmet pizza tongue blur apology error butter frost census consider shift someone';
const MNEMONIC = 'olive inherit credit mansion will nuclear near sentence spare horse season twelve';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  ropsten: {
    provider: function() {
      return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
    },
    network_id: 3,
    gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}