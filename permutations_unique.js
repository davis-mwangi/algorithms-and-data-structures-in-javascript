/**
 * Given a collection of numbers, nums, that might contain duplicates, return all 
 * possible unique permutations in any order.
 */

let permutationsUnique = (nums) => {
    let result = [];
    let countMap = new Map();
    let permutations = []

    //create count map

    for (let num of nums) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }
    //call dfs recursively
    dfs(nums, permutations, countMap, result);

    return result;
}

let dfs = (nums, permutations, countMap, result) => {

    if (nums.length === permutations.length) {
        result.push([...permutations]);
    }

    for (let num of nums) {
        if (countMap.get(num)) {

            permutations.push(num);
            countMap.set(num, countMap.get(num) - 1);

            dfs(nums, permutations, countMap, result);

            permutations.pop();
            countMap.set(num, countMap.get(num) + 1);
        }
    }
}