
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const message1=document.querySelector('#message1')
const message2=document.querySelector('#message2')
message1.textContent='Loading...'
message2.textContent=" "

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if (data.error) {
        }
        else {
            message1.textContent=data.location
            message2.textContent=data.forcast
            console.log(data.location)
            console.log(data.forcast)
           
        }
    })
})
})