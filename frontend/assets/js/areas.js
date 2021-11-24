const hacerPeticion = (e) => {
    e.preventDefault()
    let radio = document.getElementById("r").value;
    let altura = document.getElementById("h").value;
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

    let result = document.getElementById("result");

    if (radio && altura) {
        fetch(`http://localhost:8080/cilindro?r=${radio}&h=${altura}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                result.innerHTML = parseFloat(data.area).toFixed(2)
                myModal.show()
            })
    }
}

const hacerPeticionEsfera = () => {
    let radioEsfera = document.getElementById("radioEsfera").value;
    let myModalEsfera = new bootstrap.Modal(document.getElementById('exampleModalEsfera'))

    let resultEsfera = document.getElementById("resultEsfera");

    if (radioEsfera) {
        fetch(`http://localhost:8080/esfera?radioEsfera=${radioEsfera}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                resultEsfera.innerHTML = parseFloat(data.areaEsfera).toFixed(2)
                myModalEsfera.show()
            })
    }
}

const hacerPeticionCubo = () => {
    let ladoCubo = document.getElementById("ladoCubo").value;
    let myModalCubo = new bootstrap.Modal(document.getElementById('exampleModalCubo'))

    let resultCubo = document.getElementById("resultCubo");

    if (ladoCubo) {
        fetch(`http://localhost:8080/cubo?ladoCubo=${ladoCubo}`, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                resultCubo.innerHTML = parseFloat(data.ladoCubo).toFixed(2)
                myModalCubo.show()
            })
    }
}