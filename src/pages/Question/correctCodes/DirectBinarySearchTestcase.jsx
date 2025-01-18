const c = `
For C Solution not present currently
`;

const cpp = `#include <bits/stdc++.h>
using namespace std;
int predicate(int mid, int target, vector<int> &vec)
{
    if (vec[mid] < target)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}
int main()
{

    int n, q;
    cin >> n >> q;
    vector<int> vec(n);
    for (int i = 0; i < n; i++)
    {
        cin >> vec[i];
    }
    while (q--)
    {
        int target;
        cin >> target;
        int low = -1, high = n;
        while (low + 1 < high)
        {
            int mid = (low + high) / 2;
            if (predicate(mid, target, vec) == 0)
            {
                low = mid;
            }
            else
            {
                high = mid;
            }
        }
        cout << high << endl;
    }

    return 0;
}
`;

const java = `import java.util.*;
public class Main {
public static void main(String args[]) {
Scanner sc=new Scanner(System.in);
String[] input=sc.nextLine().split(" ");
int n=Integer.parseInt(input[0]);
int k=Integer.parseInt(input[1]);
int[] arr=new int[n];
String[] nos=sc.nextLine().split(" ");
for(int i=0;i<n;i++){
arr[i]=Integer.parseInt(nos[i]);
}
String[] find=sc.nextLine().split(" ");
for(int j=0;j<find.length;j++){
int ans=index(Integer.parseInt(find[j]),arr);
System.out.println(ans+1);
}
}
public static int index(int n,int[] arr){
int L=-1;
int R=arr.length;
while(L+1<R){
int mid=(L+R)/2;
if(predicate(n,mid,arr)==0){
R=mid;
}
else{
L=mid;
}
}
return L;
}
public static int predicate(int n,int mid,int arr[]){
if(n<=arr[mid]){
return 0;
}
else{
return 1;
}
}
}
`;

const py = `
a,q=map(int, input().split())
arr=list(map(int, input().split()))
query=list(map(int, input().split()))
def predicate(m, x):
if(arr[m]>=x):
return 1
else:
return 0

for i in range(len(query)):
left=-1
right=len(arr)
while(left+1 < right):
middle = left+((right-left)//2)
if(predicate(middle, query[i])==0):
left=middle
else:
right=middle

print(right)
`;

const js = `
For js Solution not present currently
`;

const DirectBinarySearchTestcase = { c, cpp, java, py, js };
export default DirectBinarySearchTestcase;
