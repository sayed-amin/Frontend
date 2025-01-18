const c = `
`;

const cpp = `
#include <bits/stdc++.h>
using namespace std;
#define int long long
int32_t main() {

   ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
  int n;
  cin>>n;
  vector<int>prefix_sum(n+1,0);
  for(int i=1;i<=n;i++){
    cin>>prefix_sum[i];
    prefix_sum[i]+=prefix_sum[i-1];
  }
  
  int q;cin>>q;
  while(q--){
    int l,r;cin>>l>>r;
    cout<<prefix_sum[r] - prefix_sum[l-1]<<endl;
  }
  return 0;

}
`;

const java = `
`;

const py = `
`;

const js = `
`;

const SphinxRangeSumsTestcase = { c, cpp, java, py, js };
export default SphinxRangeSumsTestcase;
