// document.addEventListener('DOMContentLoaded', () => {
//     const dialog = document.getElementById('welcome-dialog');
//     dialog.showModal();
// });

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('welcome-dialog');
    dialog.showModal();

    const header = document.getElementById('color-section');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const hue = (scrollPosition / 10) % 360;
        header.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('welcome-dialog');
    dialog.showModal();

    const header = document.getElementById('color-section');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const hue = (scrollPosition / 10) % 360;
        header.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
    });

    const body = document.body;
    const images = [
        'images/flower.jpeg',
        'images/lake.jpeg',
        'images/new.jpeg',
        'images/rose.jpeg',
        'images/lowlight.jpeg',
        'images/unkown.jpeg'
        // Add more images to this list
    ];

    function setRandomBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        body.style.backgroundImage = `url('${randomImage}')`;
    }

    // Call the function once when the page loads
    setRandomBackgroundImage();

    // Call the function every 3 minutes (180000 milliseconds)
    setInterval(setRandomBackgroundImage, 180000);
});