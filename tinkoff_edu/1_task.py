N, K = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))

k = 0
Amax = max(A)
for i in range(len(A)):
    if A[i] == Amax and i + 1 not in B:
        k = 1
        break
print('Yes' if k else 'No')