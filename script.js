

//variabel som henter ID "submittValue" fra HTML 
const submittValue = document.querySelector("#submittValue");
console.log(submittValue);


//event listener registerer når eg trykker på knappen
submittValue.addEventListener("click", () => {

    //vairabel som henter ID "inputValue" fra HTML man kan se det er ID grunnet #
    const inputValue = document.querySelector("#inputValue").value;
    console.log(inputValue);


    //vairabel som henter ID "displayValue" fra HTML man kan se det er ID grunnet #
    const displayValue = document.querySelector("#displayValue");
    console.log(displayValue);
    
    displayValue.textContent = inputValue;


    //vairabel som henter ID "fromValue" fra HTML man kan se det er ID grunnet #
    const fromValue = document.querySelector("#fromValue").value;
    console.log(fromValue);

    //vairabel som henter ID "toValue" fra HTML man kan se det er ID grunnet #
    const toValue = document.querySelector("#toValue").value;
    console.log(toValue);

    let result;

    //Kalkulering 
    if (fromValue === "CM" & toValue === "M"){
        result = inputValue / 100;
    }
    else if (fromValue === "CM" & toValue === "KM") { 
        result = inputValue / 100000;
    } 
    else if (fromValue === "M" & toValue === "CM") {
        result = inputValue * 100;
    }
    else if (fromValue === "M" & toValue === "KM") {
        result = inputValue / 1000;
    }
    else if (fromValue === "KM" & toValue === "CM") {   
        result = inputValue * 100000;
    }
    else if (fromValue === "KM" & toValue === "M") {
        result = inputValue * 1000; 
    } else {
        console.log("Choose two different options");
    }
        displayValue.textContent = result;
        console.log(result)
    }); 

