

function show(contentName){
    
    let i;
    const contents = document.getElementsByClassName('content');

    for(i=0; i<contents.length; i++){
        contents[i].style.display ="none";
        document.getElementById('background_modal').style.display ="none";
    }
    //shows the specific link content with a timeout function
    document.getElementById(contentName).style.display = "block";
    setTimeout(function() {
        document.getElementById(contentName).style.display = "none";
        document.getElementById('background_modal').style.display ="block";
      }, 50000);
    }


function reval(projectContent){
  let i;
  const projects = document.getElementsByClassName('project');

  for(i=0; i<projects.length; i++){
    projects[i].style.display="none";
  }

  document.getElementById(projectContent).style.display = "block"; 
}
  


    let TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    let that = this;
    let delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    let elements = document.getElementsByClassName('text-rotation');
    for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('rotation');
      let period = elements[i].getAttribute('period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
