// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const dogImageContainer = document.getElementById('dogImageContainer');

    // Function to fetch a random dog image
    const fetchRandomDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                displayDogImage(data.message);
            })
            .catch(error => {
                console.error('Error fetching dog image:', error);
            });
    };

    // Function to display the fetched dog image
    const displayDogImage = (imageUrl) => {
        dogImageContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
    };

    // Add event listener to the button
    fetchButton.addEventListener('click', fetchRandomDog);
});
