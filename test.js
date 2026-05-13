function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    const numberFromList1 = getNumberFromList(l1, 0);
    const numberFromList2 = getNumberFromList(l2, 0);
    return buildList(numberFromList1 + numberFromList2);
};

var buildList = function (number) {
    const listNode = new ListNode();
    if (Math.floor(number / 10) === 0) {
        listNode.val = number;
        listNode.next = null;
    } else {
        listNode.val = number % 10;
        listNode.next = buildList(Math.floor(number / 10));
    }
    return listNode;
};

var getNumberFromList = function (list, i) {
    const pow = 10 ** i;
    if (list.next === null) return list.val * pow;
    return list.val * pow + getNumberFromList(list.next, i + 1);
};
