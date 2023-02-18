const logo = document.querySelector('.logo');
const logohidden = document.getElementById('hidden_button');
const hidden = document.querySelector('.hidden');
const url = document.getElementById('url');
const Download_btn = document.getElementById('Download_btn');
logo.addEventListener('click', () => {
  console.log('logo clicked',url.value);
  hidden.style.cssText = "	display: grid;place-items: center; top:0;left:0;position:fixed; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index: 1000;";
  

});

logohidden.addEventListener('click', () => {
  console.log('hidden clicked');
  hidden.style.display = 'none';

});

var i =0;
Download_btn.addEventListener('click', () => {
  if (i == 0) {
    i = 1;
    
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10)
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";

      }
    }
    
  }
}

);