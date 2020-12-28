"""
만들 수 없는 금액
"""

n = int(input())
coins = list(map(int, input().split()))
coins.sort()

min_value = 1

# 그리디는 현재 상황에서 가장 좋아보이는 것을 선택하는 알고리즘
# 따라서 현재상태는 min_value-1까지의 합을 만드는 것
# 가장 좋아보이는 것은 현재 동전이 min_value값을 만들 수 있는지 ( min_value >= coin )
# 만들 수 있다면 min_value에 더해버림
# 만들수 없다면 그 당시의 min_value가 최솟값이 되어버림
for coin in coins:
    if min_value >= coin:
        min_value += coin
    else:
        break

print(min_value)