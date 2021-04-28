/*let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
    
let body=document.querySelector('body');

if(isMobile.any()) {
  body.classList.add('touch');
}
else {
  body.classList.add('mouse');
}*/

let arrow = document.querySelectorAll('.arrow');
let titles = document.querySelectorAll('.footer_titles');

let toggles = document.querySelectorAll('.toggle');

for(i=0;i<arrow.length; i++) {

  let subMenu = titles[i];
  let thisArrow = arrow[i];
  let thisToggle = toggles[i];

  toggles[i].addEventListener('click', function() {
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
  });
};

