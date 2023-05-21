import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";

export default function Account() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let user = null;
    async function login(event:any) {
        event.preventDefault();
        fetch("https://thecatscradle.azurewebsites.net/login", {
            method: "POST",
            body: JSON.stringify({
                username, password
            }),
            headers: {
                "content-type": "application/json"
            },
        }).catch((err) => console.log(err)); 
    }

    if(user == null) {
        return (
            <div>
                <Header current="Account" />
                <div className="center-x stack">
                    <h3>Log In</h3>
                    <form onSubmit={login} >
                        <div className="row space-evenly">
                            <label>Username </label>
                            <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)}></input>
                        </div>
                        <div className="row space-evenly">
                            <label>Password </label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className="row">
                            <button type="submit">Log In</button>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    } else {
        <div>
            <Header current="Account" />

            <Footer />
        </div>        
    }
}