
interface input {
    type: number
}

const input = [Number(process.argv[2]), Number(process.argv[3]), Number(process.argv[4]), Number(process.argv[5]), Number(process.argv[6]), Number(process.argv[7]), Number(process.argv[8])]

const days: number = input.length
const inputZero = []
for(let i = 0; i< days; i++ ){
    if(input[i] > 0){
        inputZero.push(input[i])
    }
}
const trainingDays: number = inputZero.length
const targetValue: number = Number(process.argv[9])

function calculateAverage(array: Array<number>) {
    var total = 0
    var count = 0

    array.forEach(function(item, index) {
        total += item
        count++
    })

    return total / count
}
let success: boolean = true
const averageTime: number = calculateAverage(input)
function rating (averageTime: number, targetValue: number) {
    if (averageTime === targetValue){
        success = true
        return ('good job on target')
    }else if(averageTime < targetValue){
        success = false
        return('hustle up buttercup')
    }else if(averageTime> targetValue){
        return('Great job you exceeded my expectations buttercup!')
    }
}


//console.log( input, inputZero, targetValue, trainingDays, averageTime, rating(averageTime, targetValue))

const results:object = {
    periodLength: input.length,
    trainingDays: trainingDays,
    success: success,
    rating: averageTime/targetValue,
    ratingDescription: rating(averageTime, targetValue),
    target: targetValue,
    average: averageTime
}

console.log(results)
