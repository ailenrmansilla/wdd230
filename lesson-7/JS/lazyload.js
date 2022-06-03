let imagesToLoad = document.querySelectorAll('img[data-src]');


function preloadImage(image) {
    const src = image.getAttribute('data-src');
    if (!src){
        return;
    } 
    image.src = src; // set the real src of the image
};

const imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 20px 0px"
};

const imageObserver = new IntersectionObserver((entries,imageObserver) =>{
   // this is  the call back function
    entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return; // if it is not intersection
    } else{
        preloadImage(entry.target);  // load it
        imageObserver.unobserve(entry.target);
    }
})} , imageOptions);

imagesToLoad.forEach(image =>{
    imageObserver.observe(image);
});