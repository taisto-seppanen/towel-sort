// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) {
        return [];
    }

    let arr = [];

    for (let i = 0; i < matrix.length; i++) {
        arr.push(matrix[i]);

        if (i % 2 != 0) {
            arr[i].reverse();
        }
    }

    return arr.flat();
};
