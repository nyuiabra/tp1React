import { Link } from "react-router";
import Input from "../../Components/Input/Input";


export default function Login(){
  return (
    <div>
        <h1>connexion</h1>
      
       <Input label={'Nom complet : '} reference={'full_name'}  type={'text'} placeholder={'Entrez votre nom complet...'}/>
        <Input label={'Mot de passe :'} reference={'password'}  type={'password'} placeholder={'Entrez votre mot de passe...'}/>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>

       
    </div>
  )
}
