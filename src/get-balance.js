const cardano = require("./cardano")

const sender = cardano.wallet("ADA4NATURE")

console.log(
    sender.balance()
)
