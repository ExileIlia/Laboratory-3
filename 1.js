function plus() {
const elem1 = document.getElementById("n1").value;
const elem2 = document.getElementById("n2").value;
document.getElementById("out").textContent = parseInt(elem1) + parseInt(elem2);
}

function minus() {
    const elem1 = document.getElementById("n1").value;
    const elem2 = document.getElementById("n2").value;
    document.getElementById("out").textContent = parseInt(elem1) - parseInt(elem2);
    }
//getElementById - пошук елментів по id всередині документа ;
//parseInt - переобразовує string в int ; 
//innerHTML - дозволяє рахувати вміст елементу в вигляді HTML-строки або встановити новий HTML ;
//textContent - для виводу текстового атрибуту елементу ;
