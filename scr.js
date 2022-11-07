let b2 = document.getElementById('b2')
b2.style.display = 'none'

function enviar() {
    event.preventDefault()
    let nome = document.getElementById('nome').value
    let idade = parseInt(document.getElementById('idade').value)  
    let txt = document.getElementById('txtarea')
    let h1 = document.getElementById('h2')
    let b1 = document.getElementById('b1')
    let b2 = document.getElementById('b2')


  
    

    if (idade.length == 0 || nome.length == 0) {
        alert("Insira seu nome e idade")
    }


    if (idade > 7) {
            alert("OK, agora faça um desenho de como foi suas férias")
            location.href = "canva/canva.html"
    }

    else if (idade < 7) {
        alert('Ficamos felizes de você querer contar suas férias. Mas você não tem idade o suficiente. Peça a um responsável para te acompanhar')
    }

    if (txt.length > 1) {
        alert("obrigado")
    }


}
