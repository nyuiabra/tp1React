import  './input.css' 

type InputProps ={
    reference:string
    label?:string
    type:string
    placeholder:string
}

export default function Input({
    reference,label,type,placeholder,
}:InputProps) {
  return (
    <div className='form'>
        <label htmlFor={reference}> {label} </label>
        <input type={type} name ={reference}  id ={reference} placeholder={placeholder}/>
    </div>
  )
}

