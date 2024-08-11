export default function concatArrays(array1, array2, string) {
    // Spread out each character in the string and arrays
    // into a new array, using the spread operator.
    return [...array1, ...array2, ...string];
}