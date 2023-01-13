import { findElement } from "./findElement.js";
const elTodoTemplate = findElement("#todo-template");
export function rendertodos (arrCards,parent) {
    const todoFragment = document.createDocumentFragment();
    parent.textContent = "" ;
    console.log();
    arrCards.forEach(todo, i => {
        const cloneTemplate = elTodoTemplate.content.cloneNode(true);
            const elNameTitle = findElement("#nameTitle" , cloneTemplate);
            const elSubtitle =  findElement("#subtitle" , cloneTemplate);
            const elImg =  findElement("#picture" , cloneTemplate);
            const elTime =  findElement("#time" , cloneTemplate);
            const elDate =  findElement("#date" , cloneTemplate);
            const deleteBtn = findElement(".delete", cloneTemplate);
            const EditBtn = findElement(".edit", cloneTemplate);

            elImg.textContent = todo.img;
        elNameTitle.textContent = todo.title;
        elSubtitle.textContent = todo.subtitle;
        elTime.textContent = todo.time;
        elDate.textContent = todo.date;
        deleteBtn.dataset.id = todo.id;
        EditBtn.dataset.id = todo.id;

        todoFragment.appendChild(cloneTemplate) ;
        console.log(elImg, elName);
    });
    parent.appendChild(todoFragment)
}


// main.js  ishlatilmaydi 