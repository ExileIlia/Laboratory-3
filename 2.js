const out1 = document.getElementById("out1");
const out2 = document.getElementById("out2");
const btn = document.getElementById("btn")
btn.addEventListener("click",function btnclick(e){
    e.preventDefault();
    const inputValue1 = out1.value;
    const inputValue2 = out2.value;
    out2.value = inputValue1;
    out1.value = inputValue2;
}
)

