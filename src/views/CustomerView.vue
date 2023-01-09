<template>
    <div class="container mt-4">
        <div class="row g-4">
            <div class="col-lg-2">
                <h2>Customer</h2>
            </div>
            <div class="col-lg-7">
                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                </form>    
            </div>
            <div class="col-lg-3">
                <RouterLink class="btn btn-secondary" to="/">Create new Customer</RouterLink>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col-2">First Name</th>
                    <th scope="col-2">Last Name</th>
                    <th scope="col-2">Phone</th>
                    <th scope="col-2">Address</th>
                    <th scope="col-1">Active Vehicle</th>
                    <th scope="col-1">Active Storage</th>
                    <th scope="col-2">Customer Since</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    setup() {
        const customers = ref[
            {firstName: ""}
        ];

        return customers
    }
}
</script>

<style>

</style>