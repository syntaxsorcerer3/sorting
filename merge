function mergeSort(arr) {
    // Base case: if array has 1 or fewer elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle point to divide array into two halves
    const mid = Math.floor(arr.length / 2);
    
    // Divide array into left and right halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    
    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and merge in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    // Add remaining elements from left array, if any
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    
    // Add remaining elements from right array, if any
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

// Example usage:
// const arr = [64, 34, 25, 12, 22, 11, 90];
// console.log(mergeSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
