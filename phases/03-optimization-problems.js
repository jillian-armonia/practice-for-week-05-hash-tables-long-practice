function kth(string, freqOrder){
    let memo = new Object();
    let charsFrequency = [];

    for (let i = 0; i < string.length; i++){
        let char = string[i];

        if (char in memo){
            memo[char] += 1;
        } else {
            memo[char] = 1;
        }
    }

    for (const character in memo){
        let frequency = memo[character]
        charsFrequency.push([character, frequency]);
    }

    charsFrequency.sort();

    return charsFrequency[freqOrder - 1][0];
}


function newAlphabet(string, order){
    let initialValue = order.indexOf(string[0]);

    for (let i = 1; i < string.length; i++){
        let nextValue = order.indexOf(string[i]);

        if (initialValue <= nextValue){
            initialValue = nextValue;
        } else {
            return false;
        }
    }

    return true;
}

function longestPalindrome(string){
    let palCounter = 0;
    let palObject = new Object();

    for (let i = 0; i < string.length; i++){
        let char = string[i];
        if (char in palObject){
            palObject[char] += 1;
        } else {
            palObject[char] = 1;
        }
    }

    for (const character in palObject){
        let value = palObject[character];

        if (value === 1) continue;

        if (value % 2 === 0){
            palCounter += value;
        } else {
            palCounter += value - 1;
        }
    }

    const set = new Set(Object.values(palObject));

    if (set.has(1)) palCounter++;

    return palCounter;
}

function longestSubstr(str){
    let subSet = new Set(str[0]);
    let longest = 0;

    for (let i = 1; i < str.length; i++){
        let char = str[i];

        if (subSet.has(char) && subSet.size > longest){
            longest = subSet.size;
            subSet = new Set();
        } else if (subSet.has(char) && subSet.size <= longest){
            subSet = new Set();
        } else {
            subSet.add(char);
        }
    }

    if (subSet.size > longest){
        longest = subSet.size;
    }

    return longest;
}

function maxSubarr(arr){
    let max = 0;
    let subObj = new Object();


    for (let n of arr){

        if (n in subObj){
            subObj[n] += 1;
        } else {
            subObj[n] = 1;
        }
    }

    for (const number in subObj){
        let pairedNum = number - 1

        if (pairedNum in subObj){
            let sum = subObj[number] + subObj[pairedNum];

            if (sum > max){
                max = sum;
            }
        } else {
            if (subObj[number] > max){
                max = subObj[number];
            }
        }
    }

    return max;
}


function coinChange(deno, total, memo = {}){
    //1. If total is equal to 0, return 0
    if (total === 0) return 0;

    //2. Assign the fewest change as -1 in case if there are no possible change and also to signify that there has been no best so far
    let fewest = -1;

    //4. If the total is NOT a key in the memo, create it as a key by using recursion
    if (memo[total] === undefined){
        //4a. Iterate through the coins
        for (let amount of deno){
            //4b. If there is a coin less than the total, subtract it from the total and use that difference to recurse for the next try at the change
            if (amount <= total){
                let attempt = coinChange(deno, total - amount, memo);

                if (fewest < 0 || fewest > attempt + 1){
                    fewest = attempt + 1
                }
            }
            //4c. If the best is less than 0 or best is bigger than the next try plus 1 (because for the change to be 0, you must have used at least an exact amount of denomination)

        }

        //4d. Assign that best to the total key
        memo[total] = fewest
    }

    //5. Return the value of the total key in the memo
    return memo[total];

}


function climbingSteps(n, memo = {}){
    //0. There are only 3 types of ways to climb: 1, 2, or 3 steps
    const steps = [1, 2, 3];

    //1. Make a way counter
    let counter = 0;

    //2. If there are no steps, there is only 1 way to climb it (you don't) and also this means that there are no steps left so increment the way counter with one
    if (n === 0){
        counter++;
        return counter;
    }

    if (memo[n] === undefined){
        //3. Iterate through the types of steps
    for (let step of steps){
        //4. If the step is less than the top, then recurse by subtracting the step from the n

            if (step <= n){
                let currentCount = climbingSteps(n - step);
                counter += currentCount;
            }
        }

        memo[n] = counter;
    }



    //5. Return the way counter
    return memo[n];

}

module.exports = [kth, newAlphabet, longestSubstr, maxSubarr, coinChange, climbingSteps, longestPalindrome];
