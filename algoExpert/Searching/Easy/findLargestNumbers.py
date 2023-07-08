def findThreeLargestNumbers(array):
    # Write your code here.
    largestNumbers = [array[0], array[1], array[2]]
    largestNumbers.sort()
    for i in range(3 , len(array)):
        currentNum = array[i]
        if currentNum > largestNumbers[2]:
            largestNumbers[0] = largestNumbers[1]
            largestNumbers[1] = largestNumbers[2]
            largestNumbers[2] = currentNum
        elif currentNum > largestNumbers[1]:
            largestNumbers[0] = largestNumbers[1]
            largestNumbers[1] = currentNum
        elif currentNum > largestNumbers[0]:
            largestNumbers[0] = currentNum
    return largestNumbers