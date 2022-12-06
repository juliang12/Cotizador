import { useEffect, useState } from 'react'


const useForm = (initialState, validate, fn) => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if(submit){
    const noErrors = Object.keys(error).length === 0;

    if(noErrors){
      fn()
    }
    setSubmit(false)
  }
  }, [error, fn, submit]);

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const validateForm = validate(values);
    setError(validateForm)
    setSubmit(true)
  }

  return {values, error, handleChange, handleSubmit}
}

export default useForm