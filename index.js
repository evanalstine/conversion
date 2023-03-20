const convertBtn = document.getElementById('convert-btn')
const metersFeet = document.getElementById("meters-feet")
const litersGallons = document.getElementById('liters-gallons')
const kiloPound = document.getElementById('kilo-pound')

convertBtn.addEventListener('click', function(){
    const inputNumber = document.getElementById('convert-input').value
    const convertedMeters = inputNumber / 3.281
    const convertedFeet = inputNumber * 3.28084
    const convertedGallons = inputNumber / 4.546
    const convertedLiters = inputNumber * 3.785
    const convertedKilos = inputNumber * 2.205
    const convertedPounds = inputNumber / 2.205
    metersFeet.textContent = `${inputNumber} meters = ${convertedFeet.toFixed(3)} feet | ${inputNumber} feet = ${convertedMeters.toFixed(3)} meters `
    litersGallons.textContent = `${inputNumber} liters = ${convertedGallons.toFixed(3)} gallons | ${inputNumber} gallons = ${convertedLiters.toFixed(3)} liters`
    kiloPound.textContent = `${inputNumber} kilos = ${convertedKilos.toFixed(3)} pounds | ${inputNumber} pounds = ${convertedPounds.toFixed(3)} kilos`
    document.getElementById('convert-input').value = ""
})


