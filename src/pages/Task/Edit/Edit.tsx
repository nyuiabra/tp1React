import { useNavigate } from "react-router"


export default function Edit() {

        const navigate = useNavigate()
        const goToBack =()=>{
        navigate(-1)
}
  return (
    <div>
          <button type ='button' onClick={ goToBack}>
          retour
        </button>
        <h1>Details d'une taches </h1>
    </div>
  )
}
