const swap = (arr, pos1, pos2) => {
    [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
};

const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const pos1 = Math.floor(Math.random() * arr.length);
        const pos2 = Math.floor(Math.random() * arr.length);
        swap(arr, pos1, pos2);
    }
};

const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, i, min);
        }
    }
};

const quick_sort = (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    const pivot = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);

    quick_sort(arr, start, pivotIndex - 1);
    quick_sort(arr, pivotIndex + 1, end);
};

const particionamento = (arr, start, end, pivot) => {
    let left = start;
    let right = end - 1;

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    swap(arr, left, end);
    return left;
};
