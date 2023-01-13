const elBody = document.querySelector("body");
const elMain = document.querySelector(".main-table");
const Theme = document.querySelector(".theme");

window.addEventListener("load", ()=>{
  const theme = localStorage.getItem("theme");
  if(theme === "light"){
    elBody.classList.add("light-mode")
  }
})

Theme.addEventListener("click", () => {
  elBody.classList.toggle("light-mode");
  if(elBody.classList.contains("light-mode")){
    localStorage.setItem("theme" , "light")
  } else {
    localStorage.setItem("theme", "dark")
  }
})


fetch(`https://639f72975eb8889197fce7ef.mockapi.io/post/data`)
  .then(res => res.json())
  .then(data => {
    renderObj(data);
  })
function renderObj(data) {
  const fragment = document.createDocumentFragment();
  data.forEach(element => {
    const card = document.createElement("div")
    card.className = "card d-flex justify-content-center mt-2 p-2  shadow"
    card.innerHTML = `
            <div class="d-flex gap-3">
        <img  style="min-width: 300px ; max-width:300px" height="280" src="${element.avatar}"></img>
        <div>
          <h3 class="text-secondary fs-4">${element.title}<h3/>
          <p class="text-secondary fs-5">${element.subtitle}<p/>
          <p class="text-secondary mb-2 fs-6"> ${element.createdAt}<p/>
         </div>
         </div>
       `
    card.appendChild(fragment)
    elMain.prepend(card)
  });
} 

//  OVOZ ORQALI backgroundColor  berish
const body = document.querySelector("body");
const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    Theme.onclick = function (){
      alert("Iltimos  Black  deb aytmang");
        recognition.start();
        console.log('Ready to receive a color command.');
    };
    recognition.onresult = function(event){
        const color = event.results[0][0].transcript;
        body.style.backgroundColor = color;
    }
