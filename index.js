// ClassList - shows/gets all classes
//  Contains - Checks classList for specific class
//  add - add class
//  remove - remove class
//  toggle - toggles class

// get elements using dom
// get class for the navToggle icon using querySelector
// get class for the links using querySelector
// add an event Listener to the navToggle btn 
// use either if statement to check if links.classList.contains('show-links')
// if it's true links.classList.remove('classList')
// if it's true links.classList.add('classList');
// Or use links.classList.toggle(to toggle the targetted class);
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');


navToggle.addEventListener('click', function(){
    // console.log(links.classList)
    // console.log(links.classList.contains('links'))
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add('show-links');
    // }

    links.classList.toggle('show-links');
})