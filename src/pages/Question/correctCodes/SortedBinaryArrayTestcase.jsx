const c = `
`;

const cpp = `#include <bits/stdc++.h>
using namespace std;

int main() {

  int n;
  cin>>n;
  vector<int>vec(n);
  for(int i=0;i<n;i++){
    cin>>vec[i];
  }
  int low=-1,high=n;
  while(low+1<high){
    int mid=(high+low)/2;
    if(vec[mid]==0){
      low=mid;
    }else{
      high=mid;
    }
  }
  if(high<n and vec[high]==1){
    cout<<high<<" ";
  }
  else{
    cout<<n<<" ";
  }
  if(low>=0 and vec[low]==0){
    cout<<low<<" ";
  }else{
    cout<<-1<<" ";
  }

  return 0;

}
`;

const java = `import java.util.*;
import java.lang.*;
public class Main{
public static void main(String[] args)
throws java.lang.Exception{
Scanner sc = new Scanner(System.in);
int n=sc.nextInt();
int[] arr= new int[n];
for (int i=0;i<n;i++){
arr[i]= sc.nextInt();
}
int l=-1,r=n,m;
while(l+1<r){
m=r-(r-l)/2;
if(arr[m]==0)
l=m;
else
r=m;

}
System.out.println(r+" "+l);
}

}
`;

const py = `n=int(input())
arr=list(map(int,input().split()))[:n]
og_len = len(arr)
arr.insert(0,0)
arr.insert(len(arr),1)
left=0
right=len(arr)-1
while left+1<right:
mid = int( left+((right-left)/2) )
if arr[mid]==0:
left=mid
else:
right=mid
#print(arr)
if left-1 not in range(og_len):

print(right-1, -1)
elif right-1 not in range(og_len):
print(og_len, left-1)
else:
print(right-1, left-1)
`;

const js = `
`;

const SortedBinaryArrayTestcase = { c, cpp, java, py, js };
export default SortedBinaryArrayTestcase;
