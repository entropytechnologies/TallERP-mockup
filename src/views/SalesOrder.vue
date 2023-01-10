<template>
    <div class="container mt-4">
        <h3 class="mb-4">Sales Order</h3>
        <div class="row g-4">
            <div class="col-lg-3">
                <div class="card bg-light shadow-sm text-center py-2" style="height:200px">
                    <p>Customer:</p>
                    <h3>{Customer.Name}</h3>
                    <p>{Customer telephone}</p>
                    <p>{Customer email}</p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card bg-light shadow-sm text-center py-4" style="height:200px">
                    <img src="../assets/img/samplecar.png" class="img-fluid px-4" alt="">
                    <p class="mb-4">{Vehicle Data}</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="row g-1">
                    <div class="col-lg-6">
                        <div class="card bg-light shadow-sm text-center py-4" style="height:200px; font-size:40px">
                            <p>December</p>
                            <h1>14</h1>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card bg-light shadow-sm text-center py-4" style="height:200px; font-size:40px">
                            <p>PM</p>
                            <h1>2:30</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-light shadow-sm mt-4">
             <div class="card-title">Add Service</div>
         </div>
        <div class="card bg-light shadow-sm mt-2">
            <div class="card-title">Add Tires</div>
        </div>
        <div class="card bg-light shadow-sm mt-2">
             <div class="card-title">Add Wheels</div>
         </div>
        <div class="card bg-light shadow-sm mt-2">
            <div class="card-title">Add Hardware</div>
        </div>
        <div class="card bg-light shadow-sm mt-2">
            <div class="card-title">Add Storage</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>