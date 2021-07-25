var generateParenthesis = function(n) {
    
    return backTrack(0, 0, n);
 };
 
 function backTrack(open, closed, n){
     let combinations = [];
     let stack = [];
     
     if(closed === open === n){
         combinations.push(stack);
         return;
     }
     if(open < n){
         stack.push("(");
         console.log(stack);
         backTrack(open + 1, closed, n)
     }
     
     if(closed < open){
         stack.push(")");
         backTrack(open, closed + 1, n);
     }
    
     return combinations;
 }

 generateParenthesis(3);