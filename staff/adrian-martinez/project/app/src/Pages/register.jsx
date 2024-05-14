import { useState } from "react";
//import Form from "../components/Form"
import logic from "../logic"
import { errors } from "com"

const { ContentError, DuplicityError } = errors
 
let nUsers = 4;

function Register(props) {

    //Construimos un objecto para guardar el estado de los diferente tipor de errores que recojamos
    // en el formulario para poder ponerlos en el html al lado de su input
    const [error, setError] = useState(null);

    const handleSubmitStudent = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const surnames = form.surnames.value;
        const age = parseInt(form.age.value);

        const email = form.email.value;
        const password = form.password.value;

        try{
            logic.registerStudent(name, surnames, age, email, password)
                .then(() => props.onClickLogin())
                .catch(error => {
                    errorHandler(error)
                })

        }
        catch(error){
            errorHandler(error)
        }
    }

    //TODO
    const handleSubmitCompany = event => {

        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const address = form.address.value;
        const activity = form.activity.value;
        const email = form.email.value;
        const password = form.password.value;

        try{
            logic.registerCompany(name, address, activity, email, password)
                .then(() => props.onClickLogin())
                .catch(error => {
                    errorHandler(error)
                })
        }
        catch(error){
            errorHandler(error)
        }
    }

    //TODO Añadir y eliminar el classname del formulario según el que elija
    /* function formStudent(){
        
    }

    function FormCompany(){

    } */

    //Esta función nos va guardar los tipos de error de cada campo del formulario como propiedad del objeto Error
    const errorHandler = (error) => {
        console.error(error.message)

        let feedback = error.message;

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`;

        else if (error instanceof DuplicityError)
            feedback = `${feedback}, please verify credentials`;

        else
            feedback = "Sorry, there was an error, please try again later";

        const isNameError = error.message.includes('name')
        const isSurnamesError = error.message.includes('surnames')
        const isAgeError = error.message.includes("age")
        const isEmailError = error.message.includes("email")
        const isPasswordError = error.message.includes("password")

        setError({ message: feedback, isNameError, isSurnamesError, isAgeError, isEmailError, isPasswordError });
    }


    return (
    <>
        <header className="header">
            <div id="app">FormativeLife</div>
            <div className="titular"><i>Crea ya tu perfil profesional !!</i></div>
            
        </header>
        <main>
            <container id="container">
                <section className="">
                    <form className="form visible" onSubmit={ handleSubmitStudent }>
                        <label forhtml="name">Nombre: </label>
                        <input type="text" id="name" placeholder="" required /><br/><br/>

                        <label forhtml="surnames">Apellidos: </label>
                        <input type="text" id="surnames" placeholder="" required /><br/><br/>

                        <label forhtml="age">Edad: </label>
                        <input type="text" id="age" placeholder="Debe ser mayor de 16" required /><br/><br/>

                        <label forhtml="email">Correo electrónico: </label>
                        <input type="text" id="email" placeholder="" required /><br/><br/>

                        <label forhtml="password">Contraseña: </label>
                        <input type="password" id="password" placeholder="Entre 8 y 16 caracteres" required /><br/><br/>

                        <button type="submit">Registrarse como estudiante</button>
                    </form>

                    <form className="form visible float-right my--8" onSubmit={ handleSubmitCompany }>
                        <label forhtml="name">Nombre: </label>
                        <input type="text" id="name" placeholder="" required /><br/><br/>

                        <label forhtml="address">Ubicación: </label>
                        <input type="text" id="address" placeholder="Calle Real, N20 - Coruña" required /><br/><br/>

                        <label forhtml="activity">Actividad: </label>
                        <input type="text" id="activity" placeholder="Diseño Web" required /><br/><br/>

                        <label forhtml="email">Correo electrónico: </label>
                        <input type="text" id="email" placeholder="" required /><br/><br/>

                        <label forhtml="password">Contraseña: </label>
                        <input type="password" id="password" placeholder="Entre 8 y 16 caracteres" required /><br/><br/>

                        <button type="submit">Registrarse como empresa</button>
                    </form>

                    {/* <button onClick={ FormStudent() }>Registrarse como Estudiante</button> */}
                    {/* <button onClick={ FormCompany() }>Registrarse como Empresa</button> */}
                    <button onClick={props.onClickInicio}>Volver</button>
                </section>
            </container>
        </main>
        <footer>
            
        </footer>
        {/* <Routes>
          <Route path="/" element={<Inicio numUsers={nUsers} />} /> 
        </Routes> */}
    </>
    )
}

export default Register;