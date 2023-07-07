def sortedSquaredArray(array):
    # Write your code here.
    squaredArray = []
    for i in range(len(array)):
        current = array[i] ** 2
        squaredArray.append(current)
    squaredArray.sort()
        
    return squaredArray