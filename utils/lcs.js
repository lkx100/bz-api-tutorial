const lcs = (s1, n, s2, m, dp) => {
    if (n === 0 || m === 0) 
        return 0

    if (dp[n][m] != -1) return dp[n][m]

    if (s1[n-1] === s2[m-1])
        return dp[n][m] = 1 + lcs(s1, n-1, s2, m-1, dp)

    return dp[n][m] = Math.max(lcs(s1, n-1, s2, m, dp), lcs(s1, n, s2, m-1, dp))
}

export default lcs