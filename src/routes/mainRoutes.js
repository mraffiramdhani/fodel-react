// import Register from "pages/auth/Register.js";
import Login from "../pages/auth/Login";

import AdminDashboard from "../pages/admin/Dashboard";
import RestaurantDashboard from "../pages/restaurants/Dashboard";

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
        role: "administrator",
        isMenu: true
    },
    {
        path: "/index",
        name: "Dashboard",
        menuName: "Dashboard",
        icon: "fa fa-dashboard",
        component: RestaurantDashboard,
        layout: "/restaurant",
        role: "restaurant",
        isMenu: true
    },
    {
        path: "/user/index",
        name: "User Management",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserIndex,
        layout: "/admin",
        role: "administrator",
        isMenu: true
    },
    {
        path: "/user/create",
        name: "User Create",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserCreate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/user/edit",
        params: ['/:id'],
        name: "User Edit",
        menuName: "Users",
        icon: "fa fa-users",
        component: UserUpdate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/restaurant/index",
        name: "Restaurant Management",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantIndex,
        layout: "/admin",
        role: "administrator",
        isMenu: true
    },
    {
        path: "/restaurant/create",
        name: "Restaurant Create",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantCreate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/restaurant/edit",
        params: ['/:id'],
        name: "Restaurant Edit",
        menuName: "Restaurants",
        icon: "fa fa-briefcase",
        component: RestaurantUpdate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/item/index",
        name: "Item Management",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemIndex,
        layout: "/admin",
        role: "administrator",
        isMenu: true
    },
    {
        path: "/item/create",
        name: "Item Create",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemCreate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/item/edit",
        params: ['/:id'],
        name: "Item Edit",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemUpdate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/item/index",
        name: "Item Management",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemIndex,
        layout: "/restaurant",
        role: "restaurant",
        isMenu: true
    },
    {
        path: "/item/create",
        name: "Item Create",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemCreate,
        layout: "/restaurant",
        role: "restaurant",
        isMenu: false
    },
    {
        path: "/item/edit",
        params: ['/:id'],
        name: "Item Edit",
        menuName: "Items",
        icon: "fa fa-cutlery",
        component: ItemUpdate,
        layout: "/restaurant",
        role: "restaurant",
        isMenu: false
    },
    {
        path: "/category/index",
        name: "Category Management",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryIndex,
        layout: "/admin",
        role: "administrator",
        isMenu: true
    },
    {
        path: "/category/create",
        name: "Category Create",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryCreate,
        layout: "/admin",
        role: "administrator",
        isMenu: false
    },
    {
        path: "/category/edit",
        params: ['/:id'],
        name: "Category Edit",
        menuName: "Categories",
        icon: "fa fa-list-alt",
        component: CategoryUpdate,
        layout: "/admin",
        role: "administrator",
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