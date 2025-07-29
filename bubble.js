function bubbleSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if they are in wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array:", bubbleSort(array));
