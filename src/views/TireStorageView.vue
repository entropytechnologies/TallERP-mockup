<template>
    <div class="container mt-4 text-center">
        <div class="row g-4">
            <div class="col-lg-2">
                <h2>Tire Storage</h2>
            </div>
            <div class="col-lg-7">
                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Customer, license, plate, etc...">
                    </div>
                </form>    
            </div>
            <div class="col-lg-3">
                <RouterLink class="btn btn-secondary" to="/">Create new Storage</RouterLink>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Make</th>
                    <th scope="col">Model</th>
                    <th scope="col">License Plate</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Tire</th>
                    <th scope="col">Rim</th>
                    <th scope="col">Location BIN</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    setup() {
        

        return {
            
        }
    }
}
</script>

<style>

</style>