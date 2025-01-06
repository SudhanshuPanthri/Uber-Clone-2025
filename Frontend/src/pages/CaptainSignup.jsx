import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CaptainSignup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userData, setUserData] = useState({});

    const submitHandler = (event) => {
        event.preventDefault();

        //make sure password is more than or equal to 6 characters

        if (password != confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        setUserData(
            {
                fullName: {
                    firstName: firstName,
                    lastName: lastName,
                },
                email: email,
                password: password
            }
        )
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-lg font-medium mb-2">What's your name ?</h3>
                    <div className="flex gap-4">

                        <input required className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base" type="text" name="" id="email" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                        <input required className="bg-[#eeeeee] mb-7 w-1/2 rounded px-4 py-2 border text-base placeholder:text-base" type="text" name="" id="email" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
                    <input required className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base" type="email" name="" id="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h3 className="text-lg font-medium  mb-2">Enter Password</h3>
                    <input type="password" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base" name="" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <h3 className="text-lg font-medium  mb-2">Confirm Password</h3>
                    <input type="password" className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base" name="" id="password" placeholder="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                    <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg" onClick={() => console.log(`${email} ${password}`)}>Sign Up</button>

                </form>
                <span className="mr-2">Already have an account?</span><Link to="/captain/login" className="text-blue-600">Sign in</Link>
            </div>
            <div>
                <p className="text-[12px]">By proceeding you accept our privacy policy.</p>
                <p className="text-[12px]">Terms and Services apply</p>
            </div>
        </div>
    )
}

export default CaptainSignup;