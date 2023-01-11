<template>
    <div class="container mt-4">
        <h3 class="mb-4">Sales Order</h3>
        <div class="row g-4">
            <div class="col-lg-3">
                <div class="card bg-light shadow-sm text-center py-2" style="min-height:200px; max-height:300px">
                    <p>Customer:</p>
                    <h3>John Doe</h3>
                    <p>555-123321</p>
                    <p>johndoe@gmail.com</p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card bg-light shadow-sm text-center py-4" style="min-height:200px; max-height:300px">
                    <img src="../assets/img/samplecar.png" class="img-fluid px-4" alt="">
                    <p class="mb-4">{Vehicle Data}</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row g-1">
                    <div class="col-lg-6">
                        <div class="card bg-light shadow-sm text-center py-4" style="min-height:200px; max-height:300px; font-size:40px">
                            <p>December</p>
                            <h1>14</h1>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card bg-light shadow-sm text-center py-4" style="min-height:200px; max-height:300px; font-size:40px">
                            <p>PM</p>
                            <h1>2:30</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-light shadow-sm mt-4">
             <div>
                <button class="addButton">+</button>
                <small class="px-2">Add Service</small>
             </div>
         </div>
        <div class="card bg-light shadow-sm mt-2">
            <div>
                <button class="addButton">+</button>
                <small class="px-2">Add Tires</small>
             </div>
        </div>
        <div class="card bg-light shadow-sm mt-2">
            <div>
                <button class="addButton">+</button>
                <small class="px-2">Add Wheels</small>
             </div>
         </div>
        <div class="card bg-light shadow-sm mt-2">
            <div>
                <button class="addButton">+</button>
                <small class="px-2">Add Hardware</small>
             </div>
        </div>
        <div class="card bg-light shadow-sm mt-2">
            <div>
                <button class="addButton">+</button>
                <small class="px-2">Add Storage</small>
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