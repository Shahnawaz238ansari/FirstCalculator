let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            try {
                // safely evaluate only numbers/operators
                string = eval(string.replace(/[^-()\d/*+.]/g, ''));
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnValue === 'AC') {
            string = "";
            input.value = "0";
        } 
        else if (btnValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string || "0";
        } 
        else {
            string += btnValue;
            input.value = string;
        }
    });
});