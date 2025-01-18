const c = `
`;

const cpp = `#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    string s;
    cin >> s;
    reverse(s.begin(), s.end());
    cout << s << endl;
    return 0;
}

`;

const java = `import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.next();
        StringBuilder sb = new StringBuilder(s);
        System.out.println(sb.reverse().toString());
        scanner.close();
    }
}

`;

const py = `
`;

const js = `
`;

const ReverseStringTestcase = { c, cpp, java, py, js };
export default ReverseStringTestcase;
