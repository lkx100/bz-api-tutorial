import express from 'express'
import getDP from '../utils/get_dp.js'
import lcs from '../utils/lcs.js'

const router = express.Router()

router.post('/', express.json(), (req, res) => {
    const { s1, s2 } = req.query
    if (s1 === undefined || s2 === undefined)
        return res.status(400).send("Both s1 and s2 should be Required & Non-Empty")
    if (typeof s1 !== 'string' || typeof s2 !== 'string')
        return res.status(400).send("Both s1 and s2 should be of type String")

    const dp = getDP(s1.length, s2.length, false)
    const result = lcs(s1, s1.length, s2, s2.length, dp)
    res.json({ "lcs:": result })
})

export default router