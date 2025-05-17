//Seleção de elementos
const multiplicationForm = document.getElementById("multiplication-form")
const numberInput = document.getElementById("number")
const multiplicatorInput = document.getElementById("multiplicator")
// Funções


//Eventos
multiplicationForm.addEventListener("submit" , (e)=>{
    e.preventDefault()

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +multiplicatorInput.value

    //Verificação para o usuário colocar os dois números
    if(!multiplicationNumber || !multiplicatorNumber){

        //Não retorna nada pois não terá nada para retornar
        return
    }

    console.log(multiplicationNumber,multiplicatorNumber)
})