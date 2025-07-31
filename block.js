// Block Sort implementation in JavaScript
function blockSort(arr) {
    const n = arr.length;
    if (n <= 1) return arr;

    // Helper function to swap elements
    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    // Helper function to merge two sorted subarrays
    function merge(start, mid, end) {
        const left = arr.slice(start, mid);
        let i = 0, j = mid, k = start;

        while (i < left.length && j < end) {
            if (left[i] <= arr[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = arr[j++];
            }
        }

        while (i < left.length) {
            arr[k++] = left[i++];
        }
    }

    // Calculate block size (square root of array length is a common choice)
    const blockSize = Math.floor(Math.sqrt(n));

    // Step 1: Sort small blocks of size blockSize
    for (let i = 0; i < n; i += blockSize) {
        // Use insertion sort for small blocks
        for (let j = i + 1; j < Math.min(i + blockSize, n); j++) {
            let key = arr[j];
            let k = j - 1;
            while (k >= i && arr[k] > key) {
                arr[k + 1] = arr[k];
                k--;
            }
            arr[k + 1] = key;
        }
    }

    // Step 2: Merge blocks iteratively
    for (let size = blockSize; size < n; size *= 2) {
        for (let start = 0; start < n; start += 2 * size) {
            const mid = Math.min(start + size, n);
            const end = Math.min(start + 2 * size, n);
            if (mid < end) {
                merge(start, mid, end);
            }
        }
    }

    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
blockSort(array);
console.log("Sorted array:", array);
