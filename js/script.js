// // document.addEventListener('DOMContentLoaded', () => {
// //     const dialog = document.getElementById('welcome-dialog');
// //     dialog.showModal();
// // });

// document.addEventListener('DOMContentLoaded', () => {
//     const dialog = document.getElementById('welcome-dialog');
//     dialog.showModal();

//     const header = document.getElementById('color-section');
//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const hue = (scrollPosition / 10) % 360;
//         header.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const dialog = document.getElementById('welcome-dialog');
//     dialog.showModal();

//     const header = document.getElementById('color-section');
//     window.addEventListener('scroll', () => {
//         const scrollPosition = window.scrollY;
//         const hue = (scrollPosition / 10) % 360;
//         header.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
//     });

//     const body = document.body;
//     const images = [
//         'images/flower.jpeg',
//         'images/lake.jpeg',
//         'images/new.jpeg',
//         'images/rose.jpeg',
//         'images/light low.jpeg',
//         'images/Unkown.jpeg'
//         // Add more images to this list
//     ];

//     function setRandomBackgroundImage() {
//         const randomIndex = Math.floor(Math.random() * images.length);
//         const randomImage = images[randomIndex];
//         body.style.backgroundImage = `url('${randomImage}')`;
//     }

//     // Call the function once when the page loads
//     setRandomBackgroundImage();

//     // Call the function every 3 minutes (180000 milliseconds)
//     setInterval(setRandomBackgroundImage, 180000);
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

    const body = document.body;
    const mainContent = document.querySelector('main');
    const extraInfo = document.querySelector('.extra-info');
    const contactInfo = document.querySelector('.contact-info');

    const images = [
        'images/flower.jpeg',
        'images/lake.jpeg',
        'images/new.jpeg',
        'images/rose.jpeg',
        'images/light low.jpeg',
        'images/Unknown.jpeg',
        'images/atum.jpeg'
    ];

    function setRandomBackgroundImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        body.style.backgroundImage = `url('${randomImage}')`;
    }

    function setRandomLightColors() {
        const h = Math.floor(Math.random() * 360);
        const s = Math.floor(Math.random() * 20) + 80; // Keep saturation low for light colors
        const l = Math.floor(Math.random() * 15) + 85; // Keep lightness high
        const color = `hsl(${h}, ${s}%, ${l}%)`;
        
        mainContent.style.backgroundColor = color;
        extraInfo.style.backgroundColor = color;
        contactInfo.style.backgroundColor = color;
    }

    // Set a random background image every 1 minute
    setRandomBackgroundImage();
    setInterval(setRandomBackgroundImage, 60000);

    // Set random light background colors for the text boxes every 30 seconds
    setRandomLightColors();
    setInterval(setRandomLightColors, 30000);
});