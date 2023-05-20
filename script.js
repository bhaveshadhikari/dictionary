const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btn = document.getElementById("search-btn");

const sound = document.getElementById("sound");

btn.addEventListener('click', () => {
    let search_txt = document.getElementById("search-text").value;
    fetch(`${url}${search_txt}`)
    .then((response)=>response.json())
    .then((data)=>{
        document.getElementsByClassName("results")[0].innerHTML =`<div class="entered-text" >
        <h4>${search_txt}</h4>
        <button onclick ='playSound()'>
            <i class="fa-solid fa-volume-high"></i>
        </button>
    </div >

    <p id="phonetics">/${data[0].phonetic}/</p>
    <p id="meaning">${data[0].meanings[0].definitions[0].definition}</p>
    <p id="sentence">${data[0].meanings[0].definitions[0].example || ""}</p>`;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })    
    .catch(() => {
        results.innerHTML = `<h4 class="error">Couldn't Find The Word</h4>`;
    });
})
function playSound() {
    sound.play();
}



