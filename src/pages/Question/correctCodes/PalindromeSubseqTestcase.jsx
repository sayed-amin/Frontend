const c = `
`;

const cpp = `#include <bits/stdc++.h>
using namespace std;
int solve(string &s, int i, int j, vector<vector<int>> &dp)
{

    if (i == j)
    {
        return 1;
    }
    if (i > j)
    {
        return 0;
    }
    if (dp[i][j] != -1)
    {
        return dp[i][j];
    }
    int ans = 0;
    if (s[i] == s[j])
    {
        ans = 2 + solve(s, i + 1, j - 1, dp);
    }
    else
    {
        ans = solve(s, i + 1, j, dp);
        ans = max(ans, solve(s, i, j - 1, dp));
    }

    return dp[i][j] = ans;
}
int main()
{
    string s;
    cin >> s;
    vector<vector<int>> dp(s.length(), vector<int>(s.length(),
                                                   -1));
    cout << solve(s, 0, s.length() - 1, dp) << endl;
}
`;

const java = `import java.util.*;
public class Main {
public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
StringBuilder first = new StringBuilder(sc.next());
StringBuilder second = new StringBuilder(first).reverse();
int m = first.length();
int n = second.length();
int[][] dp = new int[m+1][n+1];
for(int i = 1 ; i <= m ; i++)
for(int j = 1 ; j <= n ; j++)
dp[i][j] = -1;
System.out.println(findSubsequence(m, n, first, second,
dp));
}
public static int findSubsequence(int m, int n, StringBuilder
first, StringBuilder second, int[][] dp){
if(m == 0 || n == 0)
return 0 ;
if(dp[m][n] != -1)
return dp[m][n];
if(first.charAt(m-1) == second.charAt(n-1))
return dp[m][n] = 1 + findSubsequence(m-1, n-1, first,
second, dp);
else
return dp[m][n] = Math.max(findSubsequence(m-1, n, first,
second, dp),findSubsequence(m, n-1, first, second, dp));
}
}
`;

const py = `s = input()
t = s[::-1]
n = len(s)
m = len(t)
dp = [[0 for i in range(m+1)] for j in range(n+1)]
for i in range(1,n+1):
for j in range(1,m+1):
if s[i-1] == t[j-1]:
dp[i][j] = dp[i-1][j-1]+1
else:
dp[i][j] = max(dp[i-1][j],dp[i][j-1])

print(dp[n][m])
`;

const js = `
`;

const PalindromeSubseqTestcase = { c, cpp, java, py, js };
export default PalindromeSubseqTestcase;
