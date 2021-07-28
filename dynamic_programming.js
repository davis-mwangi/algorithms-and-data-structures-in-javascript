
/// Fibainaci
const fib = (n, memo = {}) => {

    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
}

console.log("Fibonacci", fib(5));

//Grid Traveller
const gridTraveler = (m, n, memo = {}) => {

    let key = m + "," + n;

    if (key in memo) {
        return memo[key];
    }
    if (m == 1 && n == 1) {
        return 1;
    }

    if (m == 0 || n == 0) {
        return 0;
    }

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
}

const gridTravelerTabulation =(m ,n) => {
   const table =  Array(m + 1)
   .fill().map
};

console.log("Grid Traveller", gridTraveler(18, 18));


// Can Sum

const canSum = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return true;
    }

    if (targetSum < 0) {
        return false;
    }

    for (let num of numbers) {
        const remainder = targetSum - num;

        if (canSum(remainder, numbers, memo)) {
            memo[targetSum] = true;
            return memo[targetSum];
        }
    }
    memo[targetSum] = false;
    return memo[targetSum];
};
console.log("Can Sum", canSum(300, [7, 14]));

/// How Sum

const howSum = (targetSum, numbers, memo = {}) => {

    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }

    if (targetSum < 0) {
        return null;
    }

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
console.log("How Sum", howSum(7, [2, 4]));
console.log("How Sum", howSum(8, [2, 3, 5]));
console.log("How Sum", howSum(300, [7, 14]));

// Best Sum

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }

    if (targetSum < 0) {
        return null;
    }
    let shortesCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;

        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];

            if (shortesCombination === null || combination.length < shortesCombination.length) {
                shortesCombination = combination;
            }
        }
    }
    memo[targetSum] = shortesCombination;
    return memo[targetSum];
}
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));


// Can Construct
const canConstrcut = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            if (canConstrcut(suffix, wordBank) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;

};

console.log("Can Construct", canConstrcut("abcdef", ["ab", "abc", "cd", "def", "abcd"]));

/// Can comstruct
const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWays = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWays;
        }
    }
    memo[target] = totalCount;
    return memo[target];

};

console.log("Count Construct", countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('Count construct', countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log('Count construct', countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'ee', 'eeee', 'eeeee', 'eeeeeeeeeeeeeeeeeeee']));


/**
 * Write a function `allConstruct(target, workdBank)` that accepts a target string and an array of strings.
 * 
 * 
 * The function should return a 2D array containg all the ways that the  `target` can be constructed by concatenating  elements of the  `wordBank` array.
 *  Each element of the 2D array should represent one combination that constructs the `target`. You may reuse elements of `wordBank` as many times as needed
 * 
 * allconstruct( purple, [purp, p, ur, le ,purpl]) => [[purp, le],[p,ur, p, le]]
 * 
 * allconstruct(purple, [purp, p, ur, le ,purpl]) =>  [[purp, le],[p,ur, p, le]]

    allconstruct(  hello, [cat, dog, mouse]) => []
 */

const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    let result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);

            const suffixWays = allConstruct(suffix, wordBank);

            const targetWays = suffixWays.map(way => [word, ...way]);

            result.push(...targetWays);
        }
    }

    return result;

};

console.log("All Construct", allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('All construct', allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));


var maxSubArray = function(nums) {
    let len = nums.length;

    
    for(let i =0; i < len; i++){
        if(nums[i - 1] > 0){
            nums[i] = nums[i] + nums[i-1];
        }
    }
    console.log(nums);
    return Math.max(...nums);
    
};


console.log('Maximum SubArray', maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));


var longestValidParentheses = function(s) {
    let len =s.length;
    if(s.length == 0){
        return 0;
    }
    
    let  longest = 0;
    
    let i = 0;
    
    while(i < len){
        if((s.charAt(i) == '(' )  && (s.charAt(i+1) == ')' )  ) {   
            longest =  longest + 2 ;
            i = i + 2 
               
    }else{
            i = i+ 1;
        }
    }
    return longest;
    
};
console.log("Longest Parenthesis",longestValidParentheses(")()())"));
console.log("Longest Parenthesis", longestValidParentheses('(()'));
console.log("Longest Parenthesis", longestValidParentheses(""));

