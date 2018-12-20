let toggle = document.getElementById('abouttoggle')


toggle.addEventListener("click", function(){
    document.getElementById('modal_about').hidden = false;
    document.getElementById('modal_project').hidden = true;
    document.getElementById('modal_contact').hidden = true;
})

let toggleone = document.getElementById('projecttoggle')


toggleone.addEventListener("click", function(){
    document.getElementById('modal_project').hidden = false;
    document.getElementById('modal_about').hidden = true;
    document.getElementById('modal_contact').hidden = true;
})

let toggletwo = document.getElementById('contacttoggle')


toggletwo.addEventListener("click", function(){
    document.getElementById('modal_contact').hidden = false;
    document.getElementById('modal_about').hidden = true;
    document.getElementById('modal_project').hidden = true;
})


