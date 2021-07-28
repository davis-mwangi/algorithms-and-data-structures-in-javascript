// fibonacci
const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];

}

console.log('fib', fib(6));
console.log('fib', fib(50));

/**
 * Say that you are a traveller on 2D grid. You begin in the top-left corner and your goal is to 
 * travel to the botton-right corner. You may only move down or right.
 * 
 * In how many ways can you travel to the goal on a grid with dimensions  m * n?
 * 
 * Write a fucntion  `gridTraveler(m, n)` that calculates this.
 * 
 */
const gridTraveler = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    table[1][1] = 1;


    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            let current = table[i][j];
            if (i + 1 <= n) table[i + 1][j] += current;
            if (j + 1 <= m) table[i][j + 1] += current;
        }
    }
    console.log(table);

    return table[m][n];



}

console.log(gridTraveler(3, 2));
// console.log(gridTraveler(18, 18));



const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
}

console.log('Can Sum', canSum(7, [5, 3, 4, 7]));
console.log('Can Sum', canSum(300, [7, 14]));

/**
 * Write a function   `howSum(targetSum, numbers)` that takes in a targetSum and an
 * array of numbers as arguments.
 * 
 * The function should return an array containing any combination of elements that add
 * up to exactly the targetSum.
 * 
 * If there is no combination that adds up to the targetSum, then return null;
 * 
 * If there are multiple combinations possible , you may return any single one.
 */

const howSum = (targetSum, numbers) => {
    let table = Array(targetSum + 1).fill(null);
    table[0] = [];

   

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }
    return table[targetSum];


}

console.log('How Sum', howSum(7, [2, 3]));
console.log('How Sum', howSum(7, [5, 3, 4, 7]));
console.log('How Sum', howSum(300, [7, 14]));

/**
 * Write a function   `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers
 * as arguments.
 * 
 * The fucntion should return an array containing  the shortest combination of numbers that add up to 
 * exactly the targetSum.
 * 
 * If there is a tie for the shortest combination, you may return  any one of the shortest.
 */

const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);

    table[0] = [];

    for(let i=0; i<= targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                let newValue  =  [...table[i], num];
                let oldValue = table[i+num];
                if( !oldValue || newValue.length < oldValue.length){
                    table[i + num] = newValue;
                }
            }
        } 
    }
    return table[targetSum];
}

console.log("Best Sum",bestSum(7, [5,3,4,7]));
console.log("Best Sum",bestSum(8, [2,3,5]));
console.log('Best Sum',bestSum(9, [1,4,5] ));
console.log('Best Sum',bestSum(100, [1,2,5,25] ));

/**
 * Write a fucntion `canConstruct(target, wordBank)` that accepts a target string and an array of strings
 * 
 * The function should return a boolean indicating whether or not the `target`  can be constructed by
 * concatenating elements of the `wordBank` array.
 * 
 * You may reuse elements of the `wordBank` as many times as needed.
 */


 const canConstrcut = (target, wordBank) => {
     const table =Array(target.length + 1).fill(false);

     table[0]= true;

     for(let i=0; i <=  target.length; i++){
         if(table[i] ===  true){
             for(let word of wordBank){
                 //if the word matched the characters starting at position i
                 if(target.slice(i, i +  word.length) ===  word){
                    table[i + word.length] =  true;
                 }
             }
         }
     }

     return table[target.length];

}

console.log("Can Construct",  canConstrcut('abcdef', ['ab','abc','cd','def','abcd']));

/**
 * Write a functon `countConstruct(target, wordBank)`  that accepts a target string and an
 * array of strings
 * 
 * The function should return the  number of ways that the `target` can be constructed by concatenating
 * elements of the `wordBank` array.
 * 
 * You may reuse elements of the `wordBank` as many times as needed.
 */

const countConstruct =(target, wordBank) => {
    const table =  Array(target.length + 1).fill(0);

    table[0] = 1;

    for(let i=0; i <= target.length;  i++){
        for(let word of wordBank){
            if(target.slice(i, i +  word.length) === word){
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];
}


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
       const table =  Array(target.length  + 1).fill().map(() => []);

       table[0] = [[]];

       for(let i=0; i <=  target.length;  i++){
           for(let word of wordBank){
               if(target.slice(i, i + word.length) ===  word){
                   const newCombinations =  table[i].map(subArray => [...subArray, word]);
                   table[i +  word.length].push(...newCombinations);
               }
           }
       }

       return table[target.length];
    
    };

console.log("All Construct", allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log('All construct', allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log('All construct', allConstruct('', ['cat', 'dog']));
console.log('All construct', allConstruct('birds',['cat', 'dog']));