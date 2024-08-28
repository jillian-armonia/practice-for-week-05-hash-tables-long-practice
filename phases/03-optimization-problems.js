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

}

function longestPalindrome(string){

}

function longestSubstr(str){

}

function maxSubarr(arr){

}


function coinChange(deno, total){

}


function climbingSteps(n){

}

module.exports = [kth, newAlphabet, longestSubstr, maxSubarr, coinChange, climbingSteps, longestPalindrome];
