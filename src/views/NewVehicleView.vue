<template>
    <div class="container mt-4">
        <div class="row mt-4">
            <div class="col-lg-6 col-sm-8">
                <form action="submit">
                    <div class="row">
                        <h3>New Vehicle</h3>
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
            <div class="col-lg-6 col-sm-8">
                <h3>IMAGE</h3>
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
