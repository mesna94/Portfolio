var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
   
}
/*---------------------------responsive-----------------------------------*/

  let sidemenu = document.getElementById("sidemenu");
  let crossIcon = document.getElementsByClassName("fa-circle-xmark")
  let barIcon = document.getElementsByClassName("fa-bars")
   barIcon.onclick = function () {
     sidemenu.classList.add("sidemenu")
   }

/*-----------------------------------contact------------------------------------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbwt-A9rexdWZu2jh529MB2kdI8OmNQWQWED5r3pZ37_8B6SFstkeHekY-KZAh6utd1Z/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully";
        setTimeout(() => {
            msg.innerHTML= " ";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

