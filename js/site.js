    

function show(contentname){
    //Hides all the elements with class='content by default */
    let i, content, link;
    contents = document.getElementsByClassName('content');
    for(i=0; i<contents.length; i++){
        contents[i].style.display ="none";
    }
    //shows the specific link content
    document.getElementById(contentname).style.display = "block";
    setTimeout(function() {
        document.getElementById(contentname).style.display = "none";
      }, 50000);
}
