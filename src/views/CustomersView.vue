<template>
    <div class="container mt-4 text-center">
        <div class="row g-4">
            <div class="col-lg-2">
                <h2>Customers</h2>
            </div>
            <div class="col-lg-7">
                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control bg-light dropdown-toggle" id="exampleInputEmail1" data-bs-toggle="dropdown" aria-describedby="emailHelp" placeholder="Name, phone, lic, plate, etc...">
                            <ul class="dropdown-menu">
                                <li v-for="customer in customers" :key="customer.id"><router-link class="dropdown-item" href="/customer">{{customer.firstName + ' ' + customer.lastName}}</router-link></li>
                            </ul>
                    </div>
                </form>    
            </div>
            <div class="col-lg-3">
                <RouterLink class="btn btn-secondary" to="/">Create new Customer</RouterLink>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col-2">First Name</th>
                    <th scope="col-2">Last Name</th>
                    <th scope="col-2">Phone</th>
                    <th scope="col-2">Address</th>
                    <th scope="col-1">Active Vehicle</th>
                    <th scope="col-1">Active Storage</th>
                    <th scope="col-2">Customer Since</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>{{customer.firstName}}</td>
                    <td>{{customer.lastName}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.address}}</td>
                    <td>{{customer.activeVehicle}}</td>
                    <td>{{customer.activeStorage}}</td>
                    <td>{{customer.customerSince}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from "vue"
import customers from "../assets/js/customersData.json"

export default {
    setup() {
        customers

        return {
            customers
        }
    }
}
</script>

<style>

</style>