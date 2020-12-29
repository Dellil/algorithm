"""
볼링공 고르기
"""

n, m = map(int, input().split())

bowlings = list(map(int, input().split()))

sum = 0

for i in range(len(bowlings) - 1):
    bowling = bowlings[i]
    for b in bowlings[i+1:]:
        if bowling != b:
            sum += 1

print(sum)
