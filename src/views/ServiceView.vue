<template>
      <div class="container mt-4">
        <div class="row">
            <div class="col-lg-2">
                <h2>Service</h2>
            </div>
            <div class="col-lg-8">
                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Customer, license, plate, phone, etc...">
                    </div>
                </form>    
            </div>
            <div class="col-lg-2">
                <RouterLink class="btn btn-secondary" to="#">New Appointment</RouterLink>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <n-calendar></n-calendar>
    </div>
</template>

<script>
export default {
    setup() {
        
    }
}
</script>

<style>

</style>