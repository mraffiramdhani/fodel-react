// import Register from "pages/auth/Register.js";
import Login from "./pages/auth/Login";
import Index from "./pages/admin/Index";
import UserIndex from './pages/users/Index';

var routes = [

    {
        path: "/login",
        name: "Login",
        icon: "fa fa-key",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/index",
        name: "Dashboard",
        icon: "fa fa-dashboard",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/user/index",
        name: "Users",
        icon: "fa fa-users",
        component: UserIndex,
        layout: "/admin"
    }

]

export default routes