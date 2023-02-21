<template>
    <div class="bg-light px-4 py-3">
        <h3>New Order Plus</h3>
    </div>
    <div class="container mt-4">
        <div class="row">
            <div class="col-9">
                <div class="row">
                    <div class="col-4">
                        <div class="card shadow-sm">
                            <div v-if="customerSelected">
                                <div class="card-header">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="align-self-start">Customer</h5>
                                        <button class="page-title-right btn btn-outline-primary btn-sm">Edit</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Name:</p>
                                        <p class="align-self-center" style="max-width: 150px">Parvinder Singh</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Email:</p>
                                        <p class="align-self-center" style="max-width: 150px">psingh@email.com</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Phone:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">12345678</p>
                                    </div>                                    
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Address:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">123 Mississauga Rd. Mississau...</p>
                                    </div>                                 
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Customer since:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">2020</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Qty of services:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">2</p>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="card-body text-center">
                                    <div class="card-title">
                                        <h5>Customer</h5> 
                                    </div>
                                    <h4><i class="fa-solid fa-user"></i></h4>
                                    <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#CustomerModal">Add Customer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card shadow-sm text-center">
                            <div v-if="vehicleSelected">
                                <div class="card-header">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <h5 class="align-self-start">Vehicle</h5>
                                        <button class="page-title-right btn btn-outline-primary btn-sm">Edit</button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Year:</p>
                                        <p class="align-self-center" style="max-width: 150px">2018</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Make:</p>
                                        <p class="align-self-center" style="max-width: 150px">Honda</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Model:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">Civic</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Color:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">Black</p>
                                    </div>                                    
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Lic.Plate:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">CCFR 223</p>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <p class="align-self-start text-primary">Last Service:</p>
                                        <p class="align-self-end text-truncate" style="max-width: 150px">Jun 27, 2</p>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="card-body text-center">
                                    <div class="card-title">
                                        <h5>Vehicle</h5> 
                                    </div>
                                    <h4><i class="fa-solid fa-user"></i></h4>
                                    <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#VehicleModal">Add Vehicle</button>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card shadow-sm text-center">
                            <div class="card-body">
                                <div class="card-title">
                                <h5>Service</h5> 
                                </div>
                                <h5><i class="fa-solid fa-calendar-days"></i></h5>
                                <button class="btn btn-light mx-4" data-bs-toggle="modal" data-bs-target="#ServiceModal">Schedule Service</button>
                            </div>
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
                                <th scope="col">Price Level</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Disc ($)</th>
                                <th scope="col">Disc (%)</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Tax</th>
                                <th scope="col">In Stock</th>
                            </tr>
                        </thead>
                        <tbody>        
                            <tr v-if="productSelected">
                                <td scope="row">50649</td>
                                <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                <td>Retail</td>
                                <td>285.00</td>
                                <td>0</td>
                                <td>0</td>
                                <td>1</td>
                                <td>285.00 $</td>
                                <td></td>
                                <td>20</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="col-12 text-center">
                            <button class="btn btn-primary shadow-sm" data-bs-toggle="modal" data-bs-target="#addProductModal">
                                <i class="fa-solid fa-circle-plus me-1"></i>
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- Card Detail -->
            <div class="col-3">
                <div>
                    <div class="card shadow-sm">
                        <div class="card-header">
                            <h5>Order Detail</h5>
                        </div>
                        <div class="card-body mt-2">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="align-self-start">Subtotal:</p>
                                <p class="align-self-center" style="max-width: 150px">0.00</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="align-self-start">Discount:</p>
                                <p class="align-self-center text-success" style="max-width: 150px">0.00</p>
                            </div>
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="align-self-start">Tax:</p>
                                <p class="align-self-center" style="max-width: 150px">0.00</p>
                            </div>                                                             
                            <hr>
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="align-self-start">Total:</h6>
                                <h6 class="align-self-center" style="max-width: 150px">0.00</h6>
                            </div>     
                        </div>
                        <div class="text-center my-2">
                            <button class="btn btn-primary">
                                <i class="fa-solid fa-save me-1"></i>
                                Save Order
                            </button>
                            <button class="btn btn-outline-secondary ms-2">
                                <i class="fa-solid fa-trash-can me-1"></i>
                                Cancel
                            </button>
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
                                <button class="btn btn-primary" data-bs-target="#newCustomer">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    New Customer
                                </button>
                            </div>
                        </div>
                        <hr>
                    <div class="modal-body">
                        <!-----Customer Tabs----->
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#existingCustomer" type="button" role="tab" aria-controls="existingCustomer" aria-selected="true">Existing Customer</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#newCustomer" type="button" role="tab" aria-controls="newCustomer" aria-selected="false">New Customer</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="existingCustomer" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
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
                                                    <button class="btn btn-primary" @click="toggleCustomerSelected" data-bs-toggle="modal">
                                                        <i class="fa-solid fa-circle-plus"></i>
                                                        Choose
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="newCustomer" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
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
                                        <hr>
                                        <div class="text-center">
                                            <button type="button" class="btn btn-primary me-2">
                                                <i class="fa-solid fa-floppy-disk me-1"></i>
                                                Save Customer
                                            </button>
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                                <i class="fa-solid fa-trash me-1"></i>
                                                Close
                                            </button>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        <!-----Customer Tabs------>
                    </div>  
                </div>
            </div>
        </div>
        <!-----Vehicle Modal------>
        <div class="modal fade" id="VehicleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="row g-2">
                            <div class="col-4">
                                <h5 class="modal-title" id="exampleModalLabel"><i class="fa-solid fa-user bg-light mx-2"></i>Vehicle Modal</h5>
                            </div>
                            <div class="col-5">
                                <input type="text" class="form-control" placeholder="Search...">
                            </div>
                            <div class="col-3 d-flex justify-content-end">
                                <button class="btn btn-primary" data-bs-target="#QuickAddVehicle" data-bs-toggle="modal">
                                    <i class="fa-solid fa-circle-plus"></i>
                                    Quick Add Vehicle
                                </button>
                            </div>
                        </div>
                        <hr>

                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#customersVehicle" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Customer's Vehicle</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#newVehicle" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">New Vehicle</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="customersVehicle" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Year</th>
                                            <th scope="col">Make</th>
                                            <th scope="col">Model</th>
                                            <th scope="col">Lic.Plate</th>
                                            <th scope="col">VIN</th>
                                            <th scope="col">Last Service</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1985</td>
                                            <td>Delorean</td>
                                            <td>ABC123</td>
                                            <td>ABC123</td>
                                            <td>5TEWN72N63Z275910</td>
                                            <td>Jun 27, 2019</td>
                                            <td>
                                                <button class="btn btn-primary" data-bs-toggle="modal" @click="toggleVehicleSelected">
                                                    <i class="fa-solid fa-circle-plus"></i>
                                                    Choose
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>       

                            </div>
                            <div class="tab-pane fade" id="newVehicle" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                <div class="modal-body">
                                    <form action="">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Year</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Year</option>
                                                        <option value="1">2022</option>
                                                        <option value="2">2021</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Color</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Color</option>
                                                        <option value="1">Black</option>
                                                        <option value="2">White</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Setup</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Squared / Staggered</option>
                                                        <option value="1">Squared</option>
                                                        <option value="2">Staggered</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Wheels</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Wheels</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">Canada</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Make</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Make</option>
                                                        <option value="1">HONDA</option>
                                                        <option value="2">...</option>
                                                    </select>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Lic. Plate</label>
                                                    <input type="text" class="form-control" placeholder="Lic. Plate">    
                                                </div>
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Front Tire Size</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Make</option>
                                                        <option value="1">HONDA</option>
                                                        <option value="2">...</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="mb-3">
                                                    <label for="FirstName" class="form-label">Model</label>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Select Make</option>
                                                        <option value="1">HONDA</option>
                                                        <option value="2">...</option>
                                                    </select>
                                                </div>


                                            </div>
                                        </div>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-primary me-2">
                                            <i class="fa-solid fa-floppy-disk me-1"></i>
                                            Save Customer
                                        </button>
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                            <i class="fa-solid fa-trash me-1"></i>
                                            Close
                                        </button>
                                    </div>    
                                </div>
                            </div>
                        </div>                                 
                    </div>
                </div>
            </div>
        </div>
        <!-----Service Modal------>
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

    <!-----Quick Add Service------>
    <div class="modal fade" id="QuickAddService" aria-hidden="true" aria-labelledby="QuickAddService" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel2"><i class="fa-solid fa-user mx-1"></i>Quick Add Vehicle</h5>
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
                    <hr>
                    <div class="text-center">
                        <button type="button" class="btn btn-primary me-2">
                            <i class="fa-solid fa-floppy-disk me-1"></i>
                            Save Vehicle
                        </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            <i class="fa-solid fa-trash me-1"></i>
                            Close
                        </button>
                    </div>                         
                </div>
            </div>
        </div>
    </div>
    <!-----Add Product------>
    <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    <i class="fa-solid fa-cart-shopping me-1"></i>
                    Add Product
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">      
                <ul class="nav nav-pills nav-justified" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#tire-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Tire</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#wheels-tab-pane" type="button" role="tab" aria-controls="wheels-tab-pane" aria-selected="false">Wheels</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#hardware-tab-pane" type="button" role="tab" aria-controls="hardware-tab-pane" aria-selected="false">Hardware</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#service-tab-pane" type="button" role="tab" aria-controls="service-tab-pane" aria-selected="false">Service</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <!---Tire Tab Pane---->
                    <div class="tab-pane fade show active" id="tire-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <div class="modal-body">
                            <ul class="nav nav-tabs justify-content-center" id="secondaryTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="searchBySize-tab" data-bs-toggle="tab" data-bs-target="#searcBySize-tab-pane" type="button" role="tab" aria-controls="SearchBySize-tab-pane" aria-selected="true">
                                        <img src="https://tirebasics.com/img/single_tire.png" alt="" srcset="">
                                        Search By Tire Size
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="SearchByVehicle-tab" data-bs-toggle="tab" data-bs-target="#searchByVehicle-tab-pane" type="button" role="tab" aria-controls="SearchByVehicle-tab-pane" aria-selected="false">
                                        <img src="https://tirebasics.com/img/single_vehicle.png" alt="" srcset="">
                                        Search By Vehicle
                                    </button>
                                </li>
                            </ul>    
                            <div class="tab-content" id="secondaryTabContent">
                                <div class="tab-pane fade show active" id="searcBySize-tab-pane" role="tabpanel" aria-labelledby="searcBySize-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                <div class="row">
                                    <div class="col-3">
                                        <div class="mb-3">
                                            <label for="quickSearch" class="form-label">Quick Search</label>
                                            <input type="text" class="form-control" id="quickSearch" >
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Tread Width</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Width</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="115">115</option>
                                                <option value="12">12</option>
                                                <option value="125">125</option>
                                                <option value="13">13</option>
                                                <option value="135">135</option>
                                                <option value="14">14</option>
                                                <option value="145">145</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Aspect Ratio</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Ratio</option>
                                                <option value="1">111</option>
                                                <option value="2">222</option>
                                                <option value="3">333</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="rimSize" class="form-label">Rim Size</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Rim Size</option>
                                                <option value="1">111</option>
                                                <option value="2">222</option>
                                                <option value="3">333</option>
                                            </select>    
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="rimSize" class="form-label">Tire Type</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Type</option>
                                                <option value="all_season">All Season</option>
                                                <option value="all_weather">All Weather</option>
                                                <option value="service">SERVICE</option>
                                                <option value="summer">Summer</option>
                                                <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                <option value="winter">Winter</option>
                                            </select>    
                                        </div>
                                    </div>
                                    <div class="col-1">
                                        <label for="rimSize" class="form-label">Search</label>
                                        <button class="btn btn-primary form-control" id="searchButton">
                                            <i class="fa-solid fa-search"></i>
                                        </button>
                                    </div>
                                    <div class="col-2">
                                        <a href="#" class="text-primary" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">Expanded Search</a>
                                    </div>
                                </div>
                                <div class="row collapse mt-2" id="collapseWidthExample">
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Speed Rating</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Rating</option>
                                                <option value="1">111</option>
                                                <option value="2">222</option>
                                                <option value="3">333</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Load Index</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Load Index</option>
                                                <option value="1">111</option>
                                                <option value="2">222</option>
                                                <option value="3">333</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Brand</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Brand</option>
                                                <option value="aeolus">AEOLUS</option>
                                                <option value="antares">ANTARES</option>
                                                <option value="bfgoodrich">BFGOODRICH</option>
                                                <option value="bridgestone">BRIDGESTONE</option>
                                                <option value="carlisle">CARLISLE</option>
                                                <option value="continental">CONTINENTAL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Product Line</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Model</option>
                                                <option value="1">111</option>
                                                <option value="2">222</option>
                                                <option value="3">333</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-2">
                                        <div class="mb-3">
                                            <label for="brand" class="form-label">Tire Sub Type</label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Select Model</option>
                                                <option value="1">111</option>
                                                <option value="2">222</option>
                                                <option value="3">333</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="searchByVehicle-tab-pane" role="tabpanel" aria-labelledby="SearchByVehicle-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Year</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Year</option>
                                                            <option value="10">2023</option>
                                                            <option value="11">2022</option>
                                                            <option value="115">2021</option>
                                                            <option value="12">2020</option>
                                                            <option value="125">2019</option>
                                                            <option value="13">2018</option>
                                                            <option value="135">2017</option>
                                                            <option value="14">2016</option>
                                                            <option value="145">2015</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Make</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Make</option>
                                                            <option value="ACURA">ACURA</option>
                                                            <option value="ALFA ROMEO">ALFA ROMEO</option>
                                                            <option value="ASTON MARTIN">ASTON MARTIN</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Model</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Model</option>
                                                            <option value="ILX">ILX</option>
                                                            <option value="MDX">MDX</option>
                                                            <option value="NSX">NSX</option>
                                                            <option value="RDX">RDX</option>
                                                            <option value="TLX">TLX</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Option</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Option</option>
                                                            <option value="all_season">BASE</option>
                                                            <option value="all_season">A-SPEC</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Tire Type</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Tire Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">Service</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Brand</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Brand</option>
                                                            <option value="AEOLUS">AEOLUS</option>
                                                            <option value="ANTARES">ANTARES</option>
                                                            <option value="BRIDGESTONE">BRIDGESTONE</option>
                                                            <option value="CARLISLE">CARLISLE</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-primary form-control" id="searchButton">
                                                        <i class="fa-solid fa-search me-1"></i>
                                                        Search
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-secondary form-control" id="searchButton">
                                                        <i class="fa-solid fa-trash me-1"></i>
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
    
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <!-- Wheels Tab -->
                    <div class="tab-pane fade" id="wheels-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="modal-body">
                            <ul class="nav nav-tabs justify-content-center" id="thirdTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="searchWheelBySize-tab" data-bs-toggle="tab" data-bs-target="#searchWheelBySize-tab-pane" type="button" role="tab" aria-controls="SearchWheelBySize-tab-pane" aria-selected="true">
                                        <img src="https://tirebasics.com/img/single_tire.png" alt="" srcset="">
                                        Search By Tire Size
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="SearchWheelByVehicle-tab" data-bs-toggle="tab" data-bs-target="#searchWheelByVehicle-tab-pane" type="button" role="tab" aria-controls="SearchWheelByVehicle-tab-pane" aria-selected="false">
                                        <img src="https://tirebasics.com/img/single_vehicle.png">
                                        Search By Vehicle
                                    </button>
                                </li>
                            </ul>    
                            <div class="tab-content" id="thirdTabContent">
                                <div class="tab-pane fade show active" id="searchWheelBySize-tab-pane" role="tabpanel" aria-labelledby="searchWheelBySize-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="quickSearch" class="form-label">Quick Search</label>
                                                        <input type="text" class="form-control" id="quickSearch" >
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Diameter</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Diameter</option>
                                                            <option value="10">10</option>
                                                            <option value="11">12</option>
                                                            <option value="115">14</option>
                                                            <option value="115">15</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Width</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Ratio</option>
                                                            <option value="1">111</option>
                                                            <option value="2">222</option>
                                                            <option value="3">333</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Offset</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Rim Size</option>
                                                            <option value="1">111</option>
                                                            <option value="2">222</option>
                                                            <option value="3">333</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Bolt Pattern</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Hub Bore</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Wheel Type</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Brand</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-primary form-control" id="searchButton">
                                                        <i class="fa-solid fa-search me-1"></i>
                                                        Search
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-secondary form-control" id="searchButton">
                                                        <i class="fa-solid fa-trash me-1"></i>
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="searchWheelByVehicle-tab-pane" role="tabpanel" aria-labelledby="SearchWheelByVehicle-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Year</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Year</option>
                                                            <option value="10">2023</option>
                                                            <option value="11">2022</option>
                                                            <option value="115">2021</option>
                                                            <option value="12">2020</option>
                                                            <option value="125">2019</option>
                                                            <option value="13">2018</option>
                                                            <option value="135">2017</option>
                                                            <option value="14">2016</option>
                                                            <option value="145">2015</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Make</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Make</option>
                                                            <option value="ACURA">ACURA</option>
                                                            <option value="ALFA ROMEO">ALFA ROMEO</option>
                                                            <option value="ASTON MARTIN">ASTON MARTIN</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Model</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Model</option>
                                                            <option value="ILX">ILX</option>
                                                            <option value="MDX">MDX</option>
                                                            <option value="NSX">NSX</option>
                                                            <option value="RDX">RDX</option>
                                                            <option value="TLX">TLX</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Option</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Option</option>
                                                            <option value="all_season">BASE</option>
                                                            <option value="all_season">A-SPEC</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Wheel Type</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Wheel Type</option>
                                                            <option value="all_season">Alloy</option>
                                                            <option value="all_weather">All Steel</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Brand</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Brand</option>
                                                            <option value="AEOLUS">ADVENTUS</option>
                                                            <option value="ANTARES">AKITA</option>
                                                            <option value="BRIDGESTONE">ART</option>
                                                            <option value="CARLISLE">ATX</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-primary form-control" id="searchButton">
                                                        <i class="fa-solid fa-search me-1"></i>
                                                        Search
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-secondary form-control" id="searchButton">
                                                        <i class="fa-solid fa-trash me-1"></i>
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
    
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <!--Hardware Tab -->
                    <div class="tab-pane fade" id="hardware-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div class="modal-body">
                            <ul class="nav nav-tabs justify-content-center b-1" id="thirdTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="searchHardwareByNuts-tab" data-bs-toggle="tab" data-bs-target="#searchHardwareByNuts-tab-pane" type="button" role="tab" aria-controls="searchHardwareByNuts-tab-pane" aria-selected="true">
                                        <img src="https://tirebasics.com/img/screw_cropped.png" class="img-fluid" style="height:50px" alt="" srcset="">
                                        Nuts & Bolts
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="searchWheelByHubRings-tab" data-bs-toggle="tab" data-bs-target="#searchHardwareByHubRings-tab-pane" type="button" role="tab" aria-controls="#searchWheelByHubRings-tab-pane" aria-selected="false">
                                        <img src="https://tirebasics.com/img/hub_rings.png" class="img-fluid" style="height:50px">
                                        Search By Hub Rings
                                    </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="searchHardwareByTpms-tab" data-bs-toggle="tab" data-bs-target="#searchHardwareByTmps-tab-pane" type="button" role="tab" aria-controls="SearchWheelByVehicle-tab-pane" aria-selected="false">
                                        <img src="https://tirebasics.com/img/tpms.png" class="img-fluid" style="height:50px">
                                        Search By TPMS
                                    </button>
                                </li>
                            </ul>    
                            <div class="tab-content" id="fourthTabContent">
                                <div class="tab-pane fade show active" id="searchHardwareByNuts-tab-pane" role="tabpanel" aria-labelledby="searchHardwareByNuts-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="quickSearch" class="form-label">Quick Search</label>
                                                        <input type="text" class="form-control" id="quickSearch" >
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Diameter</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Diameter</option>
                                                            <option value="10">10</option>
                                                            <option value="11">12</option>
                                                            <option value="115">14</option>
                                                            <option value="115">15</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Width</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Ratio</option>
                                                            <option value="1">111</option>
                                                            <option value="2">222</option>
                                                            <option value="3">333</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Offset</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Rim Size</option>
                                                            <option value="1">111</option>
                                                            <option value="2">222</option>
                                                            <option value="3">333</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Bolt Pattern</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Hub Bore</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Wheel Type</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Brand</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Type</option>
                                                            <option value="all_season">All Season</option>
                                                            <option value="all_weather">All Weather</option>
                                                            <option value="service">SERVICE</option>
                                                            <option value="summer">Summer</option>
                                                            <option value="temporary/compact_spare">Temporary/Compact Spare</option>
                                                            <option value="winter">Winter</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-primary form-control" id="searchButton">
                                                        <i class="fa-solid fa-search me-1"></i>
                                                        Search
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-secondary form-control" id="searchButton">
                                                        <i class="fa-solid fa-trash me-1"></i>
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="searchHardwareByHubRings-tab-pane" role="tabpanel" aria-labelledby="SearchHardwareByHubRings-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Year</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Year</option>
                                                            <option value="10">2023</option>
                                                            <option value="11">2022</option>
                                                            <option value="115">2021</option>
                                                            <option value="12">2020</option>
                                                            <option value="125">2019</option>
                                                            <option value="13">2018</option>
                                                            <option value="135">2017</option>
                                                            <option value="14">2016</option>
                                                            <option value="145">2015</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Make</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Make</option>
                                                            <option value="ACURA">ACURA</option>
                                                            <option value="ALFA ROMEO">ALFA ROMEO</option>
                                                            <option value="ASTON MARTIN">ASTON MARTIN</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Model</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Model</option>
                                                            <option value="ILX">ILX</option>
                                                            <option value="MDX">MDX</option>
                                                            <option value="NSX">NSX</option>
                                                            <option value="RDX">RDX</option>
                                                            <option value="TLX">TLX</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Option</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Option</option>
                                                            <option value="all_season">BASE</option>
                                                            <option value="all_season">A-SPEC</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Wheel Type</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Wheel Type</option>
                                                            <option value="all_season">Alloy</option>
                                                            <option value="all_weather">All Steel</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div class="mb-3">
                                                        <label for="rimSize" class="form-label">Brand</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Brand</option>
                                                            <option value="AEOLUS">ADVENTUS</option>
                                                            <option value="ANTARES">AKITA</option>
                                                            <option value="BRIDGESTONE">ART</option>
                                                            <option value="CARLISLE">ATX</option>
                                                        </select>    
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-primary form-control" id="searchButton">
                                                        <i class="fa-solid fa-search me-1"></i>
                                                        Search
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-secondary form-control" id="searchButton">
                                                        <i class="fa-solid fa-trash me-1"></i>
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
    
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>                                    
                                </div>
                                <div class="tab-pane fade" id="searchHardwareByTmps-tab-pane" role="tabpanel" aria-labelledby="SearchHardwareByTmps-tab" tabindex="0">
                                    <div class="modal-body">
                                        <form>
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Search</label>
                                                        <input class="form-control" aria-label="Default select example">
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="mb-3">
                                                        <label for="brand" class="form-label">Brand/Model</label>
                                                        <select class="form-select" aria-label="Default select example">
                                                            <option selected>Select Brand</option>
                                                            <option value="ACURA">AUTEL</option>
                                                            <option value="ALFA ROMEO">CARLISLE</option>
                                                            <option value="ASTON MARTIN">Coyote</option>
                                                            <option value="ASTON MARTIN">DAI</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-primary form-control" id="searchButton">
                                                        <i class="fa-solid fa-search me-1"></i>
                                                        Search
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn-secondary form-control" id="searchButton">
                                                        <i class="fa-solid fa-trash me-1"></i>
                                                        Clear
                                                    </button>
                                                </div>
                                            </div>
    
                                        </form>
                                        <hr>
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Sku</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">OEM</th>
                                                    <th scope="col">Treadwear</th>
                                                    <th scope="col">Hazzard</th>
                                                    <th scope="col">MSRP</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Promo</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">QTY</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">50649</th>
                                                    <td class="text-truncate">215/50R17 MICHELIN X-ICE SNOW 95H XL</td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>60.000 km</td>
                                                    <td>285.00</td>
                                                    <td>279.99 $</td>
                                                    <td class="text-success"></td>
                                                    <td>20</td>
                                                    <td>
                                                        <input type="number" class="form-control" style="max-width:70px">
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-primary" @click="toggleProductSelected" data-bs-toggle="modal">
                                                            <i class="fa-solid fa-plus"></i>
                                                        </button>
                                                    </td>    
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>                                    
                                </div>                                     
                            </div>                                
                        </div>

                    </div>
                    <div class="tab-pane fade" id="service-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">


                    </div>
                </div>

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
        const customerSelected = ref(false);
        const vehicleSelected = ref(false);
        const productSelected = ref(false);

        const toggleCustomerSelected = () => {
            customerSelected.value = !customerSelected.value;
        };
        const toggleVehicleSelected = () => {
            vehicleSelected.value = !vehicleSelected.value;
        };
        const toggleProductSelected = () => {
            productSelected.value = !productSelected.value;
        };

        return {
            customerSelected,
            vehicleSelected,
            productSelected,
            toggleCustomerSelected,
            toggleVehicleSelected,
            toggleProductSelected
        }
    }
}
</script>