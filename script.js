
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{   // Getting the value from each button on click event.
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;  // Evaluates when it finds the"=" sign.
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string; // Clears the string when finds the 'AC' keyword.
    }else if(e.target.innerHTML == 'DE' && string.length > 0){
        string = string.slice(0, -1);
        document.querySelector('input').value = string;  // Deletes only one element from the string
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;  // For entering more than one number.
      }
  })
})


