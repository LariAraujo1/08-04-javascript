const multiplicationForm = document.querySelector("#multiplication-form")

const numberInput = document.querySelector("#number")

const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")




//evento

multiplicationForm.addEventListener("submit", (e)=>{ 
    //para não recarregar a pagina quando clica no botão calcular- ele retira o reload da pagina:
    e.preventDefault();

    const multiplicationNumber = numberInput.value;//numero inserido da tabuada

    const multiplicatorNumber = +multiplicationInput.value;//Quantas vezes eu vou calcular o numero inserido

    if(!multiplicationNumber || !multiplicatorNumber) return; // só sera executado quando ambos os campos estiverem preenchidos

createTable(multiplicationNumber, multiplicatorNumber);//vamor criar a função que cria a tabela mas para isso,precisamos garantir que os campos #multiplication-title span e #multiplication-operations estejam vazios...
})

const createTable= (number, multiplicatorNumber)=>{
    multiplicationTable.innerHTML ="";
    //Acesso o conteudo de texto e substituo por string vazia 

    //criando a tabuada
    for(i=1; i<=multiplicatorNumber; i++){
        const result= number * i;

        const template = <div clss="row">
            <div class="operation">${number} x ${i}=</div>
            <div class="result">${result}</div>
        </div>
    const parser= new DOMParser();//Objeto que perimite transferir um string em html
    const htmlTemplate= parser.parseFromString(template, "text/html");
    const row= htmlTemplate.querySelector(".row");
    multiplicationTable.appendChild(row);

    }
    multiplicationTitle.innerText = number;
};


// Eventos


// 04
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Quando clicar no botção calcular, não quero que ele recarregue a página
  
    const multiplicationNumber = numberInput.value; // numero inserido da tabuada
  
    const multiplicatorNumber = +multiplicationInput.value; // Quantas vezes eu vou calcular o número inserido
  
    if (!multiplicationNumber || !multiplicatorNumber) return; // Só será executado se ambos os campos estiverem preenchidos
  
    createTable(multiplicationNumber, multiplicatorNumber); // vamos criar a função que cria a tabela mas para isso, precisamos garantir  que o campos "#multiplication-title span" e "#multiplication-operations" estejam vazios..... vá para o 05
  });






