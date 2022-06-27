N = int(input())
S = [input() for i in range(N)]
tmin = 21
for i in range(10):
    inds = [e.index(str(i)) for e in S]
    g = max(inds) + (3 - len(set(inds))) * 10
    if g < tmin:
        tmin = g
print(tmin)

