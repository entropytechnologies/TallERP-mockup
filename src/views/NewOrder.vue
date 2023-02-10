<template>
    <div class="bg-light px-4 py-3">
        <h3>New Order</h3>
    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-9">
                <div class="row">
                    <div class="col-4">
                        <div class="card shadow-sm text-center py-3">
                            <div class="card-title">
                               <h4>Customer</h4> 
                            </div>
                            <h4><i class="fa-solid fa-user"></i></h4>
                            <button class="btn btn-light mx-4 m" data-bs-toggle="modal" data-bs-target="#CustomerModal">Add Customer</button>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card shadow-sm text-center py-3">
                            <div class="card-title">
                               <h4>Vehicle</h4> 
                            </div>
                            <h4><i class="fa-solid fa-car"></i></h4>
                            <button class="btn btn-light mx-4" data-bs-toggle="modal" data-bs-target="#VehicleModal">Add Vehicle</button>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card shadow-sm text-center py-3">
                            <div class="card-title">
                               <h4>Service</h4> 
                            </div>
                            <h4><i class="fa-solid fa-calendar-days"></i></h4>
                            <button class="btn btn-light mx-4" data-bs-toggle="modal" data-bs-target="#ServiceModal">Schedule Service</button>
                        </div>
                    </div>
                </div>
                <form class="mt-2">
                    <div class="row">
                        <div class="col-4">
                            <label for="exampleInputEmail1" class="form-label">Number</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled>
                        </div>
                        <div class="col-4">
                            <label for="exampleInputDate1" class="form-label">Date</label>
                            <input type="date" class="form-control" id="exampleInputDate1" aria-describedby="emailHelp" required>
                        </div>
                        <div class="col-4">
                            <label for="exampleInputDate1" class="form-label">Location</label>
                            <input type="text" class="form-control" id="exampleInputDate1" aria-describedby="emailHelp" required>
                        </div>
                    </div>
                    <label for="exampleInputEmail1" class="form-label">Service Notes</label>
                    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                    <table class="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col">SKU</th>
                                <th scope="col">Description</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Price Level</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Disc ($)</th>
                                <th scope="col">Disc (%)</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Tax</th>
                                <th scope="col">In Stock</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>

                </form>
            </div>
            <div class="col-3">
                <div>
                    <div class="card shadow-sm">
                        <div class="container bg-light">
                            <h4>Order Detail</h4>
                        </div>
                        <div class="card-content mt-2 mx-2">
                            <p>Subtotal</p>
                            <p>Discount</p>
                            <p>Text</p>
                            <hr>
                            <p class="fw-bold">Total</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="CustomerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content px-4 py-3">
                        <div class="row g-2">
                            <div class="col-4">
                                <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-user bg-light mx-2"></i>Customer Modal</h5>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" placeholder="Search...">
                            </div>
                            <div class="col-3 d-flex justify-content-end">
                                <button class="btn btn-primary" data-bs-target="#QuickAddCustomer" data-bs-toggle="modal">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    New Customer
                                </button>
                            </div>
                        </div>
                        <hr>
                    <div class="modal-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Last Service</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>555-111</td>
                                    <td>testemail@gmail.com</td>
                                    <td>Feb, 30, 2022</td>
                                    <td>
                                        <button class="btn btn-primary">
                                            <i class="fa-solid fa-circle-plus"></i>
                                            Choose
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>555-111</td>
                                    <td>testemail@gmail.com</td>
                                    <td>Feb, 30, 2022</td>
                                    <td>
                                        <button class="btn btn-primary">
                                            <i class="fa-solid fa-circle-plus"></i>
                                            Choose
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>555-111</td>
                                    <td>testemail@gmail.com</td>
                                    <td>Feb, 30, 2022</td>
                                    <td>
                                        <button class="btn btn-primary">
                                            <i class="fa-solid fa-circle-plus"></i>
                                            Choose
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="VehicleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Vehicle Modal</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="ServiceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Service Modal</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>           
    </div>
    <div class="modal fade" id="QuickAddCustomer" aria-hidden="true" aria-labelledby="QuickAddCustomer" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel2"><i class="fa-solid fa-user mx-1"></i>Quick Add Customer</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div class="row">
                        <div class="col-4">
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">Customer Type</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Customer Type</option>
                                    <option value="1">Person</option>
                                    <option value="2">Company</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="FirstName" placeholder="First Name">
                            </div>
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">Address</label>
                                <input type="text" class="form-control" id="Address" placeholder="Address">
                            </div>
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">Country</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Country</option>
                                    <option value="1">USA</option>
                                    <option value="2">Canada</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">Company Name</label>
                                <input type="text" class="form-control" id="CompanyName" placeholder="Company Name">
                            </div>
                            <div class="mb-3">
                                <label for="LastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="LastName" placeholder="Last Name">
                            </div>
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">City</label>
                                <input type="text" class="form-control" id="City" placeholder="City">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">Phone</label>
                                <input type="text" class="form-control" id="Phone" placeholder="Phone">
                            </div>
                            <div class="mb-3">
                                <label for="FirstName" class="form-label">Email</label>
                                <input type="text" class="form-control" id="Email" placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <label for="ZipCode" class="form-label">ZIP / Postal Code</label>
                                <input type="text" class="form-control" id="ZipCode" placeholder="ZIP / Postal Code">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" data-bs-target="#CustomerModal" data-bs-toggle="modal">Back to Add Customer</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'
import ModalComponent from './component/Modal.vue'

export default {
    components: { ModalComponent },
    setup() {
        const OrderDetails = ref([]);
        const CustomerModal = true;
        const VehicleModal = false;
        const ServiceModal = false;

        const toggleCustomerModal = () => {
            CustomerModal = !CustomerModal;
        };
        const toggleVehicleModal = () => {
            VehicleModal = !VehicleModal;
        };
        const toggleServiceModal = () => {
            ServiceModal = !ServiceModal;
        };

        return {
            OrderDetails,
            toggleCustomerModal,
            toggleVehicleModal,
            toggleServiceModal,
            CustomerModal,
            VehicleModal,
            ServiceModal
        }
    }
}
</script>

<style>

</style>