"""
    OO 05-05-2020

    Task
    ----------------------------------------------------------------------------------------------------------
    Complete the Difference class by writing the following:

    - A class constructor that takes an array of integers as a parameter and saves it to the 'elements' instance variable.
    - A computeDifference method that finds the maximum absolute difference between any 2 numbers in 'N' and stores it in the
    'maximumDifference' instance variable.

    * Had to complete in Python since Javascript lacks private variables
"""


class Difference:
    def __init__(self, a):
        self.__elements = a
        self.maximumDifference = None

    # Add your code here
    def computeDifference(self):
        for i, firstElement in enumerate(self.__elements):

            if i < len(self.__elements) - 1:
                nextIterator = i + 1

                for j, secondElement in enumerate(self.__elements, nextIterator):
                    absoluteDifference = abs(firstElement - secondElement)

                    if (
                        self.maximumDifference is None
                        or absoluteDifference > self.maximumDifference
                    ):
                        self.maximumDifference = absoluteDifference


_ = input()
a = [int(e) for e in input().split(" ")]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
