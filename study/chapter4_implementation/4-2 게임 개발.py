"""
게임 개발
사용 알고리즘 - 단순구현
시간복잡도 - 음.. 어떻게 표현해야될까요?
"""
import copy

row, column = map(int, input().split())
x, y, d = map(int, input().split())

# 맵 만들기
map_lists = [list(map(int, input().split())) for _ in range(row)]

# 방문한 곳 기록용 배열 만들고, 현재 위치 기록하기, 기록변수 작성
checked_lists = copy.deepcopy(map_lists)
checked_lists[x][y] = 1
checked = 1

# 바라보는 방향별(북, 동, 남, 서) 순서로 이동좌표 만들기
dx_list = [-1, 0, 1, 0]
dy_list = [0, 1, 0, -1]


def turn_to_left():
    global d
    d -= 1
    if d == -1:
        d = 3


turn_count = 0

# 시작
while True:
    turn_to_left()
    turn_count += 1
    dx, dy = x + dx_list[d], y + dy_list[d]

    # 아직 안 가본 "땅"일때
    if checked_lists[dx][dy] == 0 and map_lists[dx][dy] == 0:
        checked_lists[dx][dy] = 1
        d = 0
        x, y = dx, dy
        checked += 1
        turn_count = 0
        continue
    if turn_count == 4:
        dx, dy = x - dx_list[d], y - dy_list[d]

        if map_lists[dx][dy] == 1:
            break

        x, y = dx, dy
        turn_count = 0

print(checked)
