function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


var isPalindrome = function(head) {
    if(head===null){
        return true;
    }
    let fast = head;
    let slow = head;
   
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow =  slow.next;     
    }
    
    
    let fistHalf = head;
    let secondHalf =  reverse(slow.next);
 
    while(fistHalf !== null && secondHalf !== null){
        if(fistHalf.val !== secondHalf.val){
            return false;
        }
        fistHalf =  fistHalf.next;
        secondHalf = secondHalf.next;
    }
     return true; 
};

var reverse= function(head) {
    
    if(head === null){
        return head;
    }
    let current = head;
    let previous = null;
 
    
    while(current){
       let  next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
         return head; 
};


let n1 = new ListNode(1);
let n2 = new ListNode(2, n1);
let n3 = new ListNode(3, n2);
let n4 = new ListNode(4, n3);
let n5 = new ListNode(5, n4);


console.log(n5)
console.log('Reversed :', reverseList(n5));
console.log('Is Palindrome :', isPalindrome(n5));

