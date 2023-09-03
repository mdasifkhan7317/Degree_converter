//script
// const celsiusField = document.querySelector("#celcius");
// const degree = document.querySelector("#degree");
// const convertBtn = document.querySelector("#convert-btn");
// const tempType = document.querySelector("#temp-type");

// // window loading reset
// window.addEventListener("load",()=>{
//     degree.value = "";
//     celsiusField.innerHTML = "";
// })
// convertBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     convertToCelsius();
// })
// function convertToCelsius(){
//     let inputValue = degree.value;
//     if(tempType.value==="farenheit"){
//         const farenheitToCelsius = (inputValue -32)*(5/9);
//         celsiusField.innerHTML = `${farenheitToCelsius.toFixed(3)} &deg; c`;
//     }
//     else if(tempType.value ==="kelvin"){
//         const kelvinToCelsius = inputValue - 273.15;
//         celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg; c`;
//     }
// }
 

function getTypeofDegree(value) {
    const degreevalue = document.querySelector("#degree").value;
    const result = document.querySelector("#result");


    if(value=="celsius"){
                const farenheitToCelsius = (degreevalue -32)*(5/9);
                result.innerHTML = `${farenheitToCelsius.toFixed(3)} &deg; c`;
            }
            else if(value ==="farenheit"){
                const kelvinToCelsius = (degreevalue * 9/5) + 32;
                
                result.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg; F`;
            }
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    
    // Update the HTML element with the current time
    document.getElementById('clock').textContent = currentTime;
    
    // Call the function again after 1 second (1000 milliseconds)
    setTimeout(updateClock, 1000);
  }
  
  // Call the function initially to start the clock
  updateClock();
  