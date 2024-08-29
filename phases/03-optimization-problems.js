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


function coinChange(deno, total){
    //1. If total is equal to 0, return 0
    //2. 
}


function climbingSteps(n){

}

module.exports = [kth, newAlphabet, longestSubstr, maxSubarr, coinChange, climbingSteps, longestPalindrome];
