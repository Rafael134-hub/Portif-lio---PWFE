import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/gelo_bar.png"


export default function Header() {
    return (
        <>
            <header className="flex justify-center bg-sky-100 text-sky-900">
                <div className="w-[100%]"> 
                    <div className="flex justify-center ">
                        <div className="w-[70%] pt-10 pb-10">
                            <div className="flex justify-end">
                                <Link to="/"><h2 className="text-xl hover:text-sky-300">Home</h2></Link>
                                <Link to="/javascript"><h2 className="text-xl pl-10 hover:text-sky-300">JavaScript</h2></Link>
                                <Link to="/ui-ux"><h2 className="text-xl pl-10 hover:text-sky-300">UI - UX</h2></Link>
                            </div>

                            
                        </div>
                    </div>
                    
                    {/* <img src= {backgroundImage} className="w-[100%] h-3"></img> */}
                </div>

            </header>

        </>
    );
}


