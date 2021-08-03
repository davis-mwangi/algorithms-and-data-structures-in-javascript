/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only 
 * distinct numbers from the original list. Return the linked list sorted as well.
 * 
 * Input: head = [1,2,3,3,4,4,5]
    Output: [1,2,5]

    Input: head = [1,1,1,2,3]
    Output: [2,3]
 */


 var deleteDuplicates = function(head) {
    
    let dummyNode = new ListNode();
    
    dummyNode.next = head;
    
    let current = dummyNode;
    
    while(current !== null){
        
        //if next 2 nodes are equal move current forward 
        if(current.next && current.next.next && current.next.val === current.next.next.val){
            let temp = current.next.next;
          
            while(temp && temp.next && temp.val === temp.next.val){
                temp = temp.next;
            }
            current.next = temp.next;
            
        }else{
            current = current.next;
        }
    }
    
   
    return dummyNode.next;
    
};