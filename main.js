function isPrime(n) {
    if (n <= 2 || n % 2 === 0)
        return n === 2;

    const limit = Math.sqrt(n);

    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}