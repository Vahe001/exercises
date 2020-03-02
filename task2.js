/**
 *
 * You have a collection of coins, and you know the values of the coins and the quantity of each type of coin in it. 
 * You want to know how many distinct sums you can make from non-empty groupings of these coins.
 *
 *
 */

// IMPORTANT I know this is not the best solution.

function possibleSums(coins, quantity) {
    let set = new Set();

    quantity.forEach((value, index ) => {
        if(value > 1){
            let ix = value;
            while(ix > 1){
                coins.push(coins[index]);
                --ix;
            }
        }
    });

    coins.forEach((value, index) => {
        set.add(value);
        let checkArray = coins.filter((value1, index1) => index1 !== index);

        for(let i = 0; i < checkArray.length; ++i){
            for(let j = i; j < checkArray.length; ++j){
                let newValue = value;
                for(let k = j; k < checkArray.length; ++k){
                    newValue += checkArray[k];
                    set.add(newValue)
                }

            }
        }

    });
    return set.size
}

let test1 = possibleSums([10, 50, 100], [1, 2, 1]);
console.log(test1);