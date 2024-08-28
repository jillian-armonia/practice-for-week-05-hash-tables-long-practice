const { expect } = require('chai');

const [kth, newAlphabet, longestSubstr, maxSubarr, coinChange, climbingSteps, longestPalindrome] = require("../phases/03-optimization-problems")

describe ('Phase 3 - Hash table optimization problems', function (){

    it('`kth` returns the kth most frequent character in the string', function (){

        expect(kth('aaabbc', 1)).to.equal('a');
        expect(kth('aaabbc', 2)).to.equal('b');
        expect(kth('aaabbc', 3)).to.equal('c');
    });

    it('`newAlphabet` returns a boolean whether the string is in the given alphabet order or not', function (){

        expect(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz')).to.be.true;
        expect(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz')).to.be.false;
        expect(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz')).to.be.true;
    })

    it('`newAlphabet` runs in O(m + n) time', function (){

        expect(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz')).to.be.true;

        arr = new Array(1000000).fill('a');
        arr[1000000 - 1] = "b";

        const str1 = arr.join("");

        expect(newAlphabet(str1, 'abcdefghijklmnopqrstuvwxyz')).to.be.true;

        arr[500000] = "c";
        const str2 = arr.join("");

        expect(newAlphabet(str2, 'abcdefghijklmnopqrstuvwxyz')).to.be.false;

    });

    it('`longestPalindrome` determines the length of the longest palindrome that it can make from the given string', function (){

        expect(longestPalindrome("abccccdd")).to.equal(7);
    })

    it('`longestPalindrome` runs in O(n) time', function (){

        expect(longestPalindrome("abccccdd")).to.equal(7);

        target = 1000000 - 1;

        arr = new Array(target).fill("a");
        arr[500000 - 1] = "b";

        const str = arr.join("");

        expect(longestPalindrome(str)).to.equal(target);
    });

    it('`longestSubstr` finds the length of the longest substring without repeating characters', function (){

        expect(longestSubstr("abcabcbb")).to.equal(3);
        expect(longestSubstr("bbbbb")).to.equal(1);
    });

    it('`longestSubstr` runs in O(n) time', function (){

        expect(longestSubstr("bbbbb")).to.equal(1);

        arr = new Array(999996).fill("b");
        arr[999996 - 1] = "abcd";

        const str = arr.join("");

        expect(longestSubstr(str)).to.equal(4);
    });

    it('`maxSubarr` returns the length of the longest subarray where the difference of its max and min value is at most 1', function (){

        expect(maxSubarr([1,3,2,2,5,2,3,7])).to.equal(5);
        expect(maxSubarr([1,1,1,1,3])).to.equal(4);
    });

    it('`maxSubarr` runs in O(n) time', function (){

        expect(maxSubarr([1,1,1,1,3])).to.equal(4);

        arr = new Array(1000000).fill(1);
        arr[1000000 - 1] = 3;

        expect(maxSubarr(arr)).to.equal(1000000 - 1);
    });

    it('`coinChange` determines the fewest number of coins to make up the given amount', function (){

        const coins = [1, 5, 10, 25];
        const coins2 = [5];

        expect(coinChange(coins, 11)).to.equal(2);
        expect(coinChange(coins2, 3)).to.equal(-1);
        expect(coinChange(coins2, 0)).to.equal(0);
    });

    it('`climbingSteps` finds the number of distinct ways to climb to the top using only 1, 2, or 3 steps', function (){

        expect(climbingSteps(0)).to.equal(1);
        expect(climbingSteps(1)).to.equal(1);
        expect(climbingSteps(2)).to.equal(2);
        expect(climbingSteps(3)).to.equal(4);
        expect(climbingSteps(4)).to.equal(6);
    })
})
