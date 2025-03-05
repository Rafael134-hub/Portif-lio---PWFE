import { Link } from "react-router-dom";


export default function Header() {
    return (
        <>
            <header className="flex justify-center bg-blue-100">
                <div className="w-[70%] pt-10 pb-10">
                    <div className="flex justify-end">
                        <Link to="/"><h2 className="text-xl hover:text-blue-500">Home</h2></Link>
                        <Link to="/javascript"><h2 className="text-xl pl-10 hover:text-blue-500">JavaScript</h2></Link>
                        <Link to="/ui-ux"><h2 className="text-xl pl-10 hover:text-blue-500">UI - UX</h2></Link>
                    </div>
                </div>
            </header>

        </>
    );
}


