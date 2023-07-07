def twoNumberSum(array, targetSum):
    # Write your code here.
    set = {}
    array.sort()
    for x in range(len(array)):
        number_check = targetSum - array[x]
        print(number_check)
        if number_check in set:
            return [number_check, array[x]]
        else:
            set[array[x]] = True
    return []