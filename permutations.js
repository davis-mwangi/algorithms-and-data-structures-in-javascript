/*

*/

var permuteUnique = function(nums) {
    
    let result = [];
    
    if(nums === null || nums.length === 0){
        return result.push([[]]);
    }
    
    let used = [];
    let permutations = [];
    
    permute(nums, permutations, used, result);
    
    return result;
    
};


const permute  = (nums, permutations, used, result)=> {
    if(nums.length ===  permutations.length){  
           result.push([...permutations]);     
    }
    
    for(let i=0; i< nums.length; i++){
      
        if(used[i]) continue;
        
        used[i] = true;
        
        permutations.push(nums[i]);

        permute(nums, permutations, used, result);
       
        
        permutations.pop();
        
        used[i] = false;

    }
}

console.log(permuteUnique([1,1,2]));