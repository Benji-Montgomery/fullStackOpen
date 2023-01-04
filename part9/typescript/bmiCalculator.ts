//BMI = mass/ height^2
// 84.82kg 1.72m = me

const BMI = (a:number, b:number, printText: string) => {
    console.log (printText, a / (b^2))
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
const bmiPrinter = (bmi: number) => {
    if (bmi < 18.4){return 'Underweight'}
    if (bmi >= 18.4 && bmi < 24.9){return 'Normal Range'}
    if (bmi >= 24.9 && bmi < 29.9){return 'Overweight'}
    if (bmi >= 29.9){return 'OBESE'}
}

BMI(a,b, `you are ${bmiPrinter(a/(b^2))} and your calculated bmi is:`)