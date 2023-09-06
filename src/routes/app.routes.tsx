import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { SelectServices } from "../pages/SelectServices";
import { ServicesSearch } from "../pages/ServicesSearch";
import { CreateServices } from "../pages/CreateServices";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select-services" element={<SelectServices />} />
            <Route path="/services-search" element={<ServicesSearch />} />
            <Route path="/create-service" element={<CreateServices />} />
        </Routes>
    );
}