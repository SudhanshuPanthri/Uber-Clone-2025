import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CaptainLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();
        setCaptainData(
            {
                email: email,
                password: password
            }
        )
        setEmail('');
        setPassword('');
    }


    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-lg font-medium mb-2">What's your Email ?</h3>
                    <input required className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" name="" id="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h3 className="text-lg font-medium  mb-2">Enter Password</h3>
                    <input type="password" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" name="" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg" onClick={() => console.log(`${email} ${password}`)}>Login</button>
                </form>
                <span className="mr-2">Join as a fleet ?</span><Link to="/captain/signup" className="text-blue-600">Register as captain</Link>
            </div>
            <div>
                <Link to="/user/login" className="flex w-full items-center justify-center bg-[#df622d] text-white font-semibold mb-10 rounded px-4 py-2 w-full text-lg">Sign in as User</Link>
            </div>
        </div>
    )
}

export default CaptainLogin;