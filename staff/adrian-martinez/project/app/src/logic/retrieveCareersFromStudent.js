import { errors, validate } from "com";

const { SystemError } = errors;

function retrieveCareersFromStudent() {
    
    validate.token(sessionStorage.token);

    return fetch("http://localhost:8989/careers", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${ sessionStorage.token }`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if(res.status === 200){
                return res.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(careers => careers);
            }

            return res.json()
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error];

                    throw new constructor(message);
                })
    })
}

export default retrieveCareersFromStudent;