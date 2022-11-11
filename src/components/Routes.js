import { Routes as RouteList, Route} from "react-router-dom"
import Cats from "./Cats"
import Appa from "./Appa"
import CatWeek from "./CatWeek"
import AboutJeffers from "./AboutJeffers"


const Routes = ()=>{
    return (
        <RouteList>
            <Route path="/" element={<CatWeek /> } />
            <Route path="/cats" element={<Cats />} />
            <Route path="/appa" element={<Appa />} />
            <Route path="/aboutjeffers" element={<AboutJeffers />}/>
        </RouteList>
)}
export default Routes
