/**
 *
 * You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it.
 * You want to know how many distinct sums you can make from non-empty groupings of these coins.
 *
 *
 */

function distSumRec(coins, sum, currentIndex, set) {
    if(currentIndex > coins.length){
        return;
    }
    if(currentIndex === coins.length) {
        set.add(sum);
        return;
    }
    distSumRec(coins, sum + coins[currentIndex], currentIndex + 1, set);
    distSumRec(coins, sum, currentIndex + 1, set);
}

function possibleSums(coins, quantity) {
    let set = new Set();
    let newCoins = []
    for(let i = 0; i< quantity.length; ++i) {
        for (let j = 0; j < quantity[i]; ++j){
            newCoins.push(coins[i])
        }
    }

    distSumRec(newCoins, 0, 0, set);
    return set.size - 1
}



let test1 = possibleSums([10, 50, 100], [1, 2, 1]);
console.log('test1 -> ', test1, test1 === 9);

let test2 = possibleSums([10, 20, 30], [1, 1, 1]);
console.log('test2 ->', test2, test2 === 6);

let test3 = possibleSums([10, 20, 30, 40], [1, 1, 1, 1]);
console.log('test3 ->', test3, test3 === 10);

let test4 = possibleSums([10, 50, 100, 500], [5, 3, 2, 2]);
console.log('test4 ->', test4, test4 === 122);

let test5 = possibleSums([1, 2], [50000, 2]);
console.log('test5 ->', test5, test5 === 50004);

let test6 = possibleSums([3, 1, 1,], [111, 84, 104]);
console.log('test6 ->', test6, test6 === 521);