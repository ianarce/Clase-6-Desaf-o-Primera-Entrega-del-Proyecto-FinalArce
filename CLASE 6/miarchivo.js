//CONVERTIDOR DE DOLARES A MONEDAS

//DECLARACION DE UNA CLASE
class Moneda{
    constructor(Denominacion,ValorDolares){
        this.Denominacion=Denominacion
        this.ValorDolares=ValorDolares
    }
}

//FUNCION PARA CONVERTIR EL VALOR INGRESADO A DOLARES
function Convertir(ValorIngresado,ValorDolares){
    return ValorIngresado*ValorDolares
}

//MONEDAS DISPONIBLES
const moneda1= new Moneda("Pesos Mexicanos",20)
const moneda2= new Moneda("Pesos Argentinos",103)
const moneda3= new Moneda("Yenes",115)
const moneda4= new Moneda("Pesos Uruguayos",44)


//ARRAY DE MONEDAS
let monedasALL = []
monedasALL.push(moneda1)
monedasALL.push(moneda2)
monedasALL.push(moneda3)
monedasALL.push(moneda4)
//METODO .find
const monedaMEX=(monedasALL.find(monFind=> monFind.ValorDolares===20))
const monedaARG=(monedasALL.find(monFind=> monFind.ValorDolares===103))
const monedaYEN=(monedasALL.find(monFind=> monFind.ValorDolares===115))
const monedaURU=(monedasALL.find(monFind=> monFind.ValorDolares===44))



//
let denomiIngresada=prompt(`PULSA ENTER PARA ENTRAR 
INGRESA "ESC" PARA SALIR`)


while (denomiIngresada!="ESC"){

    alert("CONVERTIDOR DE DOLARES A DIFERENTES MONEDAS")
//VALORES INGRESADOS
 denomiIngresada=prompt(`Ingresa la denominacion a convertir: \n
                        ${monedaMEX.Denominacion}
                        ${monedaARG.Denominacion}
                        ${monedaYEN.Denominacion}
                        ${monedaURU.Denominacion}
                         INGRESA "ESC" PARA SALIR`)

let valorConvertir=parseInt(prompt("Ingresa el valor en dolares a convertir"))


if (denomiIngresada===monedaMEX.Denominacion){
   let valorConvertido = Convertir(valorConvertir,monedaMEX.ValorDolares)
   alert(`El resultado es ${valorConvertido} ${monedaMEX.Denominacion}`)
   
}
else if (denomiIngresada===monedaARG.Denominacion){
    let valorConvertido = Convertir(valorConvertir,monedaARG.ValorDolares)
    alert(`El resultado es ${valorConvertido} ${monedaARG.Denominacion}`)
    
}
else if (denomiIngresada===monedaYEN.Denominacion){
    let valorConvertido = Convertir(valorConvertir,monedaYEN.ValorDolares)
    alert(`El resultado es ${valorConvertido} ${monedaYEN.Denominacion}`)
    
}
else if (denomiIngresada===monedaURU.Denominacion){
    let valorConvertido = Convertir(valorConvertir,monedaURU.ValorDolares)
    alert(`El resultado es ${valorConvertido} ${monedaURU.Denominacion}`)
    
}
else if (denomiIngresada==="ESC"){
    alert("SALIENDO....")
}
else{
    alert("ERROR MONEDA NO DISPONIBLE VERIFICA QUE HAYAS INGRESADO EL VALOR CORRECTO")
 
}
}