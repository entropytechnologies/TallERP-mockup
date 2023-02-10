<template>
    <div class="container mt-4">
        <div class="row mt-4">
            <div class="col-lg-6 col-sm-8">
                <form action="submit">
                    <div class="row">
                        <h3>Customer</h3>
                        <div class="col-6">
                            <div class="mb-3">
                                <h4 for="exampleFormControlInput1" class="form-label">First Name</h4>
                                <p>John</p>
                            </div> 
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h4 for="exampleFormControlInput1" class="form-label">Last Name</h4>
                                <p>Doe</p>
                            </div>    
                        </div>
                        <div class="mb-3">
                            <h4 for="exampleFormControlInput1" class="form-label">Address</h4>
                            <p>TEST ADDRESS</p>
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
                                <h4 for="exampleFormControlInput1" class="form-label">Phone</h4>
                                <p>555-123321</p>
                            </div>                    
                        </div>
                        <div class="col-6">
                            <div class="mb-3">
                                <h4 for="exampleFormControlInput1" class="form-label">Email</h4>
                                <p>johndoe@gmail.com</p>
                            </div>    
                        </div>                                                                            
                    </div>
                    <div></div>
                    <button class="btn btn-secondary form-control">Edit Customer</button>    
                </form>
            </div>
            <div class="col-lg-6 col-sm-8">
                <h3>Garage</h3>
                <div class="container bg-light mt-3 py-4 shadow-sm text-center">
                    <h4 class="mb-4">Vehicle #1</h4>
                    <img src="../assets/img/samplecar.png" class="img-fluid car-img" alt="">
                    <div class="container mt-2">
                        <router-link to="/service" class="btn btn-secondary">BOOK A SERVICE</router-link>
                        <div class="row mt-2 g-2">
                            <div class="col-6">
                                <div class="card bg-secondary py-2 text-center text-light" style="height:100px">
                                    <h5>Winter Storage</h5>
                                    <small>225/45R18 Goodyear</small>
                                    <small>Alloy Rims</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card bg-secondary py-2 text-center text-light" style="height:100px">
                                    <h5>Add Storage</h5>
                                    <router-link to="/" class="btn text-white">+</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container bg-light mt-3 py-4 shadow-sm text-center">
                    <h1 class="btn btn-lg addButton px-3 shadow-sm" style="font-size:30px">+</h1>
                    <p style="font-size:30px">Vehicle</p>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>