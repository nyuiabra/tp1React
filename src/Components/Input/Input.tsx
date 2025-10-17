import  './input.css' 

type InputProps ={
    reference:string
    label?:string
    type:string
    placeholder:string
    OnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value:string
 
};

export default function Input({
    reference,
    label,
    type,
    placeholder, 
    OnChange,
    value,
}:InputProps) {
  return (
    <div className='form'>
        <label htmlFor={reference}> {label} </label>
        <input 
        type={type} 
        name ={reference}  
        id ={reference}
         placeholder={placeholder} 
         onChange={OnChange}
         value ={value}
        
        />
    </div>
  )
}

