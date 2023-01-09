<template>
    <div class="container-fluid ps-md-0">

        <div class="col-lg-12">
            <div class="flex align-items-center py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                            <div class="my-2 pe-2 text-center">
                                <RouterLink to="/">
                                    <img src="" style="max-width:128">
                                </RouterLink>
                            </div>
                            <h3 class="mb-4">Welcome</h3>
                                <!-- Sign In Form -->
                            <form>
                                <div class="form-floating mb-3">
                                    <input type="email" name="email" class="form-control" id="emailInput" placeholder="name@example.com" required autofocus>
                                    <label for="emailInput">Email</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" name="password" class="form-control" id="passwordInput" placeholder="Password">
                                    <label for="passwordInput">Password</label>
                                </div>
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" name="remember" id="rememberInput">
                                    <label class="form-check-label" for="rememberInput">Remember Me </label>
                                </div>

                                <div class="d-grid">
                                    <button class="btn btn-lg btn-primary fw-bold mb-2" type="submit">Login</button>
                                    <div class="text-center">
                                        <RouterLink to="">
                                            Forgot your password?
                                        </RouterLink>
                                    </div>
                                    <div class="text-center mt-5">
                                        <RouterLink class="btn btn-light" to="/home">
                                            Register
                                        </RouterLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
