var isPalindrome = function(x) {
    
    if(x < 0){
        return false;
    }
    let str = x.toString();
    
    
    let stack =  [];
    
    for(let i= 0; i < str.length; i++){
        stack.push(str.charAt(i));
    }
    let j =0;
    
    console.log(stack);
    while (j < str.length){
        if(stack.pop() != str.charAt(j)){
            return false;
        }
        j++;
    }
    return true;
    
};

console.log(isPalindrome(10), false);
console.log(isPalindrome(121), true);
console.log(isPalindrome(-121), false);