import {useState} from "react";
import Login from "./Login";
import Register from "./Register";
import "../../styles/authPage.css"

function AuthContainer() {
    const [welcome, setWelcome] = useState(false);

    function setBannerClass() {
        const classArr = ['banner-side cfb']
        if (welcome) classArr.push('send-right')

        return classArr.join(' ')
    }

    function setFormClass() {
        const classArr = ['form-side cfb']
        if (welcome) classArr.push('send-left')

        return classArr.join(' ')    }

    return (
        <div className='container cfb'>
            <div className={setBannerClass()}>
                {welcome ?
                    <h2>Bienvenue chef !</h2> :
                    <h2>Content de vous revoir, chef !</h2>
                }
                <button onClick={() => setWelcome(!welcome)}>
                    {welcome ? "Me connecter" : "Créer un compte"}
                </button>
            </div>
            <div className={setFormClass()}>
                {welcome ?
                    <Register /> : <Login />
                }
            </div>
        </div>
    )

}

export default AuthContainer;