// Let count will be start from 0

let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {

    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("Decrease")) {
            count--;
        }

        else if (styles.contains("Increase")) {
            count++;
        }

        else {
            count = 0;
        }

        if(count>0){
            value.style.color="green" ;
        }

        if(count<0){
            value.style.color="red" ;
        }

        if(count===0){
            value.style.color="black" ;
        }
        value.textContent = count;

    });
});

