const inputChapter =document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('.list');

button.addEventListener('click', () => {
    const chapter = inputChapter.value;
    inputChapter.value = '';
    if(chapter !=''){
        const li_element = document.createElement('li');
        const listChapter = document.createElement('span')
        li_element.appendChild(listChapter);
        listChapter.textContent = chapter;
        
        const delete_button = document.createElement('button');
        delete_button.textContent ='❌';
        delete_button.setAttribute('aria-label','delete');

        li_element.append(delete_button);
        list.appendChild(li_element);

        delete_button.addEventListener('click', () =>{
            list.removeChild(li_element);
        });
        inputChapter.focus();} else {
            return
        }


});