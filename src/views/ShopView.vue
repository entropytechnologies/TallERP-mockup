<template>
      <div class="container mt-4">
        <div class="row">
            <div class="col-lg-2">
                <h2>Shop</h2>
            </div>
            <div class="col-lg-8">
                <form>
                    <div class="mb-3">
                        <input type="email" class="form-control bg-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Customer, license, plate, phone, etc...">
                    </div>
                </form>    
            </div>
            <div class="col-lg-2">
                <RouterLink class="btn btn-secondary" to="#">Cued Appointment</RouterLink>
            </div>
        </div>
    </div>
    <div class="container mt-4">
        <table class="table table-bordered table-hover">
            <thead class="bg-dark text-white">
                <tr>
                    <th scope="col">Hoist 1</th>
                    <th scope="col">Hoist 2</th>
                    <th scope="col">Hoist 3</th>
                    <th scope="col">Hoist 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="bg-success" style="--bs-bg-opacity: .5">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" class="img-fluid" style="max-width:40%" alt="" srcset="">
                                </div>
                                <div class="col-8">
                                    <h6>BFVD 659 - 2001 Honda Civic</h6>
                                    <h6>John Doe</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="bg-warning" style="--bs-bg-opacity: .5">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" class="img-fluid" style="max-width:40%" alt="" srcset="">
                                </div>
                                <div class="col-8">
                                    <h6>AABC 123 - 2016 BMW X5</h6>
                                    <h6>John Doe</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td></td>
                    <td class="bg-warning" style="--bs-bg-opacity: .5">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" class="img-fluid" style="max-width:40%" alt="" srcset="">
                                </div>
                                <div class="col-8">
                                    <h6>AABC 123 - 2016 BMW X5</h6>
                                    <h6>John Doe</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="bg-warning" style="--bs-bg-opacity: .5">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" class="img-fluid" style="max-width:40%" alt="" srcset="">
                                </div>
                                <div class="col-8">
                                    <h6>AABC 123 - 2016 BMW X5</h6>
                                    <h6>John Doe</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td></td>
                    <td class="bg-success" style="--bs-bg-opacity: .5">
                        <div class="container">
                            <div class="row g-0">
                                <div class="col-4">
                                    <img src="https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg" class="img-fluid" style="max-width:40%" alt="" srcset="">
                                </div>
                                <div class="col-8">
                                    <h6>CFRL 876 2021 Hyundai Elantra </h6>
                                    <h6>John Doe</h6>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td></td>
                </tr>
            </tbody>            
        </table>
    </div>
</template>

<script>
export default {
    setup() {
        
    }
}
</script>