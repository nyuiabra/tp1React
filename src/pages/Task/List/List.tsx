import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../../../Components/Loader/Loader";
import { taskApi } from "../../../api/tasks/list";
import type { Task } from "../../../data/models/task.model";


export default function List() {
    const [isLoading , setIsLoading] =useState<boolean>(true)
    const [tasks, setTasks] = useState<Array<Task>>([])

       useEffect(()=>{
          const fetchTasks = async() =>  {
      try {
        const data = await taskApi.getAll();
        setTasks(data);
       }
       catch (error) {
         console.log(error)
        }finally{
          setIsLoading(false)
        }  
      }
     
      fetchTasks()
        },[])
  return (
    <div>
        <h1>
            Liste des taches 
        </h1>
<Link to ="/tasks/create">creer une tache</Link> 
<br />
<br />
<br />
{
    isLoading ? 
    <Loader />:
   <table>
    <thead>
        <tr>
            <th>
                Titre
            </th>
            <th>
                Etat
            </th>
        </tr>
    </thead>
    <tbody>
   {
    tasks.length === 0 ?
<tr>
    <td colSpan={2}>
      Aucun tache
    </td>
</tr> :
tasks.map((task, index) =>{
    return (
        <tr key ={index}>
            <td>
                {task.create_at}
            </td>

        </tr>
    )
})

   }
    </tbody>
   </table>
}





    </div>
  )
}
