//Simple image gallery built in ES6 Vanilla JS
//inspired by this video: https://www.youtube.com/watch?v=afoxd5b0bJo
//modified to work on various galleries in the same page

//config section
//opacity: what we want to be the opacity of the selected element thumbnail. Values: 0-1
const opacity = 0.4;

//we select every container so we can apply it to every image gallery
const imgGalleries = document.querySelectorAll('.gallery-container');
//we call the function so we can get the elements we need from the container and bind them
imgGalleries.forEach(gallery => getElemAndBind(gallery));

function getElemAndBind(gallery) {
    //we get the current img and the list of imgs using query selectors inside the container
    const current = gallery.querySelector('.current-img');
    const imgs = gallery.querySelectorAll('.imgs img');
    //we bind the imgs to a listener
    imgs.forEach(img => img.addEventListener('click', e => imgClick(e, current, imgs)));
}

function imgClick(e, current, imgs) {
    //reset the opacity of all img elements
    imgs.forEach(img => (img.style.opacity = 1));
    //change the src of the current image to the selected image
    current.src = e.target.src
    //change the opacity of the thumbnail
    e.target.style.opacity = opacity;
}

