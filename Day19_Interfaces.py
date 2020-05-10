class AdvancedArithmetic(object):
    def divisorSum(n):
        raise NotImplementedError

class Calculator(AdvancedArithmetic):
    def divisorSum(self, n):
        divisors = []
        sum = None

        itr = n
        while itr <= n:
            if n % itr == 0:
                divisors.append(itr)

            itr -= 1

            if itr == 0:
                break

        if len(divisors) > 0:
            sum = 0
            for number in divisors:
                sum += number

        return sum


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
