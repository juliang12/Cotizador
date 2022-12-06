export const cotizador = (m2, factorP, factorU )=>{
    const costoM2 = 35.86;
let result = (costoM2 * factorP * factorU * m2)
return result.toFixed(2)
}