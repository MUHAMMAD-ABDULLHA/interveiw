function ListNode(val, next){
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let reverseList = function(head){
    let prev = null;
    let curr = head;
    while(curr !== null){
        let temp = curr.next;   // save the next node
        curr.next = prev;       // reverse current link 
        prev = curr;            // move previous forward
        curr = temp;            // move current forward
    }
    return prev;
}

const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const head = new ListNode(1, node2);

// 1 -> 2 -> 3 -> null
const reversed = reverseList(head);

// 3 -> 2 -> 1 -> null

function displayList(head) {
    let curr = head;
    const values = [];

    while (curr !== null) {
        values.push(curr.val);
        curr = curr.next;
    }

    console.log(values.join(" -> ") + " -> null");
}

displayList(reversed);