const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
var options = {
    strings: ['Xurshid', 'Frontend',  'Web Developer'],
    typeSpeed: 100,
    backSpeed:100,
    loop: true
  };
var typed = new Typed('.typing', options);

toggle.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.background = 'white';
      body.style.color = 'indigo';
      body.style.transition = '2s';
  }else{
      body.style.background = 'black';
      body.style.color = 'white';
      body.style.transition = '2s';
  }
});
