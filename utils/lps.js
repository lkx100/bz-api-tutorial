const lps = (s, dp) => {
    let ans = 0, n = s.length;

    for (let i = 0; i < n; i++) dp[i][i] = true
    for (let i = 1; i < n; i++) 
        if (s[i] === s[i-1]) dp[i-1][i] = true

    for (let j = 2; j < n; j++) {
        for (let i = 0; i < n-j; i++) {
            if (s[i] === s[i+j] && dp[i+1][i+j-1]) dp[i][i+j] = true
        }
    }

    for (let i = 0; i < n; i++) {
        let r = n-1;
        while (!dp[i][r] && r >= i) r--

        ans = Math.max(ans, r - i + 1)
    }

    return ans
}

export default lps