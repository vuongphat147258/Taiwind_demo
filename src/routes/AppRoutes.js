import {
    Route,
    Routes
} from "react-router-dom";

import Home from "../components/Homepage/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                {/* Home */}
            </Route>
        </Routes>
    )
}

export default AppRoutes;