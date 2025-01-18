const c = `
`;

const cpp = `#include <iostream>
#include<bits/stdc++.h>

using namespace std;
int lastoccurance(int a[], int mid, int x){
if(a[mid]<=x)
return 0;
return 1;
}
int firstoccurance(int a[], int mid, int x){
if(a[mid]>=x)
return 1;
return 0;
}
int main() {
// your code goes here
int n, q;
cin>>n>>q;
int a[n];
for(int i=0;i<n;i++){
cin>>a[i];
}
sort(a, a+n);
for(int i=0;i<q;i++){
int x,y;
cin>>x>>y;
int l=-1, r=n;
while(l+1<r){
int mid= l+(r-l)/2;
if(firstoccurance(a, mid,x)==0)
l=mid;
else{
r=mid;

}
}
int p=r;
l=-1;
r=n;
while(l+1<r){
int mid= l+(r-l)/2;
if(lastoccurance(a, mid,y)==0)
l=mid;
else{
r=mid;

}

}
int q=l;
cout<<(q-p+1)<<' ';
}
return 0;

}
`;

const java = `import java.util.*;
import java.lang.*;
import java.io.*;
/* Name of the class has to be "Main" only if the class is public.
*/
public class Main
{
public static void main (String[] args) throws
java.lang.Exception
{
// your code goes here
Scanner scanner = new Scanner(System.in);
int n = scanner.nextInt();
int q = scanner.nextInt();
long[] arr = new long[n];
int i = 0;
while(i < n){
arr[i] = scanner.nextLong();
i++;
}
Arrays.sort(arr);
while(q > 0){
long a = scanner.nextLong();
long b = scanner.nextLong();
int st = -1;
int end = -1;
int l = -1;
int r = n;
while(l + 1 < r){
int m = l + (r - l)/2;
if(arr[m] >= a){
r = m;

}else{
l = m;
}
}
st = r;
l = -1;
r = n;
while(l + 1 < r){
int m = l + (r - l)/2;
if(arr[m] <= b){
l = m;
}else{
r = m;
}
}
end = l;
q--;
int count = end - st + 1;
System.out.print(count + " " );
}
}
}
`;

const py = `n,q=map(int,input().split(" "))
arr=list(map(int,input().split(" ")))
arr.sort()
qlist=[]
def predicate(m,x):
if arr[m]<x:
return 0
else:
return 1
def predicate2(m,x):
if arr[m]<=x:
return 0
else:
return 1
for i in range(q):
qlist.append(list(map(int,input().split(" "))))
for i in qlist:
l=i[0]
r=i[1]
left=-1
right=n

while(left+1<right):
m=left+(right-left)//2
if predicate(m,l)==0:
left=m
else:
right=m
ans1=left+1
left=-1
right=n
while(left+1<right):
m=left+(right-left)//2
if predicate2(m,r)==0:
left=m
else:
right=m
ans2=right-1
if ans1>=n:
ans1=0
ans2=-1
if ans2<=-1:
ans2=-1
ans1=0
print(ans2-ans1+1,end=" ")
`;

const js = `
`;

const RangeSearchQueriesTestcase = { c, cpp, java, py, js };
export default RangeSearchQueriesTestcase;
