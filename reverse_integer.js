function hasDuplicates(str){
    let map = new Map();
    
    for(let i=0; i< str.length;i++){
        
        if(map.has(str.charAt(i))){
            return true;
        }
        map.set(str.charAt(i), 1);    
        
    }
    return false;
}

console.log()