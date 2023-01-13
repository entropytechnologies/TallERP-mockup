<template>
    <div class="container mt-4 text-center">
        <div class="row g-4">
            <div class="col-lg-2">
                <h2>Vehicles</h2>
            </div>
            <div class="col-lg-8">
                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Customer, license, plate, phone, etc...">
                    </div>
                </form>    
            </div>
            <div class="col-lg-2">
                <RouterLink class="btn btn-secondary" to="/newvehicle">Add Vehicle</RouterLink>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col-2">Year</th>
                    <th scope="col-2">Make</th>
                    <th scope="col-2">Model</th>
                    <th scope="col-2">License Plate</th>
                    <th scope="col-1">Customer</th>
                    <th scope="col-1">Scheduled Service</th>
                    <th scope="col-2">Last Service</th>
                </tr>
            </thead>
            <tbody>
                <!---<tr v-for="customer in customers" :key="customer.id">
                    <td>{{customer.firstName}}</td>
                    <td>{{customer.lastName}}</td>
                    <td>{{customer.phone}}</td>
                    <td>{{customer.address}}</td>
                    <td>{{customer.activeVehicle}}</td>
                    <td>{{customer.activeStorage}}</td>
                    <td>{{customer.customerSince}}</td>
                </tr>---->
            </tbody>
        </table>
    </div>
</template>

<script>
import sales from '../assets/js/salesData.json'
export default {
    setup() {
        sales

        return {
            sales
        }
    }
}
</script>

<style>

</style>
