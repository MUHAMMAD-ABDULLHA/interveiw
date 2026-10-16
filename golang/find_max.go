package main

import (
	"fmt"
)

func main() {
	arr := []int{2, 3, 5, 53, -3}
	fmt.Println(find_max(arr))

}

func find_max(arr []int) int {
	max := arr[0]
	if len(arr) == 0 {
		return 0
	}
	for i := 0; i < len(arr); i++ {
		if arr[i] > max {
			max = arr[i]
		}
	}
	return max
}
