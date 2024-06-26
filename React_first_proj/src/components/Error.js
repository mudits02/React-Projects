import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-page">
            <h1>{err.error.message}</h1>
        </div>
    )
}

export default Error;