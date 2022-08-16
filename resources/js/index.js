
/* Navigation Bar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}


/* Services Section */


function kitchenEnlarge() {
    document.getElementById('kitchenTitle').style.visibility = 'hidden';
    document.getElementById('kitchenPara').style.visibility = 'visible';

}

function kitchenShrink() {
    document.getElementById('kitchenTitle').style.visibility = 'visible';
    document.getElementById('kitchenPara').style.visibility = 'hidden';
}

function bathroomEnlarge() {
    document.getElementById('bathroomTitle').style.visibility = 'hidden';
    document.getElementById('bathroomPara').style.visibility = 'visible';

}

function bathroomShrink() {
    document.getElementById('bathroomTitle').style.visibility = 'visible';
    document.getElementById('bathroomPara').style.visibility = 'hidden';
}

function flooringEnlarge() {
    document.getElementById('flooringTitle').style.visibility = 'hidden';
    document.getElementById('flooringPara').style.visibility = 'visible';

}

function flooringShrink() {
    document.getElementById('flooringTitle').style.visibility = 'visible';
    document.getElementById('flooringPara').style.visibility = 'hidden';
}

function flatpackEnlarge() {
    document.getElementById('flatpackTitle').style.visibility = 'hidden';
    document.getElementById('flatpackPara').style.visibility = 'visible';

}

function flatpackShrink() {
    document.getElementById('flatpackTitle').style.visibility = 'visible';
    document.getElementById('flatpackPara').style.visibility = 'hidden';
}




