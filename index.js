const name = document.getElementById('name')
const number = document.getElementById('number')
const month = document.getElementById('month')
const year = document.getElementById('year')
const cvc = document.getElementById('cvc')

let form = document.getElementById('form')

const nameError = document.getElementById('name-error')
const numberError = document.getElementById('number-error')
const monthError = document.getElementById('month-error')
const cardFrontNumber = document.querySelector('.card-front-number')

form.addEventListener('submit',(e)=>{
    let message=[];
    if(name.value===""||name.value===null){
        nameError.innerHTML="Name required"
        message.push('Name required')
    }
    if(number.value===""||number.value===null){
        numberError.innerHTML="Number is required"
        message.push('numberr required')
    }
    if(month.value===""||year.value===""||cvc.value===""){
        monthError.innerHTML="All inputs required"
        message.push('month required')
    }
    if(number.value.length>0){
        if(number.value.length>16||number.value.length<16){
            numberError.innerHTML="Wrong format.Enter valid card number"
            message.push('Valid number required')
        }else{
            if(isNumber(number.value)){
                numberError.innerHTML="Wrong fromat,numbers only"
                message.push('Valid number required')
            }else{
                numberError.innerHTML=""
            }
        }
    }
    if(message.length>0){
        e.preventDefault()
    }
})
function isNumber(value) {
    return isNaN(value);
}
let cardFrontNum = document.querySelector('.card-front-number');

function cardNumberUpdate(){
    let cardNumber = document.getElementById('number').value;
    document.querySelector(".card-front-number").innerHTML=cardNumber.slice(0,4).concat("_".concat(cardNumber.slice(4,8).concat("_".concat(cardNumber.slice(8,12).concat("_".concat(cardNumber.slice(12,16)))))));
}
function cardNameUpdate(){
    let cardName = document.getElementById('name').value;
    document.querySelector('.frontcard-caption').innerHTML=cardName;
}
function cardMonthUpdate(){
    let cardMonth = document.getElementById('month').value;
    document.querySelector('.cardfront-date').innerHTML=cardMonth;
}
function cardYearUpdate(){
    let cardYear = document.getElementById('year').value;
    document.getElementById('cardfront-year').innerHTML=cardYear;
}


