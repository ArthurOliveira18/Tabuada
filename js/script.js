const multiplicationForm = document.getElementById("multiplication-form")
const numberInput = document.getElementById("number")
const multiplicatorInput = document.getElementById("multiplicator")
const multiplicationTable = document.getElementById("multiplication-operations")



// Funções
const createTable = (number, multiplicatorNumber) => {

    //Limpando o HTML ao iniciar
    const operationsDiv = document.getElementById("multiplication-operations")
    operationsDiv.innerHTML = "" // Limpa apenas as operações, mantendo o título

    for (let i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i

        console.log(result)

        const template =
            `<div class = "row">
            <div class = "operations"> ${number} X ${i} = </div>
            <div class = "result"> ${result} </div>
        </div>
        `
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row)
    }


}

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()

    
    const number = +numberInput.value
    const multiplicatorNumber = +multiplicatorInput.value

    //Verificação para o usuário colocar os dois números
    if (!number || !multiplicatorNumber) {

        //Não retorna nada pois não terá nada para retornar
        return
    }

    createTable(number, multiplicatorNumber)

})