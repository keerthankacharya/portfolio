const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

const Texts = [
    'HTML', 'CSS', 'JAVASCRIPT',
    'C', 'JAVA', 'REACT',
    'PYTHON', 'TKINTER',
    'UI/UX', 'DSA', 'NOSQL',
    'FIGMA', 'MYSQL', 'FLUTTER', 'PHOTOSHOP'
];

var tagCloud = TagCloud('.Sphere', Texts, {
    radius: 150,
    maxSpeed: 'normal',
    initSpeed: 'fast',
    direction: 135,
    keep: true
});
var color = 'yellow';
document.querySelector('.Sphere').style.color = color;

document.getElementById('contact_form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch(this.action, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
        window.location.href = 'thankyou/index.html';
        this.reset();
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    });
  });