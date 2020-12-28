"""
큰 수의 법칙
"""

n, m, k = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort(reverse=True)

# 첫번째 큰 수와 두번째 큰 수
big1, big2 = nums[:2:]
aggregate = 0

# 더할 때마다 m이 0이 되는지 확인
while True:
    for _ in range(k):
        if m == 0:
            break
        aggregate += big1
        m -= 1

    if m == 0:
        break
    aggregate += big2
    m -= 1


print(aggregate)