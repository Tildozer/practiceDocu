def nonConstructibleChange(coins):
    # Write your code here.
    minAmountOfCoins = 1
    coins.sort()
    for i in range(len(coins)):
        if coins[i] <= minAmountOfCoins:
            minAmountOfCoins += coins[i]
        else:
            return minAmountOfCoins
            
    return minAmountOfCoins
