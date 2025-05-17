const multiplicationForm = document.getElementById("multiplication-form")
const numberInput = document.getElementById("number")
const multiplicatorInput = document.getElementById("multiplicator")
const multiplicationTable = document.getElementById("multiplication-operations")



// Funções
const createTable = (number, multiplicatorNumber) => {


    const operationsDiv = document.getElementById("multiplication-operations")
    operationsDiv.innerHTML = ""

    for (let i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i

        console.log(result)

        const template =
            `<div class = "row">
                <div class = "operations"> ${number} X ${i} = </div>
                <div class = "result"> ${result} </div>
            </div>`


        //Cria um objeto que pode analisar (parsear) strings contendo HTML/XML e convertê-las em um documento DOM.    
        const parser = new DOMParser()

        //Converte a string HTML (template) em um documento HTML real (não apenas texto).
        //O segundo argumento ("text/html") especifica que o conteúdo deve ser interpretado como HTML.
        const htmlTemplate = parser.parseFromString(template, "text/html")

        //Busca dentro desse documento HTML temporário um elemento com a classe row.
        //Retorna o primeiro elemento que corresponde ao seletor CSS (no caso, a div.row que você criou no template).
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