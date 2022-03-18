# nodejs로 무슨 짓을 해도 안 풀려서 파이썬으로 풀었다. 근데 풀 필요가 없었다.
quests, maximumArcanes = map(int, input().split())
gainingExperiences = list(map(int, input().split()))
gainingExperiences.sort()

sum = 0

for i in range(0, len(gainingExperiences)):
    if(i > maximumArcanes) :
        sum += gainingExperiences[i] * maximumArcanes
    elif(i - maximumArcanes <= 0):
        sum += gainingExperiences[i] * (maximumArcanes - abs(i - maximumArcanes))

print(sum)