/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longest ="";
    let len = 0
     let counter =0
    
    if(s.length <= 1){
        return s;
    }
    
    for(let i=0 ; i < s.length; i++){
        let left = i; 
        let right = i; 
       
        
        // odd length
        while((left >= 0  && right < s.length) && s.charAt(left) === s.charAt(right)){
            if((right - left + 1) > counter){
                longest = s.slice(left, right+1);
                counter = right - left + 1;
            }
              
              left--;
              right++;      
        }
        
        //even length
        left = i;
        right = i+1
        
        while((left >= 0  && right < s.length) && s.charAt(left) === s.charAt(right)){
            if((right - left + 1) > counter){
                
                longest = s.slice(left, right+1);
                counter = right - left + 1;
            }
              
              left--;
              right++;      
        }
        
        
    }
    
    return longest;
    
    
};



