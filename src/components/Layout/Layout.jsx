import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
    
    return (
        <div>
            <AppBar />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    ); 
}