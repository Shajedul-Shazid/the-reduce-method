const rainJanuaryByWeek = [ 10, 20, 0, 122 ]

const totalRainfallJanuary = rainJanuaryByWeek.reduce(function(total, weeklyRainfall){
    console.log('total: ' + total, 'currentElement: ' + currentElement)
    return total + currentElement
})

console.log(totalRainfallJanuary)

// total: 10,"currentElement: 20"
// ›total: 30,"currentElement: 0"
// ›total: 30,"currentElement: 122"
// ›152

