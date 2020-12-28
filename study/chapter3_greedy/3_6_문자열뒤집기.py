"""
문자열 뒤집기
"""

s = input()

# 0이면 카운트, 1이면 카운트
count_zero, count_one = 0, 0

if s[0] == '0':
    count_zero += 1
else:
    count_one += 1

# 마지막-1번째 인덱스까지
for i in range(len(s) - 1):
    if s[i] != s[i+1]:
        if s[i+1] == '0':
            count_zero += 1
        else:
            count_one += 1

print(min(count_zero, count_one))
