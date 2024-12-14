const form= document.querySelector('form')
//this use case will give you an empty value when you submit the values
const height= parseInt(document.querySelector('#height'))

form.addEventListener('submit', function(e){
  e.preventDefault()
  const height= parseInt(document.querySelector('#height').value)
  const weight= parseInt(document.querySelector('#weight').value)
  const results= document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML= `Please enter a valid height ${height}`;
  } else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML= `Please enter a valid weight ${weight}`;
  } else{
    const bmi= (weight/((height*height)/10000)).toFixed(2)

    let message= "" //variable to store the message

    if(bmi<18.6){
      message= 'You are underweight';
    } else if (bmi>=18.6 && bmi<=24.9){
      message= 'You are in normal range';
    } else{
      message='You are overweight';
    }
    results.innerHTML= `<span>Your BMI is ${bmi}</span></br> ${message}`
  }
});