const CardanocliJs = require("cardanocli-js");
const os = require("os");
const path = require("path");

const dir = path.join(os.homedir(), "git/cardano-minter");
const shelleyPath = path.join(
  dir,
  "testnet-shelley-genesis.json"
);

const cardanocliJs = new CardanocliJs({
//   era: "mary",
  network: `testnet-magic 1097911063`,
  dir,
  shelleyGenesisPath: shelleyPath,
});

module.exports = cardanocliJs
