const logo = document.querySelector('.logo');
const logohidden = document.getElementById('hidden_button');
const hidden = document.querySelector('.hidden');
logo.addEventListener('click', () => {
  // console.log('logo clicked',url.value);
  hidden.style.cssText = "	display: grid;place-items: center; top:0;left:0;position:fixed; width:100%; height:100%; background-color:rgba(0,0,0,0.5); z-index: 1000;";
  

});

logohidden.addEventListener('click', () => {
  console.log('hidden clicked');
  hidden.style.display = 'none';

});
