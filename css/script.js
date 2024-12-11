const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')
const sideBar = document.getElementById('side-bar')

/*menuBtn.addEventListener('click', function (){
sideBar.classList.add('is-open')
})

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('is-open')
})
*/

 menuBtn.addEventListener('click', function () {
    sideBar.style.width = '80%';
  });

  closeBtn.addEventListener('click', function () {
    sideBar.style.width = '0';
  });