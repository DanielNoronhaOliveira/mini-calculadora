


function calcular1() {
    const botao1 = document.querySelector(".botao1")
    const n1 = document.querySelector(".n1").value
    const n2 = document.querySelector(".n2").value
    const p1 = document.querySelector(".p1")


    const resultado = parseInt(n1) + parseInt(n2)
    p1.innerHTML = `O resultado é ${resultado}`


}

function calcular2() {
    const botao1 = document.querySelector(".botao2")
    const n12 = document.querySelector(".n12").value
    const n22 = document.querySelector(".n22").value
    const p2 = document.querySelector(".p2")


    const resultado2 = parseInt(n12) - parseInt(n22)
    p2.innerHTML = `O resultado é ${resultado2}`


}

function calcular3() {
    const botao3 = document.querySelector(".botao3")
    const n13 = document.querySelector(".n13").value
    const n23 = document.querySelector(".n23").value
    const p3 = document.querySelector(".p3")


    const resultado3 = parseInt(n13) * parseInt(n23)
    p3.innerHTML = `O resultado é ${resultado3}`
}

function calcular4() {
    const botao4 = document.querySelector(".botao4")
    const n14 = document.querySelector(".n14").value
    const n24 = document.querySelector(".n24").value
    const p4 = document.querySelector(".p4")


    const resultado4 = parseInt(n14) / parseInt(n24)
    p4.innerHTML = `O resultado é ${resultado4}`
}

function calcular5(){
    const botao5 = document.querySelector(".botao5")
    const n15 = document.querySelector(".n15").value
    const n25 = document.querySelector(".n25").value
    const p5 = document.querySelector(".p5")

    const resultado5=Math.pow(n15,n25)
    p5.innerHTML = `O resultado é ${resultado5}`
}