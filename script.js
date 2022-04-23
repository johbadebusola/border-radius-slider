let output =document.getElementById("output");
let result =document.getElementById("result");


input.addEventListener("input", e=>{
output.innerHTML = input.value + "%";
result.style.borderRadius = input.value + "%";
});

