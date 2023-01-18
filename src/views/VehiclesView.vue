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
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Vehicle</button>
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
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New Vehicle</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!--------Modal content------->
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-sm-8">
                            <form action="submit">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlText" class="form-label">Year</label>
                                            <input type="number" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Year">
                                        </div>                    
                                    </div>
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlText" class="form-label">Make</label>
                                            <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Make">
                                        </div>    
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlText" class="form-label">Model</label>
                                        <input type="text" class="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Model">
                                    </div>
                                    <div class="col-4">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">License Plate</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="License....">
                                        </div>                    
                                    </div>
                                    <div class="col-8">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Customer</label>
                                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Customer">
                                        </div>    
                                    </div>                                                                       
                                </div>
                                <button class="btn btn-secondary form-control">Save Vehicle</button>    
                            </form>
                        </div>
                        <div class="col-lg-12 col-sm-8">
                            <hr>
                            <h5>Image</h5>
                            <div class="container bg-light mt-3 shadow-sm text-center" style="height:290px">
                                <h4 class="mb-4 py-4">THIS MODEL HAS NO IMAGE</h4>
                                <div class="container mt-2">
                                    <h1 class="btn btn-lg addButton px-3 shadow-sm" style="font-size:30px">+</h1>
                                    <p style="font-size:30px">Add Image</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            <!------------------->
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
