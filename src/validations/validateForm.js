
const validateForm = (values)=>{

    const error = {};

    if(!values.tipo){
        error.tipo = "Es un campo obligatorio"
    }

    if(!values.ubicacion){
        error.ubicacion = "Es un campo obligatorio"
    }

    if(values.metros < 0){
        error.metros = "Debe ser mayor a 0"
    }
    if(values.metros > 200){
        error.metros = "No puede exceder 200 m2"
    }
    return error
}

export default validateForm
