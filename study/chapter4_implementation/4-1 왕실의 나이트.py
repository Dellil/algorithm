"""
왕실의 나이트
자료구조 - X
시간복잡도 - O(1)
이유 - 입력케이스에 상관없이, 일정하게(8번씩) for문 돌아서 O(1)이라 생각
"""

coordinate = input()

# column a ~ h(97 ~ 104), row => 1 ~ 8
column, row = ord(coordinate[0]), int(coordinate[1])

# 수직, 수평의 순으로 조합
knight_steps = [(-1, -2), (1, -2), (-1, 2), (1, 2), (-2, -1), (-2, 1), (2, -1), (2, 1)]

moving_count = 0
column_words = 'abcdefgh'
for step in knight_steps:
    calculated_column, calculated_row = chr(column + step[0]), (row + step[1])

    if calculated_column in column_words and 0 < calculated_row < 9:
        moving_count += 1

print(moving_count)
