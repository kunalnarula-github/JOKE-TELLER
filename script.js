const newButton = document.getElementById("button");



// Passing Joke to API
function tellme(joke) {
    msg = new SpeechSynthesisUtterance(joke);
    window.speechSynthesis.speak(msg)
    console.log('1000')
}

// Get Jokes from Jokes API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        tellme(joke);
    } catch (error) {
        //  Catch Error Here
        console.log('whoops', error)
    }
}

// Event Listener
newButton.addEventListener('click', getJokes)