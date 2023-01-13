import { findElement } from "./findElement.js";
const elMain = findElement(".main");
const elTop = findElement(".top");
const TopBtn = findElement(".top-btn")
const addForm = findElement("#form");
const addBtn = findElement("#add-todo-btn");

//   >>   PUSH   <<
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let elTitle = e.target.title.value;
    let elSubtitle = e.target.subtitle.value;
    let elCreatedAt = e.target.createdAt.value;
    let elImg = e.target.image.value;


    const newTodo = {
        title: elTitle,
        subtitle: elSubtitle,
        createdAt: elCreatedAt,
        avatar: elImg,
    }

    fetch("https://639f72975eb8889197fce7ef.mockapi.io/post/data", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }).then((res) => res.json())
        .then((data) => {
            window.location.reload()
        })
})

// GET
fetch("https://639f72975eb8889197fce7ef.mockapi.io/post/data")
    .then(res => res.json())
    .then(data => data.forEach(element => {
        const card = document.createElement("div");
        // const radio = findElement(".radio");
        card.className = "card w-25 p-2 bg-secondary shadow bg-opacity-50 "
        card.innerHTML = `
        
        <img class="w-100" style="height: 400px" src="${element.avatar}"></img>
        <div class="text-center p-2" >
        <h3 class="fs-6"> ${element.title}<h3/>
        <hr/>
        <p class="fs-6">${element.subtitle}<p/>
        <hr/>   
    <p class="fs-6">${element.createdAt}<p/>
     </div>
    <div class="d-flex justify-content-center gap-3">
       <button data-id="${element.id}"  class="delate w-50  rounded-2 bg-danger border-0" type="reset">Delete</button>
       <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${element.id}" class="edit w-50 rounded-2 bg-success bg-opacity-75  border-0">Edit</button>
   </div>
       `
        elMain.prepend(card)
    }));



// DELETE \\
elMain.addEventListener("click", function (e) {
    const TargetT = e.target;
    const id = e.target.dataset.id;
    if (TargetT.matches(".delate")) {
        fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "aplication/json"
            }
        }).then(() => {
            window.location.reload()
        })

    }

    //  EDIT \\
    if (TargetT.matches(".edit")) {
        const id = e.target.dataset.id;

        fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "aplication/json"
            },
        }).then(res => res.json())
            .then((data) => {
                const title = findElement("#title");
                const subtitle = findElement("#subtitle");
                const image = findElement("#images");
                const createdAt = findElement("#createdAt");
                const imagess = findElement("#imagess")

                title.value = data.title;
                subtitle.value = data.subtitle;
                image.value = data.avatar;
                createdAt.value = data.createdAt;
                imagess.src = image.value;

                addBtn.addEventListener("click", function () {
                    const newPost = {
                        title: title.value,
                        subtitle: subtitle.value,
                        avatar: image.value,
                        createdAt: createdAt.value,
                    }
                    fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newPost)
                    }).then(res => res.json()).then(res =>
                        location.reload()
                    )
                })
            })
    }
})














// main




// import { findElement } from "./findElement.js";
// const elMain = findElement(".main-table");
// const elTop = findElement(".top")
// const addForm = findElement("#form");
// const addBtn = findElement("#add-todo-btn");

// //   >>   PUSH   <<
// addForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let elTitle = e.target.title.value;
//     let elSubtitle = e.target.subtitle.value;
//     let elCreatedAt = e.target.createdAt.value;
//     let elImg = e.target.image.value;

//     const newTodo = {
//         title: elTitle,
//         subtitle: elSubtitle,
//         createdAt: elCreatedAt,
//         avatar: elImg,
//     }

//     fetch("https://639f72975eb8889197fce7ef.mockapi.io/post/data", {
//         method: "POST",
//         body: JSON.stringify(newTodo),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8",
//         },
//     }).then((res) => res.json())
//         .then((data) => {
//             window.location.reload()
//         })
// })

// // GET
// fetch("https://639f72975eb8889197fce7ef.mockapi.io/post/data")
//     .then(res => res.json())
//     .then(data => data.forEach(element => {
//         const card = document.createElement("div");
//         const radio = findElement(".radio");
//         card.className = "card w-25  p-2 bg-secondary bg-opacity-50 "
//         card.innerHTML = `
//         <img class="w-100" style="height: 400px" src="${element.avatar}"></img>
//         <div class="text-center p-2" >
//         <h3 class="fs-5">${element.title}<h3/>
//         <p class="fs-5">${element.subtitle}<p/>
//     <p class="fs-5">${element.createdAt}<p/>
//     </div>
//     <div class="d-flex justify-content-center gap-3">
//        <button data-id="${element.id}"  class="delate w-50  rounded-2 bg-danger border-0" type="reset">Delete</button>
//        <button  data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${element.id}" class="edit w-50 rounded-2 bg-success bg-opacity-75  border-0">Edit</button>
//    </div>
//        `
//         elMain.prepend(card)
//     }));

// // DELETE \\
// elMain.addEventListener("click", function (e) {
//     const TargetT = e.target;
//     const id = e.target.dataset.id;
//     if (TargetT.matches(".delate")) {
//         fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "aplication/json"
//             }
//         }).then(() => {
//             window.location.reload()
//         })

//     }

//     //  EDIT \\
//     if (TargetT.matches(".edit")) {
//         const id = e.target.dataset.id;
//         console.log(id);
//         fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "aplication/json"
//             },
//         }).then(res => res.json())
//             .then((data) => {
//                 const title = findElement("#title");
//                 const subtitle = findElement("#subtitle");
//                 const image = findElement("#images");
//                 const createdAt = findElement("#createdAt");

//                 title.value = data.title;
//                 subtitle.value = data.subtitle;
//                 image.value = data.avatar;
//                 createdAt.value = data.createdAt;

//                 addBtn.addEventListener("click", function () {
//                     const newPost = {
//                         title: title.value,
//                         subtitle: subtitle.value,
//                         avatar: image.value,
//                         createdAt: createdAt.value,
//                     }
//                     fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data/${id}`, {
//                         method: 'PUT',
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify(newPost)
//                     }).then(res => res.json()).then(res =>
//                         location.reload()
//                     )
//                 })
//             })
//     }
// })