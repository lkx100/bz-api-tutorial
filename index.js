import express from 'express'
import lcsRoute from './routes/lcs.route.js'
import lpsRoute from './routes/lps.route.js'
import sumRoute from './routes/sum.route.js'

const app = express()

app.get('/', (req, res) => {
  res.send('This is the base endpoint.\n\nPlease visit:\n1. /lcs for Longest Common Subsequence\n2. /lps for Longest Palindromic Subsequence\n3. /sum for Sum of two numbers')
})

app.use('/lcs', lcsRoute)
app.use('/lps', lpsRoute)
app.use('/sum', sumRoute)

app.listen(3000, () => {
    const port = 3000
    console.log(`Server is running on http://localhost:${port}`)
})