<template>
  <div class="container mt-4">
    <div class="row">
        <h3 class="text-center">Welcome back, USER!</h3>
        <div class="col-lg-2 col-sm-4 g-4" v-for="link in links" :key="link.id">
            <div class="card shadow-sm bg-light">
                <img src="https://dummyimage.com/640x360/fff/aaa" alt="" class="img-fluid card-img">
                <router-link class="card-title text-center fw-bold" :to="link.url">{{link.name}}</router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
    setup() {
        const links = ref([
            {name: "Customer", url: "/customers"},
            {name: "Vehicle", url: "/vehicles"},
            {name: "Sales", url: "/sales"},
            {name: "Service", url: "#"},
            {name: "Tire Storage", url: "#"},
            {name: "Inventory", url: "#"}
        ]);

        return {
            links
        }
    }
}
</script>

<style>

</style>