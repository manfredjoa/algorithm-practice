class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        columns = [[] for _ in range(9)]
        squares = [[] for _ in range(9)]
        is_valid = [True]

        def get_square_index(i, j): return (i // 3) * 3 + j // 3

        def check(arr, is_valid):
            for nested_arr in arr:
                nested_arr_set = set(())

                for value in nested_arr:
                    if value != ".":
                        if value not in nested_arr_set:
                            nested_arr_set.add(value)
                        else:
                            is_valid[0] = False

            if is_valid[0] == False:
                return False

        for i, row in enumerate(board):
            row_set = set(())

            for j, cell in enumerate(row):
                columns[j].append(cell)
                squares[get_square_index(i, j)].append(cell)

                if cell != ".":
                    if cell not in row_set:
                        row_set.add(cell)
                    else:
                        is_valid[0] = False

            if is_valid[0] == False:
                return False

        if is_valid[0]:
            check(columns, is_valid)

        if is_valid[0]:
            check(squares, is_valid)

        return is_valid[0]
