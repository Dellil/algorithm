"""
곱하기 혹은 더하기
"""

nums = input()
result = int(nums[0])

for i in range(1, len(nums)):
    num = int(nums[i])
    sum_value, multiple_value = result + num, result * num
    # 덧셈과 곱셈중 무엇이 더 큰지 비교
    result = max(sum_value, multiple_value)

print(result)
