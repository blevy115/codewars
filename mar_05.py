def scramble(s1, s2):
    s1_count = {e:s1.count(e) for e in set(s1)}
    s2_count = {e:s2.count(e) for e in set(s2)}
    for key in s2_count:
        if(s2_count.get(key) > s1_count.get(key, 0)):
            return False
    return True
