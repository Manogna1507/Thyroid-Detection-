const express = require('express');
const router = express.Router();
const ThyroidResult = require('../models/thyroidResultModel');

router.post('/submit-results', async (req, res) => {
    try {
        const {
            sex,
            age,
            pregnant,
            tsh,
            t4,
            t3,
            t4u,
            onThyroxine,
            onAntithyroidMedication,
            thyroidSurgery,
            lithium,
            goitre,
            tumor,
            fti
        } = req.body;

        const thyroidResult = new ThyroidResult({
            sex,
            age,
            pregnant,
            tsh,
            t4,
            t3,
            t4u,
            onThyroxine,
            onAntithyroidMedication,
            thyroidSurgery,
            lithium,
            goitre,
            tumor,
            fti
        });

        await thyroidResult.save();
        res.status(201).json({ message: "Thyroid test results submitted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
