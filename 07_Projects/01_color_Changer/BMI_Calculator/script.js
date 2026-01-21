//if we take input outside of form, it takes empty value.
// const height = document.querySelector("#height")
// const weight = document.querySelector("#weight")


const form = document.querySelector("form")
form.addEventListener("submit", function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)  //parseInt convert the string, boolean to integer
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    const weight_guide = document.querySelector("#weight-guide")

    if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = `please enter valid height `
    }
    
    else if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter valid weight `
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //showing the result
        result.innerHTML = bmi

        if(bmi<18.6){
            weight_guide.innerHTML = `Under weight`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            weight_guide.innerHTML = `Normal weight`
        }
        else if(bmi>24.9){
            weight_guide.innerHTML = `Over weight`
        }
        
    }

})

