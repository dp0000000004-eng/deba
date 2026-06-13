const noteEl = document.getElementById("quickNote-El")
const sliceBtn = document.getElementById("button-Sft")
const webDevBtn = document.getElementById("web-dev")
const pydevBtn = document.getElementById("py-dev")



pydevBtn.addEventListener("click", function() {
    pydevBtn.classList.add("active");
    webDevBtn.classList.remove("active");
});

webDevBtn.addEventListener("click", function() {
    webDevBtn.classList.add("active");
    pydevBtn.classList.remove("active");
});
