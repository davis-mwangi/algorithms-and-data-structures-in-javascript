/**
 * Given an unsorted integer array nums, find the smallest missing positive integer.

 You must implement an algorithm that runs in O(n) time and uses constant extra space.
 */

 var firstMissingPositive = function(nums) {
    let containsOne = false;
    
    for(let num of nums){
        if(num === 1){
            containsOne = true;
            break;
        }
    }
    
    if(!containsOne) return 1;
    
    let n = nums.length;
    
    if(n==1) return 2;
    
    for(let i=0; i< n;i++){
        if(nums[i] <= 0 || nums[i] > n){
            nums[i] = 1;
        }
    }
    
    console.log('Updated:', nums);
    for(let i=0; i < n; i++){
        console.log('before abs:', nums, " : " ,nums[i]);
        let x = Math.abs(nums[i]);
        if(nums[x -1] > 0) nums[x -1 ] *= -1;
    }
    console.log('Updated 2:', nums);
    for(let i=0; i< n; i++){
        if(nums[i] > 0) return i+1;
    }
     
    return n+1;
};

console.log(firstMissingPositive([1,2,0]))
console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive( [7,8,9,11,12]))