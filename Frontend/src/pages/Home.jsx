import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div>
            <div className="bg-cover bg-center bg-[url(https://media.self.com/photos/5fa9c6976f667bbd3bba110e/master/pass/roadtrip_drive.jpeg)] h-screen pt-8 flex justify-between flex-col w-full">
            <img className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="bg-white pb-7 px-4">
                <h2 className="text-3xl font-bold mt-4">Get Started With Uber</h2>
                <Link to="/user/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
            </div>
        </div>
    )
}

export default Home;