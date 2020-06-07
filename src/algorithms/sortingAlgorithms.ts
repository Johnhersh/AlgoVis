// Non-recursive Merge Sort code
export const iterativeMergeSort = (
  array: Array<number>,
  updateVisualsFunction: any
) => {
  let result = array;

  let length = result.length;

  let buffer: Array<number> = []; // A buffer I can push results into

  for (let size = 1; size < length; size *= 2) {
    // leftStart serves of the index for each pair
    for (let leftStart = 0; leftStart < length; leftStart += 2 * size) {
      let leftIndex = leftStart;
      let rightIndex = Math.min(leftIndex + size, length);

      let leftLimit = rightIndex;
      let rightLimit = Math.min(rightIndex + size, length);

      let i = leftIndex;

      /*
            The first while loop will check if the left and right
            indexes are both less than their limits
            Then it will push which ever value is smaller into 
            the buffer array, increases the iterator and the 
            index values, exit the loop
            */
      while (leftIndex < leftLimit && rightIndex < rightLimit) {
        if (result[leftIndex] <= result[rightIndex]) {
          updateVisualsFunction(i, result[leftIndex]);
          buffer[i] = result[leftIndex];
          leftIndex++;
          i++;
        } else {
          updateVisualsFunction(i, result[rightIndex]);
          buffer[i] = result[rightIndex];
          rightIndex++;
          i++;
        }
      }

      while (leftIndex < leftLimit) {
        updateVisualsFunction(i, result[leftIndex]);
        buffer[i] = result[leftIndex];
        leftIndex++;
        i++;
      }

      while (rightIndex < rightLimit) {
        updateVisualsFunction(i, result[rightIndex]);
        buffer[i] = result[rightIndex];
        rightIndex++;
        i++;
      }
    }

    let temp = result;
    result = buffer;
    buffer = temp;
  }

  return result;
};

// Quicksort code
export function quickSort(
  array: Array<number>,
  start: number,
  end: number,
  updateVisualsFunction: any
) {
  if (start >= end) return;

  let index = partition(array, start, end, updateVisualsFunction);

  quickSort(array, start, index - 1, updateVisualsFunction);
  quickSort(array, index + 1, end, updateVisualsFunction);
}

function partition(
  array: Array<number>,
  start: number,
  end: number,
  updateVisualsFunction: any
) {
  let pivotIndex = start;
  let pivotValue = array[end];

  for (let i = start; i < end; i++) {
    if (array[i] < pivotValue) {
      swapElementsInArray(array, i, pivotIndex);
      updateVisualsFunction(pivotIndex, array[pivotIndex]);
      updateVisualsFunction(i, array[i]);
      pivotIndex++;
    }
  }
  swapElementsInArray(array, pivotIndex, end);
  updateVisualsFunction(end, array[end]);
  updateVisualsFunction(pivotIndex, array[pivotIndex]);

  return pivotIndex;
}
// End of Quicksort code

// Bubble Sort code
export function bubbleSort(array: Array<number>, updateVisualsFunction: any) {
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array.length - i - 1; j++) {
      let a = array[j];
      let b = array[j + 1];
      if (a > b) {
        swapElementsInArray(array, j, j + 1);
        updateVisualsFunction(j, array[j]);
        updateVisualsFunction(j + 1, array[j + 1]);
      }
    }
}
// End of Bubble Sort code

// Generic code
function swapElementsInArray(array: Array<number>, a: number, b: number) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
