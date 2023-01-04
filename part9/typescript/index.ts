import express from 'express';
const app = express();
import { bmiPrinter } from './bmiCalculator';

app.get('/bmi', (req, res) => {
    const height: number = Number(req.query.height)
    const weight: number = Number(req.query.weight)
    res.send({
        'height': height,
        'weight': weight,
        'bmi': bmiPrinter(weight/ (height^2))
    })
});

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})