"""
1이 될 때까지
"""

n, k = map(int, input().split())
count = 0

# 나눌 수 있으면 나누고, 그렇지 못할 때는 빼기
while n != 1:
    if (n % k) == 0:
        n //= k
    else:
        n -= 1
    count += 1

print(count)
