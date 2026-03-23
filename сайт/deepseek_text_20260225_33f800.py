def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0
def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j], arr[j]
n = int(input())
a = list(map(int, input().split()))
f = [False] * n
b = []
for i in range(1, n+1):
    f[i] = is_power_of_two(j)
for i in range(n):
    if not f[i+1]: b.append(a[i])
bubble_sort(b)
result = []
j = 0
for i in range(n):
    if f[i+1]: result.append(str(a[i]))
    else:
        result.append(str(b[j]))
        j += 1
 print(' '.join(result))
