function merge(array1, array2) {

    let mergedArray = []
    let i = 0
    let j = 0
  
    while (i < array1.length && j < array2.length) {
        if (array2[j] > array1[i]) {
            mergedArray.push(array1[i])
            i++
        } else {
            mergedArray.push(array2[j])
            j++
        }
    }
  
    while (i < array1.length) {
        mergedArray.push(array1[i])
        i++
    }
  
    while (j < array2.length) {
        mergedArray.push(array2[j])
        j++
    }
  
    return mergedArray
}

function mergeSort(array) {
    if (array.length <= 1) return array
    const middle = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, middle))
    const right = mergeSort(array.slice(middle))

    return merge(left, right)
}

module.exports = { merge, mergeSort};