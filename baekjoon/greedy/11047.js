// S3
const fs = require('fs');

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(v => v.replace('\r', ''));

let price = input[0].split(" ").map(v => parseInt(v))[1];
const coins =  input.slice(1, input.length).map(v => parseInt(v));

function getHighestCoinSmallThanPrice(coins, price) {
    let temp = 0;

    coins.forEach(coin => {
        if(price >= coin) temp = coin;
    })

    return temp;
}

function fillPriceThroughHighestCoin(coin, price) {
    const maximumFilledNumber = Math.floor(price / coin);
    const newPrice = price - (maximumFilledNumber * coin);

    return [newPrice, maximumFilledNumber];
}

let count = 0;

while(price > 0) {
    const coin = getHighestCoinSmallThanPrice(coins, price);
    const [newPrice, counted] = fillPriceThroughHighestCoin(coin, price);

    price = newPrice;
    count+=counted;
}

console.log(count);