import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState } from "react";

export default function Account() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let user = "Bill";

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
        return (
            <div>
                <Header current="Account" />
                <div>
                    <h3>Welcome, {user}</h3>
                    <div className="border-all">
                        <h4>User Settings</h4>
                        <form>
                            <div className="row space-evenly">
                                <div className="row">
                                    <input type="radio" name="mode" id="light" />
                                    <label htmlFor="light">Light Mode</label>
                                    
                                </div>
                                <div className="row">
                                    <input type="radio" name="mode" id="dark" />
                                    <label htmlFor="dark">Dark Mode</label>
                                    
                                </div>
                            </div>
                        </form>
                        <h4>Shop Settings</h4>
                        <p>Leave blank if you are not a seller.</p>
                        <form>
                            <div className="row space-evenly">
                                <label htmlFor="shopname">Shop Name</label>
                                <input type="text" name="shopname" id="shopname" />
                            </div>
                            <div className="row space-evenly">
                                <label htmlFor="slogan">Slogan</label>
                                <input type="text" name="slogan" id="slogan" />
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>   
        )     
    }
}