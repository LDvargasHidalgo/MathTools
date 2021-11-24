let calcularAreaCilindro = (radio,altura)=>{
    return(2*Math.PI*(radio**2))+(altura*(2*Math.PI*radio))
}


let  calcularAreaEsfera = (radioEsfera)=>{
    return(4*Math.PI*(radioEsfera**2))
}


let calcularAreaCubo = (lado) =>{
    return((lado*lado)*6)
}

// para poder exportar mis funciones a otras carpetas
module.exports ={
    calcularAreaCilindro,
    calcularAreaEsfera,
    calcularAreaCubo
}