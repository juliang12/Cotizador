
const validateForm = (values)=>{

    const error = {};

    if(!values.tipo){
        error.tipo = "Es un campo obligatorio"
    }

    if(!values.ubicacion){
        error.ubicacion = "Es un campo obligatorio"
    }
    return error
}

export default validateForm
