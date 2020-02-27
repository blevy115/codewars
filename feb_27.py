def create_phone_number(n):
    return f"({''.join(to_string(n[0:3]))}) {''.join(to_string(n[3:6]))}-{''.join(to_string(n[6:10]))}"

def to_string(x):
    return [str(i) for i in x]
