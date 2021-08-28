const weatherForm = document.querySelector('form')
const saerchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    const location = saerchElement.value

    fetch('http://127.0.0.1:3000/weather?address='+encodeURI(location)).then((response) => {
        response.json().then((data) => {
            if(data.error){
                return messageOne.textContent = data.error
            }
            messageOne.textContent = data.place
            messageTwo.textContent = 'It is currently '+data.temperature+' degrees celsius and feels like '+
                                        data.feelslike+' with '+data.precip+'% chance of rain.'
        })
    })

})