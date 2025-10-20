import { Fragment } from "react/jsx-runtime";
import Input from "../../Components/Input/Input";
import { useEffect, useState, type FormEvent } from "react";
import { Link, Navigate, Route, useNavigate } from "react-router";
import z from "zod";
import axios from "axios";
import type { Task } from "../../data/models/task.model";
import { taskApi } from "../../api/tasks/list";





export default function Home() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone_number, setphoneNumber] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [tasks, setTasks] = useState<Array<Task>>([])

    const navigate = useNavigate();

    // const validate = registerStore.safeParse(FormData)

    const registerStore = z.object({
        name: z.string().min(3, "Le nom doit contenir au moins 3 caractères"),
        email: z.string().email("Email invalide"),
        phone_number: z.string().min(8, "Le numéro doit contenir aumoins 08 caractères"),
        password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    })

    const onFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const onFullEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const onFullNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setphoneNumber(event.target.value)
    }
    const onFullPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         const validation = registerStore.safeParse(FormData)

        //  localStorage.setItem("name", FormData.name);

        //  localStorage.setItem("email", FormData.email);
         

    if (!validation.success) {
      console.log(validation)
       
    }


        navigate("/profil");
        console.log("INFOS SAISIES :", { name, email, phone_number, password })
}

   

    //  const [count, setCount] = useState<number>(1)
    //      const age: string = '20M'
    //      const increment = (): void => {
    //     setCount(count * 2)
    // }

    useEffect(()=>{
      const fetchTasks = async() =>  {
  try {
    const data = await taskApi.getAll();
    setTasks(data);
   }
   catch (error) {
     console.log(error)
    }finally{
      
    }  
  }
 
  fetchTasks()
    },[])
    return (
        <div>
            <Fragment>
           

              {
                tasks.map((project, index)=>{
                 return(
                  <div key={index}>
                    {project.titre}
                   
                  </div>
                 )

                })
              }
                <div className="card">
                </div>
                <div className='bcd'>
                    <h1 className="form-title">Inscription</h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            label='Nom complet'
                            reference="full_name"
                            type="text"
                            placeholder="Entrez votre nom complet"
                            OnChange={onFullNameChange}
                            value={name}
                        /><br />

                        <Input
                            label="Email"
                            reference="Email"
                            type="Email"
                            placeholder="Entrez votr Email"
                            OnChange={onFullEmailChange}
                            value={email} /> <br />
                        <Input
                            label="Numéro de téléphone"
                            reference="phone_number"
                            type="number"
                            placeholder="Entrez votre numero de telephone"
                            OnChange={onFullNumberChange}
                            value={phone_number} /> <br />

                        <Input
                            label="Password"
                            reference="Password"
                            type="Password"
                            placeholder="Entrez votre mot de passe"
                            OnChange={onFullPasswordChange}
                            value={password}

                        /> <br />
                        <button type="submit">Se connecter</button> 
                         <Link to='/Login'>Login</Link>
                    </form>

                </div>
            </Fragment>
        </div>
    )
}