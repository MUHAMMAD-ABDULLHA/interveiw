package main

import (
	"fmt"
)

func main() {
	arr := []int{2, 3, 5, 53, -3}
	fmt.Println(find_max(arr))

}

func find_max(arr []int) int {

	// return if array is empty
	if len(arr) == 0 {
		return 0
	}

	// should initialize with first element of array
	max := arr[0]
	for i := 1; i < len(arr); i++ {
		// if current item is greater than current max
		if arr[i] > max {
			max = arr[i]
		}
	}
	return max
}
