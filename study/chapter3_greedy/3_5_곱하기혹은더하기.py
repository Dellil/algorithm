"""
곱하기 혹은 더하기
"""

nums = input()
result = int(nums[0])

for i in range(1, len(nums)):
    num = int(nums[i])
    sum_value, multiple_value = result + num, result * num

    result = max(sum_value, multiple_value)

print(result)
