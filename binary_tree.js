/**
 * You are given the root node of a binary search 
 * tree (BST) and a value to insert into the tree. 
 * Return the root node of the BST after the 
 * insertion. It is guaranteed that the new value 
 * does not exist in the original BST.

Notice that there may exist multiple valid ways for 
the insertion, as long as the tree remains a BST 
after insertion. You can return any of them.
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var insertIntoBST = function (root, val) {
    console.log(root);
    if (root === null) {
        root = new TreeNode(val);
    }

    else if (val < root.val) {
        root.left = insertIntoBST(root.left, val);

    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}
insertIntoBST(4)
insertIntoBST(2)
insertIntoBST(7)
insertIntoBST(1)
console.log(insertIntoBst(3))

const searchBST = (root, val) => {
    if (root === null) {
        return null;
    }

    if (val < root.val) {
        return searchBST(root.left, val);

    } else if (val > root.val) {
        return searchBST(root.right, val);

    } else {
        return root;
    }

}

//Traverse inorder[left -> root -> right]
const inorderTraversal =(root) => {
    results = [];
    if(root == null){
        return [];
    }
   
    traverseInorder(root, results);
    return results;
}

const traverseInorder =(root, results) => {
    if(root === null) return [];

    traverseInorder(root.left, results);
    results.push(root.val);
    traverseInorder(root.right, results);
}

//Preorder traversal [root -> left -> right]
var preorderTraversal = function(root) {
    results = [];
    if(root === null){
        return [];
    }
    traverse(root, results);
    return results;
    
};

const traversePreorder = (root, results) => {
    if(root === null){
        return [];
    }
    results.push(root.val);
    traversePreorder(root.left, results);
    traversePreorder(root.right, results);
}
//Postorder traversal [left -> right -> root]
var postorderTraversal = function(root) {
    let results = [];
    if(root ===null){
        return [];
    }
    
    traversePostorder(root, results);
    
    return results;
    
};

const traversePostorder = (root, results) => {
    if(root === null )return [];
    
    traversePostorder(root.left, results);
    traversePostorder(root.right, results);
    results.push(root.val);
}

//Maximun Depth of Binary Tree
function maximumDepth(root){
    if(root === null){
        return 0;
    }
    return 1 + Math.max(maximumDepth(root.left), maximumDepth(root.right));
}


//Minimun Depth of Binary Tree Recursively
function minDepth(root){
    if(root  === null){
        return  0;
    }
    if(root.left== null && root.right ===null){
        return 1;
    }
    else if (root.left === null){
        return 1 + minimumDepth(root.right);
  
    }else if(root.right === null){
        return 1+ minimumDepth(root.left);
    }
    return 1 + Math.min(minimumDepth(root.left),minimumDepth(root.right));
}
//Minimun Depth of Binary Tree Iteratively
var minDepth = function(root) {
    
    if(root === null){
        return 0;
    }
    let queue = [];
    let depth = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        let numberOfNodes = queue.length;
        
        while(numberOfNodes > 0){
            
            let currentNode = queue.shift();
            
            //We got to leaf node
            if(currentNode.left === null && currentNode.right === null){
                depth++;
                return depth;
            }
            if(currentNode.left !== null){
                queue.push(currentNode.left);
            }
            if(currentNode.right !== null){
                queue.push(currentNode.right);
            }
            numberOfNodes -=1;
        }
        depth +=1;
        
    }
    
    return depth;
    
};