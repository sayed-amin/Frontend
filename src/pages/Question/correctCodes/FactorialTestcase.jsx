const c = `
`;

const cpp = `#include <iostream>

using namespace std;

long long factorial(int n) {
    long long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

int main() {
    int n;
    cin >> n;
    cout << factorial(n) << endl;
    return 0;
}

`;

const java = `import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        System.out.println(result);
        scanner.close();
    }
}

`;

const py = `
`;

const js = `
`;

const FactorialTestcase = { c, cpp, java, py, js };
export default FactorialTestcase;
