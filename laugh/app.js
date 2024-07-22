const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    try {
        const jokeRes = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                accept: 'application/json'
            }
        });
        if (!jokeRes.ok) {
            throw new Error(`HTTP error! status: ${jokeRes.status}`);
        }
        const jokeData = await jokeRes.json();
        jokeEl.textContent = jokeData.joke; // Display the joke
    } catch (error) {
        console.error('Failed to fetch joke:', error);
        jokeEl.textContent = 'Failed to fetch joke. Please try again later.';
    }
}
