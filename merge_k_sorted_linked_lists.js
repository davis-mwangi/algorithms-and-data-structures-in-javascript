function Node(data, next) {
    this.data = (data === undefined ? 0 : data)
    this.next = (next === undefined ? null : next)
}


var mergeKLists = function (lists) {

    let mergedLinkedList = lists[0];

    for (let i = 1; i < lists.length; i++) {

        let listNode = lists[i];


        mergedLinkedList = mergeLists(mergedLinkedList, listNode);
    }

    return mergedLinkedList;

};

function mergeLists(head1, head2) {
    let head3 = null;
    
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    
    if(head1.data < head2.data){
        head3  = head1;
        head1 =  head1.next;
    }else{
        head3 = head2;
        head2 = head2.next;
    }
    
    let currentNode = head3;
    
    while(head1 !== null && head2 !== null){
        
        if(head1.data < head2.data){
            currentNode.next = head1;
            head1 = head1.next;
        }else{
            currentNode.next = head2;
            head2 = head2.next;
        }
        
        currentNode =  currentNode.next;
    }
    
    if(head1 == null){
        currentNode.next = head2;
    }
    if(head2 == null){
        currentNode.next = head1;
    }
    
    return head3;

}
var mergeKLists = function(lists) {
    console.log(lists.length);
    
    if(lists.length === 2 ){
        return mergeLists(lists[0], lists[1]);
    }
   

    return mergeKLists( parseInt(lists/2,10 ));
    
};



// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1;

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4;

// console.log( L2);

// console.log(mergeKLists(L1, L2));
console.log(mergeKLists([L1, L2]));

