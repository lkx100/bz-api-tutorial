const getDP = (n, m, isBool) => {
    const dp = []
    for (let i = 0; i <= n; i++) {
        dp[i] = []
        for (let j = 0; j <= m; j++) 
            dp[i][j] = (isBool)? false : -1;
    }

    return dp
}

export default getDP