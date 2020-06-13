module.exports = class Math {
    static fibonacci(n) {
        if (n === 0) return 0;
        else if (n <= 2) return 1;

        const f = [0, 1, 1];
        for (let i = 3; i <= n; i++) {
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[f.length - 1];
    }
}