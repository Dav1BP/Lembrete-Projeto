function lembrete(e){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const inputs = document.querySelector(".inputs");
        if(count <=20){
        if(document.querySelector(".inputs").value == ""){
             const inputs = document.querySelector(".inputs")
            inputs.setAttribute("placeholder","Lembrete invalido");
        }else if(e.key == "Enter"){                                                         
        li.append(inputs.value);
         ul.append(li);
         inputs.value = "";
         inputs.setAttribute("placeholder","Digite");
         count++;
         console.log(count)
        }
    }else{
        inputs.setAttribute("placeholder","num.max de lembrete");
    }
}
let count = 0;

const inputs = document.querySelector(".inputs")

inputs.addEventListener("keyup",lembrete)


