// import Register from "pages/auth/Register.js";
import Login from "../pages/auth/Login";

import { Dashboard as AdminDashboard } from "../pages/admin/Dashboard";
import { Dashboard as RestaurantDashboard } from "../pages/restaurants/Dashboard";

import UserIndex from '../pages/users/Index';
import UserCreate from '../pages/users/Create';
import UserUpdate from '../pages/users/Update';

import RestaurantIndex from '../pages/restaurants/Index';
import RestaurantCreate from '../pages/restaurants/Create';
import RestaurantUpdate from '../pages/restaurants/Update';

import CategoryIndex from '../pages/categories/Index';
import CategoryCreate from '../pages/categories/Create';
import CategoryUpdate from '../pages/categories/Update';

import ItemIndex from '../pages/items/Index';
import ItemCreate from '../pages/items/Create';
import ItemUpdate from '../pages/items/Update';

var mainRoutes = [

    {
        path: "/index",
        name: "Dashboard",
        menuName: "Dashboard",
        icon: "fa fa-dashboard",
        component: AdminDashboard,
        layout: "/admin",
        isMenu: true
    },
    {
        path: "/index",
        name: "Dashboard",
        menuName: "Dashboard",
        icon: "fa fa-dashboard",
        component: RestaurantDashboard,
        layout: "/restaurant",
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
        path: "/restaurant/create",
        name: "Restaurant Create",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantCreate,
        layout: "/admin",
        isMenu: false
    },
    {
        path: "/restaurant/edit",
        name: "Restaurant Edit",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantUpdate,
        layout: "/admin",
        isMenu: false
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
        path: "/item/create",
        name: "Item Create",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemCreate,
        layout: "/restaurant",
        isMenu: false
    },
    {
        path: "/item/edit",
        name: "Item Edit",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemUpdate,
        layout: "/restaurant",
        isMenu: false
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
        path: "/category/create",
        name: "Category Create",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryCreate,
        layout: "/admin",
        isMenu: false
    },
    {
        path: "/category/edit",
        name: "Category Edit",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryUpdate,
        layout: "/admin",
        isMenu: false
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