import express from 'express'
import getDP from '../utils/get_dp.js'
import lps from '../utils/lps.js'

const router = express.Router()

router.get('/', express.json(), (req, res) => {
    const { s } = req.query
    if (s === undefined) return res.status(400).send("Enter String value")
    if (typeof s !== 'string')
        return res.status(400).send("String should be of type String")

    const dp = getDP(s.length, s.length, true)
    const result = lps(s, dp)
    res.json({ "lps:": result })
})

export default router