def findClosestValueInBst(tree, target):
    # Write your code here.
    return searchForClosest(tree, target, float('inf'))


def searchForClosest(node, target, closest):
    if node == None:
        return closest
    if abs(closest - target) > abs(node.value  - target):
        closest = node.value
    if target > node.value:
        return searchForClosest(node.right, target, closest)
    else:
        return searchForClosest(node.left, target, closest)

# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None