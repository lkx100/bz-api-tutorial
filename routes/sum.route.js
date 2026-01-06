import express from 'express'

const router = express.Router()

router.get('/', express.json(), (req, res) => {
    const { a, b } = req.query
    if (a === undefined || b === undefined)
        return res.status(400).send("Enter a & b values")
    if (typeof a !== 'number' || typeof b !== 'number')
        return res.status(400).send("Both a and b should be of type Number")

    res.json({ "sum:": a + b })
})

export default router