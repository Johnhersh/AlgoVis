import {quickSort} from './sortingAlgorithms';

export function twoSum(array: Array<number>, target: number, updateVisualsFunction: any){
    quickSort(array, 0, array.length-1, ()=>{});
    
    let left = 0;
    let right = array.length-1;
    while (left < right){
        if (array[left] + array[right] == target) {
            return { a: array[left], b: array[right]};
        }else if (array[left] + array[right] < target) {
                left++;
            } else {
                right--;
            }
    }
    return {a: 0, b: 0};
}