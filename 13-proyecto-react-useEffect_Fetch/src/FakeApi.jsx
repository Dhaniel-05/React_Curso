import { useState } from "react";
import { UserList } from "./components/UserList";

export const FakeApi = () => {

    const [endPoint, setEndpoint] = useState('users');
    

const handleFetch = () => {
    setEndpoint('comments');
}

    return (
        <>
        <h1>Lista de usuarios:</h1>
        <UserList endPoint={endPoint}></UserList>
        <button onClick={handleFetch}>Consumir el API</button>
        </>
    )
}
