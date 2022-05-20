const inputChapter =document.querySelector('input');
const button =document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function(inputChapter) {
    const chapter = inputChapter.value;
    if (chapter != ''){
        const li_element = document.createElement('li');
        li_element.textContent = chapter;
        const delete_button = document.createElement('button');
        delete_button.textContent ='❌';

    }

});