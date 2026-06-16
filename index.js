const noteEl = document.getElementById("quickNote-El")
const sliceBtn = document.getElementById("button-Sft")
const webDevBtn = document.getElementById("web-dev")
const pydevBtn = document.getElementById("py-dev")
const ulEl = document.getElementById("experience-points")
const ulHobbyEl = document.getElementById("experience-points-hobby")
const expEl = document.getElementById("experience-points")
const navLink = document.getElementById("nav-link")
const homeEl = document.getElementById("home")
const aboutEl = document.getElementById("about")
const skillsEl = document.getElementById("skills")
const navIconsEl  = document.getElementById("nav-icons")
const lrnEl = document.getElementById("lrn-el")
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
const expListA = [
    "Build stronger real-world projects that solve practical student-level problems.",
    "Grow from beginner projects to internship-ready development work."
]



navLink.innerHTML = `
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#hobby">hobby</a>
      <a href="#">Contact</a>
      `


homeEl.innerHTML = `

        <div class="hero-photo-placeholder">
            <!-- <img src="debav-removebg-preview.png"> -->
            </div>
        </div>
        <div class="hero-copy">
            <span class="hero-tag"></span>
            <h1>
            <span class="light">hi, </span><span class="accent">deba</span>
            <span class="light">here.</span><span class="cursor"></span>
            </h1>
            <p class="hero-intro">
            Diploma Computer Engineering student enjoys coding by day and making little projects and Learning web development and Python
            and art by night.
            </p>
            <div class="hero-actions">
            <a class="btn btn-outline" href="mailto:dp0000000004@gmail.com">✉ Say hi!</a>
            </div>
            <ul class="quick-notes" id="quickNote-El">
            </ul>
      </div>
      `


aboutEl.innerHTML = `

      <div class="about-copy">
        <h1 class="s-label"><span>/</span> about me</h1>
        <h2 class="s-title">Learning by building...</h2>
        <p>
          Diploma Computer Engineering student focused on web development,
          Python, and problem solving. I enjoy turning ideas into practical projects
          and understanding how software works under the hood.
        </p>
        <p>
          Right now, I am investing most of my time in stronger fundamentals:
          writing cleaner code,  and building projects
          that feel simple to use.
        </p>
        <div class="about-tech-wrap">
          <p class="about-tech-title">Technologies I currently work with:</p>
          <ul class="about-tech-list">
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
      <div class="about-photo-wrap">
        <img src="deba.jpeg" alt="Debasish portrait" class="about-photo">
      </div>
      `

skillsEl.innerHTML = `
<div class="experience-head">
        <h2 class="section-headline"><span>/</span> skills</h2>
      </div>
      <div class="experience-content">
        <h3 class="experience-role">What I am currently working with</h3>
        <ul class="experience-points">
          <li>Python for scripting, logic building, and small project development.</li> 
        </ul>
      </div>
      `

navIconsEl.innerHTML = `
<a href="mailto:dp0000000004@gmail.com" title="Email">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.22L8 8.999 0 4.22z"/>
          <path d="M0 5.383v6.617a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.4 4.438a1 1 0 0 1-1.2 0z"/>
        </svg>
      </a>
      <a href="https://github.com/dp0000000004-eng" target="_blank" rel="noreferrer" title="GitHub">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 0C3.58 0 0 3.73 0 8.333c0 3.68 2.29 6.8 5.47 7.9.4.08.55-.18.55-.4 0-.2-.01-.86-.01-1.56-2.01.45-2.53-.5-2.69-.96-.09-.24-.48-.97-.82-1.16-.28-.16-.68-.56-.01-.57.63-.01 1.08.6 1.23.85.72 1.27 1.87.91 2.33.69.07-.54.28-.91.5-1.12-1.78-.21-3.64-.92-3.64-4.08 0-.9.31-1.63.82-2.2-.08-.21-.36-1.05.08-2.18 0 0 .67-.22 2.2.84a7.32 7.32 0 0 1 4 0c1.53-1.06 2.2-.84 2.2-.84.44 1.13.16 1.97.08 2.18.51.57.82 1.3.82 2.2 0 3.17-1.87 3.87-3.65 4.08.29.26.54.75.54 1.52 0 1.1-.01 1.98-.01 2.25 0 .22.15.49.55.4A8.41 8.41 0 0 0 16 8.333C16 3.73 12.42 0 8 0"/>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/debasish-pradhan-766a6b3a8" target="_blank" rel="noreferrer" title="LinkedIn">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M0 1.15C0 .52.52 0 1.16 0h13.68C15.48 0 16 .52 16 1.15v13.7c0 .63-.52 1.15-1.16 1.15H1.16C.52 16 0 15.48 0 14.85zm4.94 13.14V6.17H2.4v8.12zM3.67 5.06c.81 0 1.31-.55 1.31-1.24-.01-.7-.5-1.24-1.3-1.24s-1.31.54-1.31 1.24c0 .69.5 1.24 1.29 1.24zm9.93 9.23V9.76c0-2.43-1.28-3.56-3-3.56-1.38 0-2 .77-2.35 1.3v-1.1H5.71c.03.73 0 7.89 0 7.89h2.54V9.76c0-.24.02-.47.09-.64.19-.47.62-.95 1.35-.95.95 0 1.33.73 1.33 1.8v4.32z"/>
        </svg>
      </a>
      <a href="https://medium.com/@debasishpradhan044" title="Medium">
        <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M12.15.65a2.2 2.2 0 0 1 3.11 3.11L6.5 12.52l-3.84.73.73-3.84zM11.44 3L13 4.56l1.56-1.56a1.2 1.2 0 0 0-1.7-1.7zM2.47 13.53 1 15l1.47-2.47z"/>
          <path d="M0 16h16v-2H0z"/>
        </svg>
      </a>
      `

lrnEl.innerHTML = `
<div class="experience-head">
        <h2 class="section-headline"><span>/</span> learning space</h2>
      </div>
      <div class="experience-content">
        <ul class="experience-points">
          <li>I use <a href="https://www.coursera.org" target="_blank" rel="noreferrer">Coursera</a> for guided courses and structured learning paths.</li>
          <li>I use <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a> for fast tutorials, revision, and project walkthroughs.</li>
        </ul>
      </div>
      `

if (expList.length > 0){
    hobbyExp(expListA)
}

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


function hobbyExp(luArr) {
    let emptyHobby = ""
    for(let i = 0; i < luArr.length; i++ ) {
        emptyHobby += `<li>${luArr[i]}</li>`
    }
    ulHobbyEl.innerHTML = emptyHobby
}
//All Exp para
