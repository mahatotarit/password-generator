const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "!@#$%^&*()_+/";

const lengthInput = document.querySelector("#password_length");
const upperInput = document.querySelector("#password_uppercase");
const lowerInput = document.querySelector("#password_lowercase");
const numberInput = document.querySelector("#password_numbers");
const symbolsInput = document.querySelector("#password_symbols");
const passwordshowInput = document.querySelector("#password_show");


const getrandomdta = (dataset) =>{
   return dataset[Math.floor(Math.random() * dataset.length)];
}

const generatepassword = (password = "") =>{
    if(upperInput.checked){
        password += getrandomdta(uppercase);
    }
    if(lowerInput.checked){
        password += getrandomdta(lowercase);
    }
    if(numberInput.checked){
        password += getrandomdta(number);
    }
    if(symbolsInput.checked){
       password += getrandomdta(symbols);
    }

    if(password.length < lengthInput.value){
       return generatepassword(password);  
    }

     let final_password = cutsting(password,lengthInput.value);
     passwordshowInput.value = final_password;
}

function cutsting(string,length){
   if(string.length > length){
     let newstr = string.substring(0,length);
     return newstr;
   }else{
     return string;
   }
}

const btn = document.querySelector("#btn").addEventListener("click",function(){
    generatepassword();

    let p = document.createElement("p");
    p.classList.add("history_p");
    p.innerText = passwordshowInput.value;

    let btn = document.createElement("button");
    btn.innerText = "Copy";
    btn.classList.add("btn_copy_h");
    btn.setAttribute("onclick","copy_history_password(this)");
    p.appendChild(btn);
    console.log(btn);

    let append_div = document.querySelector(".history_div");
    let first_p = append_div.firstElementChild;
    append_div.insertBefore(p,first_p);

})

const copy = document.querySelector("#copy_btn").addEventListener("click",function(){
    navigator.clipboard.writeText(passwordshowInput.value);
})

window.onload = () =>{
    generatepassword();
}

function copy_history_password(ele){
    let copy_his = cutsting(ele.parentElement.innerText,lengthInput.value)
    navigator.clipboard.writeText(copy_his);
}