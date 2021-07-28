
var removeDuplicates = function(nums) {
 
    let index = 0;
    let current = nums[0];
    
    for(let i=0; i<= nums.length -1 ; i++){
       
        if(current !== nums[i]){               
            current = nums[i];
            index += 1;
            nums[index] = nums[i];   
        }
        
    }
  

    return nums.slice(0, index+1);
    
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));