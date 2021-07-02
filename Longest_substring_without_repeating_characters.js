/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) { // O(n)
    let left = 0;
   let right = 0;
   let mySet = new Set(); //   k e w
   let max = 0 ; // 2
   
   while(right < s.length){
       
       if(!mySet.has(s.charAt(right))){
           
           mySet.add(s.charAt(right));
           right ++;
           
           max = Math.max( mySet.size, max);
           
       }else{
           
           mySet.delete(s.charAt(left));
           left++;     
       }
   }
   return max;
};


console.log(lengthOfLongestSubstring("au"));

console.log(lengthOfLongestSubstring("au"));