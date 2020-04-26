const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne =  document.querySelector('#message-1')
const messageTwo =  document.querySelector('#message-2')
const messageThree =  document.querySelector('#message-3')
const messageFour =  document.querySelector('#message-4')

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    fetch('http://localhost:3000/weather?address='+location ).
then((response)=>{response.json().then((data)=>{
    if(data.error){
       messageOne.textContent = data.error 
    } else{
        messageOne.textContent = `Location :${data.place}`
        messageTwo.textContent = `Temprature:${data.data2.temp}`
        messageThree.textContent= `Status : ${data.data2.status}`
console.log(data)
    }
})})
})