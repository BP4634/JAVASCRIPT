
const btnJson = document.querySelector('.btn-json')
const btnText = document.querySelector('.btn-text')
const btnImg = document.querySelector('.btn-img')
const resultJson = document.querySelector('.result-json')
const resultText = document.querySelector('.result-text')
const resultImg = document.querySelector('.img')

const url = 'https://icanhazdadjoke.com/'


resultJson.textContent = 'Loading...'
resultText.textContent = 'Loading...'


btnJson.addEventListener('click', () => {
    const accept = 'application/json'
    try {
        fetchDadJoke(accept, resultJson)
    }
    catch(error) {
        resultJson.textContent = 'There was an error..'
    }
});

btnText.addEventListener('click', () => {
    const acc = 'text/plain'
    try {
        fetchDadJoke(acc, resultText)
    }
    catch(error) {
        resultText.textContent = 'There was an error..'
    }
});


btnImg.addEventListener('click', () => {
    const accept = 'application/json'
    try {
        fetchDadJoke(accept, resultImg)
    }
    catch(error) {
        resultImg.src='error.png'
    }
});



const fetchDadJoke = async (header, element) => {
    const response = await fetch(url, {
        headers: {
        'Accept': `${header}`,
        'User-Agent': 'learning app',
        },
    });

    if (!response.ok) {
        throw new Error(' error');
    }

    if(element.classList.contains('result-json')) {
        const data = await response.json();
        element.textContent = data.joke;  
    }

    if(element.classList.contains('result-text')) {
        const data = await response.text();
        element.textContent = data
    }

    if(element.classList.contains('img')) {
        const data = await response.json();
        const iUrl = `https://icanhazdadjoke.com/j/${data.id}.png`
        resultImg.src = iUrl
        console.log(iUrl)


    }
};








