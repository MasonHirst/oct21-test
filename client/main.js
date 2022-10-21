const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const colorBtn = document.querySelector('#color-button')
const changeSubmitBtn = document.querySelector('#change-color-form')
const changeInput = document.querySelector('#change-color-input')

const deleteBtn = document.querySelector('#delete-button')
const deleteInput = document.querySelector('#delete-input')


let displayBox = document.querySelector('#displayBox')

// displayBox.innerHTML = '<h1>Hi!</h1>'

const baseURL = 'http://localhost:4000/api/'

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


function getFortune() {
    axios.get(baseURL + 'fortune/')
    .then((res) => {
        displayBox.innerHTML = `<div class="fortune-box"><img src="../cookie.png" id="cookie-img">
        <div id="fortuneCont">
        <span class="fortune-string">${res.data}</span>
        </div>
        </div>`
        // console.log('button clicked!')
    })
    .catch((err) => {
        console.log(err)
    })
}

fortuneBtn.addEventListener('click', getFortune)


function addFavColor(body) {
    // console.log(body)
    axios.post(baseURL + 'colors/', body)
    .then((res) => {
        
        displayBox.innerHTML = ''

        // console.log(res.data[0])
        let newElement = document.createElement('h3')
        newElement.textContent = 'Favorite Colors: '
        displayBox.appendChild(newElement)
        for (let i = 0; i < res.data.length; i++) {
            let newElem = document.createElement('p')
            newElem.textContent = res.data[i].favColorInput
            displayBox.appendChild(newElem)
        }

        // console.log(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}



function submitHandler(event) {
    event.preventDefault()

    let favColorInput = document.querySelector('#color-input')

    // console.log(favColorInput.value)

    let bodyObj = {
        favColorInput: favColorInput.value
    }

    addFavColor(bodyObj)

    favColorInput.value = ''
}

colorBtn.addEventListener('submit', submitHandler)



function deleteColor(event) {
    event.preventDefault()
    let deleteNum = deleteInput.value

    axios.delete(baseURL + 'colors/'+ deleteNum)
    .then((res) => {
        // console.log(res.data)
        displayBox.innerHTML = ''

        let newElement = document.createElement('h3')
        newElement.textContent = 'Favorite Colors: '
        displayBox.appendChild(newElement)
        for (let i = 0; i < res.data.length; i++) {
            let newElem = document.createElement('p')
            newElem.textContent = res.data[i].favColorInput
            displayBox.appendChild(newElem)
        }

        deleteInput.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
}

deleteBtn.addEventListener('submit', deleteColor)



function changeColor(event) {
    event.preventDefault()
    let newColor = changeInput.value

    axios.put(baseURL + 'colors/' + newColor)
    .then((res) => {
        displayBox.innerHTML = ''

        let newElement = document.createElement('h3')
        newElement.textContent = 'Favorite Colors: '
        displayBox.appendChild(newElement)
        for (let i = 0; i < res.data.length; i++) {
            let newElem = document.createElement('p')
            newElem.textContent = res.data[i].favColorInput
            displayBox.appendChild(newElem)
        }

        changeInput.value = ''
    })

}

changeSubmitBtn.addEventListener('submit', changeColor)
