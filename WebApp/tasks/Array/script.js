// Вхідний масив А
const A = [4, 8, 2, 6, 1];
// Знаходимо максимальний елемент масиву А
const max = Math.max(...A);
// Побудова масиву В за заданою формулою
const B = A.map(ai => max * ai);

// Виведення вхідного масиву
const inputArray = document.getElementById('inputArray');
inputArray.innerHTML = A.map(ai => `<span>${ai}</span>`).join(', ');

// Виведення вихідного масиву
const outputArray = document.getElementById('outputArray');
outputArray.innerHTML = B.map(bi => `<span>${bi}</span>`).join(', ');

// Сортування вихідного масиву за зменшенням методом вставки
function insertionSortDecreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

// Виклик функції сортування
const sortedB = insertionSortDecreasing(B);

// Виведення відсортованого масиву
const sortedArray = document.getElementById('sortedArray');
sortedArray.innerHTML = sortedB.map(bi => `<span>${bi}</span>`).join(', ');
