import { ChangeEvent, FormEvent, useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    function inputChangeHandler(stateUpdater: React.Dispatch<React.SetStateAction<string>>) {
        return (e: ChangeEvent) => {
            const input = e.target as HTMLInputElement;

            stateUpdater(input.value);
        }
    }

    return (
        <form onSubmit={submit}>
            <input type="email" onChange={inputChangeHandler(setEmail)} /> <br />
            <input type="password" onChange={inputChangeHandler(setPassword)} /> <br />

            <input type="submit" />  
        </form>
    )
}