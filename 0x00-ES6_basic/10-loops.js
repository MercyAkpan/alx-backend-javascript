export default function appendToEachArrayValue(array, appendString) {
    for (const idx of array) {
        // idx is the value of the array element
        // array.indexOf(idx) is the index of the array element
        // The below code is to modify the value of the array element in place.
        array[array.indexOf(idx)] = appendString + idx;
    }
  
    return array;
  }