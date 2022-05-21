const inputChapter =document.querySelector('input');
const button =document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const chapter = inputChapter.value;
    inputChapter.value = '';

    const li_element = document.createElement('li');
    const listChapter = document.createElement('span')
    li_element.appendChild(listChapter);
    listChapter.textContent = chapter;
    
    const delete_button = document.createElement('button');
    delete_button.textContent ='❌';
    delete_button.ariaLabel('Remove chapter');

    li_element.append(delete_button);
    list.appendChild(li_element);

    delete_button.addEventListener('click', () =>{
        list.removeChild(li_element);
    });
    inputChapter.focus();


});