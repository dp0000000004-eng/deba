const noteEl = document.getElementById("quickNote-El")
const sliceBtn = document.getElementById("button-Sft")
const webDevBtn = document.getElementById("web-dev")
const pydevBtn = document.getElementById("py-dev")
const ulEl = document.getElementById("experience-points")
const webExpList = [
    "Designed and built a personal portfolio with a clean UI and responsive layout.",
    "Making Mini game because i am a game lover.",
    "Never tired when wrote bunch lines of .js script",
    "Focused on writing cleaner, more readable code and shipping small improvements weekly."
]
const pyExpList = [
    "Autonating tasks using Python",
    "Building Database of games.",
    "Built Some CLI apps.",
    "Enjoy When code with .py's."
]

//BY defult
webDevBtn.classList.add("active");
pydevBtn.classList.remove("active");
expList(webExpList)


webDevBtn.addEventListener("click", function() {
    webDevBtn.classList.add("active");
    pydevBtn.classList.remove("active");
    expList(webExpList)
});

pydevBtn.addEventListener("click", function() {
    pydevBtn.classList.add("active");
    webDevBtn.classList.remove("active");
    expList(pyExpList)
});


function expList(expArr){
    let emptyWeb = ""
    for(let i = 0; i < expArr.length; i++){
        emptyWeb += `<li>${expArr[i]}</li>`
    }
    ulEl.innerHTML = emptyWeb
}