import sys

n, m = map(int, input().split())

lists = []

for _ in range(n):
    lists.append(list(map(int, input().split())))

small = 0

for list in lists:
    tmp = 10001
    for num in list:
        tmp = min(tmp, num)
    small = max(small, tmp)

print(small)
