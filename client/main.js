const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortuneButton')
const colorBtn = document.querySelector('#color-button')

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
        displayBox.innerHTML = `<img src="../cookie.png" id="cookie-img">
        <div id="fortuneCont">
        <h3>${res.data}</h3>
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




function submitHandler() {
    let favColorInput = document.querySelector('#color-input')

    // console.log(favColorInput.value)

    let bodyObj = {
        favColorInput: favColorInput.value
    }

    addFavColor(bodyObj)

    favColorInput.value = ''
}

colorBtn.addEventListener('click', submitHandler)



function deleteColor() {
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
    })
}

deleteBtn.addEventListener('click', deleteColor)





