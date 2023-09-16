
def sectomin(sec):
    rem = sec%60
    min = sec/60
    print(min,rem)

sec = int(input("what is the seconds value"))

sectomin(sec)