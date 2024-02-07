let arr = [24,35,87,37,39]
let key = 7

let compare = (a,b) => {
    return a-b
}

arr = arr.sort(compare)
console.log(arr)

function binarySearch(arr, key) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] == key) {
            return mid; 
        } else if (arr[mid] < key) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }
    
    return "Element is not in this list";
}

let res = binarySearch(arr, key)
console.log(res)