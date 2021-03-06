/*
* 
*       Given an array of integers nums and an integer k, determine whether there are two distinct indices i and jin the array where nums[i] = nums[j] 
*       and the absolute difference between i and j is less than or equal to k.
* */

function containsCloseNums(arr, k) {
    let numObj = {};
    let returnValue = false;

    arr.forEach((value, index) => {
        if(numObj[`${value}`] === undefined)
            return numObj[`${value}`] = index;
        if(Math.abs(numObj[`${value}`] - index) <= k) {
            returnValue = true
        } else {
            return numObj[`${value}`] = index;
        }
    });
    return returnValue
}

let test1 = containsCloseNums([0, 1, 2, 3, 5, 2], 3);
console.log('test1 -->>', test1);

let test2 = containsCloseNums([0, 1, 2, 3, 5, 6], 3);
console.log('test2 -->>', test2);

let test3 = containsCloseNums([0, 1, 2, 3, 5, 2, 11], 3);
console.log('test3 -->>', test3);

let test4 = containsCloseNums([1,0,1,1], 1);
console.log('test4 -->>', test4);