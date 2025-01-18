const c = `Solution not present in c
`;

const cpp = `#include <bits/stdc++.h>
using namespace std;
int solve(string &text1, string &text2, vector<vector<int>> &dp,
          int i, int j)
{
    if (i == text1.length() || j == text2.length())
    {
        return 0;
    }
    if (dp[i][j] != -1)
    {
        return dp[i][j];
    }
    int ans = 0;
    if (text1[i] == text2[j])
    {
        ans = 1 + solve(text1, text2, dp, i + 1, j + 1);
    }
    else
    {
        ans = max(ans, solve(text1, text2, dp, i, j + 1));
        ans = max(ans, solve(text1, text2, dp, i + 1, j));
    }
    return dp[i][j] = ans;
}
int main()
{

    string s, t;
    cin >> s >> t;
    vector<vector<int>> dp(s.length(), vector<int>(t.length(),
                                                   -1));
    solve(s, t, dp, 0, 0);
    string ans = "";
    int i = 0, j = 0;
    while (i < dp.size() && j < dp[0].size())
    {
        if (s[i] == t[j])
        {
            ans += s[i];
            i++;
            j++;
        }
        else if (i + 1 < dp.size() && j + 1 < dp[0].size())
        {
            if (dp[i][j + 1] > dp[i + 1][j])
                j++;
            else
                i++;
        }
        else if (j + 1 < dp[0].size())
        {
            j++;
        }
        else if (i + 1 < dp.size())
        {
            i++;
        }
        else
        {
            break;
        }
    }
    cout << ans << endl;
}
`;

const java = `import java.util.*;
public class Main {
public static void main(String args[]) {
Scanner sc = new Scanner(System.in);
String s = sc.next();
String t = sc.next();
int l1= s.length();
int l2= t.length();
int [][] dp = new int[l1+1][l2+1];
if (s.charAt(0)==t.charAt(0))
dp[1][1]=1;
else

dp[1][1]=0;
for (int i = 1; i <= l1; i++) {
for (int j = 1; j <= l2; j++) {
if (i == 0 || j == 0)
dp[i][j] = 0;
else if (s.charAt(i-1)==t.charAt(j-1))
dp[i][j] = dp[i - 1][j - 1] + 1;
else
dp[i][j] = (int)Math.max(dp[i - 1][j], dp[i][j

- 1]);
}
}
int l = dp[l1][l2];
Character[]ans = new Character[l+1];
int i =l1; int j=l2;
while(i>0 && j>0)
{
if (s.charAt(i-1)==t.charAt(j-1))
{
ans[l]=s.charAt(i-1);
i--;
j--;
l--;
}
else if(dp[i - 1][j]>dp[i][j - 1])
i--;
else
j--;
}
for (int i1 =1; i1<=dp[l1][l2]; i1++)
{
System.out.print(ans[i1]);
}
}}
`;

const py = `s = input()
t = input()
n = len(s)
m = len(t)
dp = [[0 for i in range(m+1)] for j in range(n+1)]
for i in range(1,n+1):
for j in range(1,m+1):
if s[i-1] == t[j-1]:

dp[i][j] = dp[i-1][j-1]+1
else:
dp[i][j] = max(dp[i-1][j],dp[i][j-1])

# print(dp[n][m])
i = n
j = m
lcs = ''
while i>0 and j>0:
if s[i-1] == t[j-1]:
lcs += s[i-1]
i -= 1
j -= 1
elif dp[i-1][j] > dp[i][j-1]:
i -= 1
else:
j -=1
print(lcs[::-1])
`;

const js = `Solution not present in js
`;

const LCS2Testcase = { c, cpp, java, py, js };
export default LCS2Testcase;
