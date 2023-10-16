function getLexicographicPermutations(digits) {
    const lexicographicPermutations = [];

    function permute(digits, lexicographicPermutationInFormation = []) {
        if (digits.length === 0) {
            lexicographicPermutations.push(lexicographicPermutationInFormation.join(''));
            return;
        }

        for (let i = 0; i < digits.length; i++) {
            const rest = [...digits.slice(0, i), ...digits.slice(i + 1)];
            permute(rest, [...lexicographicPermutationInFormation, digits[i]]);
        }
    }

    permute(digits);

    return lexicographicPermutations;
}