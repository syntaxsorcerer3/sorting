# Sorting Algorithms in JavaScript

Welcome to the **Sorting** repository!  
This project showcases a variety of sorting methods implemented in JavaScript, offering educational examples and practical code for developers and learners interested in algorithm fundamentals.

---

## 🚀 Features

- **Multiple Sorting Techniques:**  
  Explore classic algorithms like Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and more—all written in clean, modern JavaScript.

- **Readable & Modular Code:**  
  Each algorithm is implemented as a standalone function for easy reuse and study.

- **Comparisons & Performance:**  
  Some implementations include benchmarks and comparisons to help you understand their efficiency in different scenarios.

---

## 📂 Table of Contents

- [About](#about)
- [Sorting Algorithms](#sorting-algorithms)
- [How to Use](#how-to-use)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About

Sorting is a fundamental concept in computer science. This repository aims to provide clear, well-documented implementations of various sorting algorithms, suitable for beginners and experienced developers alike.

---

## 🧮 Sorting Algorithms

Algorithms you may find here include:

- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Shell Sort
- Counting Sort (for integers)
- Radix Sort (optional)
- And more!

---

## 🔧 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/syntaxsorcerer3/sorting.git
   ```
2. **Navigate into the directory:**
   ```bash
   cd sorting
   ```
3. **Run or test algorithms:**
   - Open the JavaScript files in your favorite editor.
   - Use Node.js to execute any sorting script:
     ```bash
     node bubbleSort.js
     ```

---

## 💡 Examples

### Bubble Sort Example

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Usage
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // [1, 2, 5, 5, 6, 9]
```

---

## 🤝 Contributing

Contributions are welcome!  
If you’d like to add a new sorting algorithm, improve an existing one, or fix a bug, please open a pull request or create an issue.

---

## 📄 License

This repository is licensed under the [MIT License](LICENSE).

---

Enjoy exploring sorting algorithms in JavaScript!  
⭐️ Star this repo to support the project.
