
const body = document.querySelector('body'),
toggle = document.getElementById('toggle'),
 header= document.getElementById('header'),
section1= document.getElementById('section1'),
 btn = document.getElementById('btn'),
 selector = document.getElementById('selector'),
h1= document.getElementById('h1'),
contentStudent = document.getElementById('content-student'),
articleTeacher = document.getElementById('articleTeacher');


toggle.onclick=()=>{
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
    section1.classList.toggle('active');
    btn.classList.toggle('active');
    selector.classList.toggle('active');
    h1.classList.toggle('active');
    contentStudent.classList.toggle('active');
    articleTeacher.classList.toggle('active');
};
