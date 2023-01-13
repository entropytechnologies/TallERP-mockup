<template>
    <div class="container mt-4">
        <div class="row mt-4">
            <div class="col-lg-6 col-sm-8">
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
            <div class="col-lg-6 col-sm-8">
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
</template>

<script>
export default {

}
</script>

<style>

</style>