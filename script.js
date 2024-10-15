function lembrete(e){
    const ul = document.querySelector("ul")
    const li = document.createElement("li")

        if(document.querySelector(".inputs").value == ""){
             const inputs = document.querySelector(".inputs")
            inputs.setAttribute("placeholder","Lembrete invalido");
        }else if(e.key == "Enter"){
         const inputs = document.querySelector(".inputs").value;
        li.append(inputs);
         ul.append(li);
        }

}


const inputs = document.querySelector(".inputs")

inputs.addEventListener("keyup",lembrete)


