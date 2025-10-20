import { useNavigate } from "react-router"


export default function Create() {
    const navigate = useNavigate()
    const goToBack =()=>{
        navigate(-1)
    }
  return (
    <div>
        <button type ='button' onClick={ goToBack}>
          retour
        </button>
        <h1>creer une tache </h1>
    </div>
  )
}
