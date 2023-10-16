let strings = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '=') {
            strings = eval(strings);
            document.querySelector('input').value = strings;
        }
        else if (e.target.innerHTML == 'C') {
            strings = ""
            document.querySelector('input').value = strings;
        }
        else if (e.target.innerHTML == 'AC') {
            strings = ""
            document.querySelector('input').value = strings;
        }
        else {
            console.log(e.target)
            strings = strings + e.target.innerHTML;
            document.querySelector('input').value = strings;
        }
    } )
})
