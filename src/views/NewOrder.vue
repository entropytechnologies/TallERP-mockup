<template>
    <div class="bg-light px-4 py-3">
        <h3>New Order</h3>
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
                                    <div class="moda-body">
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
    <!-----Quick Add Customer------>
    <div class="modal fade" id="QuickAddCustomer" aria-hidden="true" aria-labelledby="QuickAddCustomer" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel2"><i class="fa-solid fa-user mx-1"></i>Quick Add Customer</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
    <!-----Quick Add Vehicle------>
    <div class="modal fade" id="QuickAddVehicle" aria-hidden="true" aria-labelledby="QuickAddVehicle" tabindex="-1">
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
                                    <label for="Year" class="form-label">Year</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Year</option>
                                        <option value="1">2022</option>
                                        <option value="2">2021</option>
                                        <option value="2">2020</option>
                                        <option value="2">2019</option>
                                        <option value="2">2018</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="Color" class="form-label">Color</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Color</option>
                                        <option value="1">Black</option>
                                        <option value="2">White</option>
                                        <option value="2">Blue</option>
                                        <option value="2">Red</option>
                                        <option value="2">Silver</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="Setup" class="form-label">Setup</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Setup</option>
                                        <option value="1">Square</option>
                                        <option value="2">Staggered</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="Wheels" class="form-label">Wheels</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Wheels</option>
                                        <option value="1">OEM - 17"</option>
                                        <option value="2">...</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <label for="Make" class="form-label">Make</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Make</option>
                                        <option value="1">Honda</option>
                                        <option value="2">Chevrolet</option>
                                        <option value="2">Ford</option>
                                        <option value="2">Toyota</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="LicPlate" class="form-label">License Plate</label>
                                    <input type="text" class="form-control" id="LicPlate" placeholder="License Plate">
                                </div>
                                <div class="mb-3">
                                    <label for="frontTireSize" class="form-label">Front Tire Size</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Front Tire Size</option>
                                        <option value="1">215/50R17</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="mb-3">
                                    <label for="Model" class="form-label">Model</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Select Model</option>
                                        <option value="1">...</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="vin" class="form-label">V.I.N</label>
                                    <input type="text" class="form-control" id="vin" placeholder="vin">
                                </div>
                                <div class="mb-3">
                                    <label for="RearTireSize" class="form-label">Rear Tire Size</label>
                                    <input type="text" class="form-control" id="RearTireSize" placeholder="RearTireSize">
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

</template>

<script>

import { ref } from 'vue'
import ModalComponent from './component/Modal.vue'

export default {
    components: { ModalComponent },
    setup() {
        const customerSelected = ref(false);
        const vehicleSelected = ref(false);

        const toggleCustomerSelected = () => {
            customerSelected.value = !customerSelected.value;
        };
        const toggleVehicleSelected = () => {
            vehicleSelected.value = !vehicleSelected.value;
        };

        return {
            customerSelected,
            vehicleSelected,
            toggleCustomerSelected,
            toggleVehicleSelected
        }
    }
}
</script>

<style>

</style>