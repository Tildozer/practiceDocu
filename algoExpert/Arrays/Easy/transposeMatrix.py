def transposeMatrix(matrix):
    # Write your code here.
    tranposed = []
    for i in range(len(matrix[0])):
        getValuesFromMatrix(matrix, i, tranposed)
    return tranposed


def getValuesFromMatrix(matrix, idx, newArray):
    row = []
    for i in range(len(matrix)):
        row.append(matrix[i][idx])
    newArray.append(row)