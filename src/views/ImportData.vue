<template>
    <div class="bg-light px-4 py-3">
        <h3>Import CSV</h3>
    </div>
    <div class="container mt-4">
        <div class="card shadow-sm">
            <div class="card-body">
                <div class="card-title">
                    <h4>Scan & Upload CSV File</h4>
                </div>
                <form action="submit.prevent()" class="mt-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Import Type</label>
                        <select class="form-select" placeholder="" v-model="importType">
                            <option selected>Select...</option>
                            <option value="customer">Customer</option>
                            <option value="vehicle">Vehicle</option>
                            <option value="Accounting">Accounting</option>
                        </select>    
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">CSV File</label>
                        <input type="file" class="form-control" id="uploadFile" placeholder="" accept=".csv">
                    </div>
                    <div class="mb-3" v-if="importType">
                        <h4 class="card-title">Import Options</h4>
                        <label for="dataHandlingInput" class="form-label">Data Handling</label>
                        <select class="form-select" placeholder="" v-model="dataHandling">
                            <option selected>Select...</option>
                            <option value="add">Add</option>
                            <option value="update">Update</option>
                            <option value="add&update">Add or Update</option>
                        </select>    
                    </div>
                    <div class="mb-3" v-if="dataHandling">
                        <h4 class="card-title">Field Mapping</h4>
                        <div class="row mt-3">
                            <div class="col-4">
                                <h5>File content</h5>
                                <p>{{ fileContent }}</p>
                            </div>    
                            <div class="col-4"></div>
                            <div class="col-4">
                                <h5>Solenoyd ERP fields</h5>
                                <ul class="list-group">
                                    <li class="list-group-item">first_name</li>
                                    <li class="list-group-item">last_name</li>
                                    <li class="list-group-item">email</li>
                                    <li class="list-group-item">customer_since</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-secondary form-select" id="uploadConfirm" @click.prevent="uploadConfirm">Upload</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    setup() {
        const uploadFile = ref("");
        const fileContent = ref();
        const importType = ref(false);
        const dataHandling = ref('');
        const toggleImportType = () => {
            importType.value === !importType.value;
        }
        const uploadConfirm = document.getElementById('uploadConfirm');
        addEventListener('click', () => {
            Papa.parse(document.getElementById('uploadFile').files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    fileContent.value = results.data;
                    console.log(results.data);
                }
            });

        });

        return {
            uploadFile,
            fileContent,
            importType,
            dataHandling,
            uploadConfirm,
            toggleImportType
        }
    }
}

</script>