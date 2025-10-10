


import { Link } from "react-router"
import Input from "../../Components/Input/Input"
// import Input from "../../components/Input"

function Home() {
  return (
    <>
      <h1>TP 1</h1>
      <Input label={'Nom complet : '} reference={'full_name'}  type={'text'} placeholder={'Entrez votre nom complet...'}/>
      <Input label={'Email :'} reference={'email'}  type={'email'} placeholder={'Entrez votre email...'}/>
      <Input label={'Numero :'} reference={'full_number'}  type={'number'} placeholder={'Entrez votre numero de telephone...'}/>
      <Input label={'Mot de passe :'} reference={'password'}  type={'password'} placeholder={'Entrez votre mot de passe...'}/>
      <Link to="/login">Login</Link>
    </>
  )
}

export default Home