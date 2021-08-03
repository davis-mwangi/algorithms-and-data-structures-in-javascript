


const allConstruct = (nums, target) => {
    const table =  Array(target  + 1).fill().map(() => []);

    table[0] = [[]];

    console.log(table);

    for(let i=0; i <=  target;  i++){
       
        for(let num of nums){
             let newVal =  [...table[i], num];
             
             table[i+num].push(...newVal);
            
        }
    }

    return table[target];
 
 };

console.log('Candidate', allConstruct([2,3,6,7], 7));