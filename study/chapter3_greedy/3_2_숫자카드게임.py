"""
숫자 카드 게임
"""

n, m = map(int, input().split())

lists = []

for _ in range(n):
    lists.append(list(map(int, input().split())))

small = 0

# 각 행의 작은 수들중 큰 수 찾기
for list in lists:
    tmp = 10001
    for num in list:
        tmp = min(tmp, num)
    small = max(small, tmp)

print(small)
