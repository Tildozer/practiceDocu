def isValidSubsequence(array, sequence):
    # Write your code here.
    sequenceI = 0
    for i in range(len(array)):
        currentNum = array[i]
        if currentNum == sequence[sequenceI]:
            sequenceI += 1
        if sequenceI == len(sequence):
            return True
    return sequenceI == len(sequence)
