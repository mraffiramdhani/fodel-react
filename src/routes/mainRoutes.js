// import Register from "pages/auth/Register.js";
import Login from "../pages/auth/Login";
import Index from "../pages/admin/Index";
import UserIndex from '../pages/users/Index';
import UserCreate from '../pages/users/Create';
import UserUpdate from '../pages/users/Update';
import RestaurantIndex from '../pages/restaurants/Index';
import CategoryIndex from '../pages/categories/Index';
import ItemIndex from '../pages/items/Index';

var mainRoutes = [

    {
        path: "/index",
        name: "Dashboard",
        menuName: "Dashboard",
        icon: "fa fa-dashboard",
        component: Index,
        layout: "/admin",
        isMenu: true
    },
    {
        path: "/user/index",
        name: "User Management",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserIndex,
        layout: "/admin",
        isMenu: true
    },
    {
        path: "/user/create",
        name: "User Create",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserCreate,
        layout: "/admin",
        isMenu: false
    },
    {
        path: "/user/edit",
        name: "User Edit",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserUpdate,
        layout: "/admin",
        isMenu: false
    },
    {
        path: "/restaurant/index",
        name: "Restaurant Management",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantIndex,
        layout: "/admin",
        isMenu: true
    },
    {
        path: "/category/index",
        name: "Category Management",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryIndex,
        layout: "/admin",
        isMenu: true
    },
    {
        path: "/item/index",
        name: "Item Management",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemIndex,
        layout: "/restaurant",
        isMenu: true
    },
    {
        path: "/login",
        name: "Login",
        menuName: "Login",
        icon: "fa fa-key",
        component: Login,
        layout: "/auth",
        isMenu: false
    }

]

export default mainRoutes