const URL = 'https://api.thecatapi.com/v1/images/search'
const btn = document.querySelector('button');

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//        const img = document.querySelector('img');
//        img.src = data[0].url;

//     });

const randomCat = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const img = document.querySelector('img');
    img.src = data[0].url;
}

randomCat();

btn.addEventListener('click',randomCat);
