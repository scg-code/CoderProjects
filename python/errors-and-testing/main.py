class NegativeNumberError(Exception):
   pass

try:
    n = int(input("Enter a numerator: "))
    d = int(input("Enter a denominator: "))

    if n < 0 or d < 0:
        raise NegativeNumberError()

    q = n / d # Exception was raised when trying to divide by zero

    print(q)

except ZeroDivisionError:
  print("Denominator cannot be zero")

except ValueError:
   print("inputs must be integers")

except NegativeNumberError:
   print("inputs cannot be negative numbers")

except Exception as e:
   print(e)
   print("Something went wrong")
    # Log debug information (including traceback) to an error log file