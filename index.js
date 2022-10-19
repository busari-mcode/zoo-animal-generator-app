const express = require('express');
const app = express();
const port = 3000;
// const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

//********************** Learning phase 2 *************************************/
// async is used so we can wait for the process to get completed
// to get animal name
app.get('/animalname', async(request, response) => {
    const fetchApi = await fetch(
		'https://zoo-animals-api.p.rapidapi.com/animals/rand/10',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': api-key,
                'X-RapidAPI-Host': 'zoo-animals-api.p.rapidapi.com'
            },
        }
	);
    // convert the promise into json format
	const animalNameResponse = await fetchApi.json();
	console.log(animalNameResponse);
	response.json(animalNameResponse);
});

// to get animal image
app.get('/animalimage', async(request, response) => {
    const fetchApi = await fetch(
		'https://bing-image-search1.p.rapidapi.com/images/details?insightsToken=%3CREQUIRED%3E',
        {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a7682c7b38msh7c08bc85299b610p1452d7jsn957767c45637',
                'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            },
        }
	);
    // convert the promise into json format
	const animalImageResponse = await fetchApi.json();
	console.log(animalImageResponse);
	response.json(animalImageResponse);
});