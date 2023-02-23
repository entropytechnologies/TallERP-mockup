<template>
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Customer Modal</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        title: {
            type: String,
            default: 'Modal Title'
        },
        icon: {
            type: String,
            default: 'fas fa-user'
        },
        button: {
            type: Object,
            default: ({ label: 'Add Button', route: '#' })
        },
        fields: {
            type: Array,
            default: ['field 1', 'field 2', 'field 3', 'field 4', 'field 5']
        }
    }
}
</script>

<style>

</style>