const c = `
`;

const cpp = `#include<bits/stdc++.h>
using namespace std;
int solve(string &text1, string &text2, vector<vector<int>> &dp,
int i, int j){
if(i==text1.length() || j==text2.length()){
return 0;
}
if(dp[i][j]!=-1){
return dp[i][j];
}
int ans=0;
if(text1[i]==text2[j]){
ans=1+solve(text1, text2, dp, i+1, j+1);
}
else{
ans=max(ans, solve(text1, text2, dp, i, j+1));
ans=max(ans, solve(text1, text2, dp, i+1, j));

}
return dp[i][j]=ans;
}
int main(){
string s, t;
cin>>s>>t;
vector<vector<int>> dp(s.length(), vector<int>(t.length(),
-1));
cout<<solve(s, t , dp, 0, 0)<<endl;
}
`;

const java = `
`;

const py = `
`;

const js = `
`;

const LCSTestcase = { c, cpp, java, py, js };
export default LCSTestcase;
