N, M, Q = map(int, input().split())
A = [[0 for j in range(M)] for i in range(N)]
for i in range(Q):
    request = list(map(int, input().split()))
    if request[0] == 1:
        for l in range(request[1] - 1, request[2]):
            for j in range(N):
                A[j][l] += request[3]
    elif request[0] == 2:
        for j in range(M):
            A[request[1] - 1][j] = request[2]
    elif request[0] == 3:
        print(A[request[1] - 1][request[2] - 1])