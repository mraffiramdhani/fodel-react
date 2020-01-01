// import Register from "pages/auth/Register.js";
import Login from "./pages/auth/Login";
import Index from "./pages/admin/Index";

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

]

export default routes