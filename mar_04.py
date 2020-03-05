def persistence(n):
    times_persisted = 0
    while len(str(n)) > 1:
        chars = [char for char in str(n)]
        sum = 1
        for char in chars:
            sum *= int(char)
        times_persisted += 1
        n = sum

    return times_persisted
