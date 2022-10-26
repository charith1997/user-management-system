import Header from "./components/Header";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Organizations from "./components/Organizations";
import Users from "./components/Users";
import Overview from "./components/Overview";

function App() {
    return <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Overview/>}/>
                <Route path="/organizations" element={<Organizations/>}/>
                <Route path="/users" element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    </div>;
}

export default App;
