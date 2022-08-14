/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// https://duncan-mcardle.medium.com/leetcode-problem-21-merge-two-sorted-lists-javascript-b5a4de3da319

var mergeTwoLists = function (list1, list2) {
    // recursive most efficient approach
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


var mergeTwoLists = function (list1, list2) {
    // check if any list is null
    if (!list1) return list2;
    if (!list2) return list1;

    /// Head of the new linked list - this is the head of the resultant list
    let start = null;
    // Reference pointer which we will move along our resultant list
    let temp = start;

    // choose head which is the smaller of the two lists
    if (list1.val <= list2.val) {
        start = temp = list1;
        list1 = list1.next;
    } else {
        start = temp = list2;
        list2 = list2.next;
    }

    // loop until either of the list becomes null
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
            temp = temp.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
            temp = temp.next;
        }
    }
    // add all the remaining nodes in list 1 and 2
    while (list1) {
        temp.next = list1;
        list1 = list1.next;
        temp = temp.next;
    }

    while (list2) {
        temp.next = list2;
        list2 = list2.next;
        temp = temp.next;
    }

    return start;
};
