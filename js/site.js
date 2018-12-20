function show(contentname){
    //Hides all the elements with class='content by default */

    let i, content, link;
    contents = document.getElementsByClassName('content');
    for(i=0; i<contents.length; i++){
        contents[i].style.display ="none";
    }

    //shows the specific link content
    document.getElementById(contentname).style.display = "block";
}






/*const toggle = document.getElementById('abouttoggle');
const toggleone = document.getElementById('projecttoggle');
const toggletwo = document.getElementById('contacttoggle');


toggle.addEventListener("click", function(){
    document.getElementById('modal_about').hidden = false;
    document.getElementById('modal_project').hidden = true;
    document.getElementById('modal_contact').hidden = true;
})

toggleone.addEventListener("click", function(){
    document.getElementById('modal_project').hidden = false;
    document.getElementById('modal_about').hidden = true;
    document.getElementById('modal_contact').hidden = true;
})

toggletwo.addEventListener("click", function(){
    document.getElementById('modal_contact').hidden = false;
    document.getElementById('modal_about').hidden = true;
    document.getElementById('modal_project').hidden = true;
})*/



