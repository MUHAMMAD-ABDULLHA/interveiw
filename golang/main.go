package main

import "fmt"

func createList(values []int) *ListNode {
	var head *ListNode
	var tail *ListNode

	for _, value := range values {
		node := &ListNode{val: value}

		if head == nil {
			head = node
			tail = node
		} else {
			tail.next = node
			tail = node
		}
	}

	return head
}

func displayList(head *ListNode) {
	for curr := head; curr != nil; curr = curr.next {
		fmt.Printf("%d -> ", curr.val)
	}
	fmt.Println("nil")
}

func main() {
	// Test linked-list reversal
	listCases := [][]int{
		{},
		{1},
		{1, 2},
		{1, 2, 3},
		{1, 2, 3, 4, 5},
		{-1, -2, -3},
		{7, 7, 7},
	}

	fmt.Println("=== Reverse Linked List ===")

	for _, values := range listCases {
		head := createList(values)

		fmt.Printf("Before: ")
		displayList(head)

		reversed := reverseList(head)

		fmt.Printf("After:  ")
		displayList(reversed)
		fmt.Println()
	}

	// Test find_max
	maxCases := [][]int{
		{2, 3, 5, 53, -3},
		{-4, -9, -2, -15},
		{5},
		{7, 7, 7},
		{10, 2, 10, 3},
	}

	fmt.Println("=== Find Maximum ===")

	for _, arr := range maxCases {
		fmt.Printf("Array: %v | Maximum: %d\n",
			arr, find_max(arr))
	}
}
