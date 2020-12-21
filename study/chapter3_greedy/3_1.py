n, m, k = map(int, input().split())
nums = list(map(int, input().split()))
nums.sort(reverse=True)

big1, big2 = nums[:2:]
aggregate = 0


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