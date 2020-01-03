// import Register from "pages/auth/Register.js";
import Login from "./pages/auth/Login";
import Index from "./pages/admin/Index";
import UserIndex from './pages/users/Index';
import RestaurantIndex from './pages/restaurants/Index';
import CategoryIndex from './pages/categories/Index';
import ItemIndex from './pages/items/Index';

var routes = [

    {
        path: "/index",
        name: "Dashboard",
        menuName: "Dashboard",
        icon: "fa fa-dashboard",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/user/index",
        name: "User Management",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserIndex,
        layout: "/admin"
    },
    {
        path: "/restaurant/index",
        name: "Restaurant Management",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantIndex,
        layout: "/admin"
    },
    {
        path: "/category/index",
        name: "Category Management",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryIndex,
        layout: "/admin"
    },
    {
        path: "/item/index",
        name: "Item Management",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemIndex,
        layout: "/admin"
    },
    {
        path: "/login",
        name: "Login",
        menuName: "Login",
        icon: "fa fa-key",
        component: Login,
        layout: "/auth"
    }

]

export default routes