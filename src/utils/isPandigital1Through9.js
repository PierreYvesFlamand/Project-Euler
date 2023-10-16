function isPandigital1Through9(digits) {
    if (digits.length !== 9) return false;
    if (digits.includes('0')) return false;

    const set = new Set();
    digits.toString().split('').forEach(digit => set.add(digit));
    return set.size === 9;
}