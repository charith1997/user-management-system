import Header from "./components/pages/HeaderPage/Header";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Organizations from "./components/pages/OrganizationsPage/Organizations";
import Users from "./components/pages/UsersPage/Users";
import Overview from "./components/pages/OverviewPage/Overview";

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
