import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./links/AppRouter"


function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Header/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
