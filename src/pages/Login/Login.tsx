import { Link, useNavigate } from "react-router";
import Input from "../../Components/Input/Input";
import { useState, type ChangeEvent, type FormEvent } from "react";
import z from "zod";


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const loginStore = z.object({
        email: z.string().email("Email invalide"),
        password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    })

    const onFullEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const onFullPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }



    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validate = loginStore.safeParse(FormData)

        
        
        // localStorage.setItem("password", FormData.);
        
        

        if (!validate.success) {
         console.log(validate.error)
        }

        navigate("/profil");
        

        console.log("Connexionn réussie :", { email, password })
    }



    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={handleSubmit} >
                <div className="bcd">
                    {/* <img src="/image.png" alt="Depuis public" width="30vh" /> */}
                    <Input
                        label="Email"
                        reference="Email"
                        type="Email"
                        placeholder="Entrez votr Email"
                        OnChange={onFullEmailChange}
                        value={email} /> <br />
                    <Input
                        label="Password"
                        reference="Password"
                        type="Password"
                        placeholder="Entrez votre mot de passe"
                        OnChange={onFullPasswordChange}
                        value={password} /> <br />
                    <br />
                    <button type="submit">Se connecter</button>
                    <Link to='/'>Inscription</Link>

                </div>


            </form>


        </div>

    )
}