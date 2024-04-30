import { Routes, Route } from "react-router-dom";

import Home from "../components/templates/HomeTemplate";

export default function MyRoutes() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        
    );
}