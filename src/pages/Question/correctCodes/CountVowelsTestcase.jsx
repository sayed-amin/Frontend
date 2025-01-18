const c = `
`;

const cpp = `#include <iostream>

using namespace std;

bool isVowel(char c) {
    c = tolower(c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    string s;
    cin >> s;
    int count = 0;
    for (char c : s) {
        if (isVowel(c)) count++;
    }
    cout << count << endl;
    return 0;
}

`;

const java = `import java.util.Scanner;

public class CountVowels {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String s = scanner.next();
        int count = 0;
        for (char c : s.toCharArray()) {
            if ("aeiouAEIOU".indexOf(c) != -1) {
                count++;
            }
        }
        System.out.println(count);
        scanner.close();
    }
}

`;

const py = `
`;

const js = `
`;

const CountVowelsTestcase = { c, cpp, java, py, js };
export default CountVowelsTestcase;
