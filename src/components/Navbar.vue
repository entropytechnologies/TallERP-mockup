<template>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/home">Home</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Customers
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/customers">Customers List</router-link></li>
                            <li><router-link class="dropdown-item" to="/customer">Customer Page</router-link></li>
                            <li><router-link class="dropdown-item" to="/newcustomer">New Customer</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Vehicles
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/vehicles">Vehicle List</router-link></li>
                            <li><router-link class="dropdown-item" to="/newvehicle">New Vehicle</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sales
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/sales">Sales List</router-link></li>
                            <li><router-link class="dropdown-item" to="/salesorder">Sales Order</router-link></li>
                            <li><router-link class="dropdown-item" to="/newsalesorder">New Sales Order</router-link></li>
                            <li><router-link class="dropdown-item" to="/neworder">New Order Page</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/service">Service</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/tirestorage">Tire Storage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/shop">Shop</router-link>
                    </li>                    
                </ul>
            </div>
        </div>
    </nav>    
</template>

<script>
export default {

}
</script>

<style>

</style>