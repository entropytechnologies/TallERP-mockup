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
                                <li v-for="customer in customers" :key="customer.id"><router-link class="dropdown-item" to="/customer">{{customer.firstName + ' ' + customer.lastName}}</router-link></li>
                            </ul>
                    </div>
                </form>    
            </div>
            <div class="col-lg-3">
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Create new Customer</button>
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
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">New Customer</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container mt-4">
                    <div class="row mt-4">
                        <div class="col-lg-12 col-sm-8">
                            <form action="submit">
                                <div class="row">
                                    <h3>New Customer</h3>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlText" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="First Name">
                                        </div>                    
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlText" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Last Name">
                                        </div>    
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlText" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Address">
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ADITIONAL LABEL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                                        </div>                    
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">ADITIONAL LABEL</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="">
                                        </div>    
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                            <input type="text" class="form-control" id="exampleFormControlInput1" aria-describedby="emailHelp" placeholder="Phone">
                                        </div>                    
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="exampleFormControlEmail" aria-describedby="emailHelp" placeholder="Email">
                                        </div>    
                                    </div>                                                                            
                                </div>
                                <button class="btn btn-secondary form-control">Create Customer</button>    
                            </form>
                        </div>
                        <div class="col-lg-12 col-sm-8">
                            <h3>Garage</h3>
                            <div class="container bg-light mt-3 py-4 shadow-sm text-center">
                                <h4 class="mb-4">THIS CUSTOMER HAS NO VEHICLES</h4>
                                <div class="container mt-2">
                                    <h1 class="btn btn-lg addButton px-3 shadow-sm" style="font-size:30px">+</h1>
                                    <p style="font-size:30px">Add Vehicle</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
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