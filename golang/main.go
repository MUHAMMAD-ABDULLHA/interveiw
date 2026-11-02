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

	testCases := []struct {
		input    string
		expected bool
		name     string
	}{
		{"()", true, "Simple parentheses"},
		{"()[]{}", true, "Multiple bracket types"},
		{"(]", false, "Mismatched brackets"},
		{"([)]", false, "Incorrect nesting"},
		{"([])", true, "Correct nested brackets"},
		{"(((", false, "Unmatched opening brackets"},
		{")))", false, "Unmatched closing brackets"},
		{"(()", false, "Missing closing bracket"},
		{"{[]}", true, "Multiple nested brackets"},
		{"", false, "Empty string"},
		{"[", false, "Single opening bracket"},
		{"]", false, "Single closing bracket"},
		{"({[]})", true, "Deep nesting"},
		{"((()))", true, "Repeated nested parentheses"},
		{"([{}])", true, "All bracket types nested"},
	}

	passed := 0
	failed := 0

	fmt.Println("======= VALID PARENTHESES TESTS =======")

	for _, test := range testCases {

		actual := isValid(test.input)

		if actual == test.expected {
			fmt.Printf("PASS: %-30s | Input: %-10q\n",
				test.name, test.input)
			passed++
		} else {
			fmt.Printf("FAIL: %-30s | Input: %-10q | Expected: %v | Got: %v\n",
				test.name, test.input, test.expected, actual)
			failed++
		}
	}

	fmt.Println("\n======= TEST SUMMARY =======")
	fmt.Printf("Total Tests: %d\n", len(testCases))
	fmt.Printf("Passed: %d\n", passed)
	fmt.Printf("Failed: %d\n", failed)
}
