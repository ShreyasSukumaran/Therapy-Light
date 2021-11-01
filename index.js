
var slide = '#slide-1';

function value(slide) {
    this.slide = slide;
    let currentValue = slide.slice(7, 8);
    for(let i=1; i<4; i++) {
      document.getElementById('s'+i).style.backgroundColor = '#bababa';
    }
    document.getElementById('s'+currentValue).style.backgroundColor = '#1d2027';
}

function arrowBack() {
    let currentValue = slide.slice(7, 8);
    parseInt(currentValue);
    document.getElementById('s'+currentValue).style.backgroundColor = '#bababa';
    --currentValue;
    this.slide = "#slide-"+ currentValue;
    if(currentValue < 1) {
      currentValue = '3';
      this.slide = "#slide-"+ currentValue;
    }
    document.getElementById('s'+currentValue).style.backgroundColor = '#1d2027';
    console.log(this.slide);
    location.href = this.slide;
}

function arrowFront() {
    let currentValue = slide.slice(7, 8);
    parseInt(currentValue);
    document.getElementById('s'+currentValue).style.backgroundColor = '#bababa';
    ++currentValue;
    this.slide = "#slide-"+ currentValue;
    if(currentValue > 3) {
        currentValue = '1';
        this.slide = "#slide-"+ currentValue;
    }
    document.getElementById('s'+currentValue).style.backgroundColor ='#1d2027';
    console.log(this.slide);
    location.href = this.slide;
}

function addActive(label) {
  var labelEdit = label.slice(5);
  document.getElementById(label).classList.add('label--active');
  document.getElementById(labelEdit).style.borderColor = '#00b3ef';
}

function removeActive(label) {
  var labelEdit = label.slice(5);
  if(!document.getElementById(labelEdit).value){
      document.getElementById(label).classList.remove('label--active');
      document.getElementById(labelEdit).style.borderColor = '#979797';
  }
}