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
                        <input type="file" class="form-control" id="uploadFile" placeholder="" accept=".csv" required>
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
                            <div class="col-3">
                                <h5>File content Fields</h5>
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="(fileKey, index) in fileKeys">{{ fileKey }}</li>
                                </ul>    
                            </div>    
                            <div class="col-6 bg-light">
                                <h4 class="card-title text-center">Field Mapping</h4>
                                <div class="row">
                                    <div class="col-6">
                                        <div v-for="(fileKey, index) in fileKeys" class="d-flex">  
                                            <select class="form-select me-3" id="" >
                                                <option selected>{{fileKey}}</option>
                                                <option value="" v-for="(fileKey, index) in fileKeys"> {{fileKey}}</option>
                                            </select>
                                            <p><i class="fas fa-arrow-right"></i></p>
                                        </div>
                                    </div> 
                                    <div class="col-6">
                                        <select class="form-select" id="" v-for="(customerField, index) in customerFields">
                                            <option selected>{{ customerField }}</option>
                                            <option value="" v-for="(customerField, index) in customerFields">{{ customerField }}</option>
                                        </select> 
                                    </div>
                                </div>
                            </div>
                            <div class="col-3">
                                <h5>Solenoyd ERP fields</h5>
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="(customerField, index) in customerFields">{{ customerField }}</li>
                                </ul>    
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-secondary form-control" @click.prevent="uploadConfirm">Upload</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import customerFields from '../assets/js/customersFields.json'

export default {
    setup() {
        const fileContent = ref('');
        const importType = ref(false);
        const dataHandling = ref('');
        const fileKeys = ref([]);
        const toggleImportType = () => {
            importType.value === !importType.value;
        }
        const uploadConfirm = () => {
            Papa.parse(document.getElementById('uploadFile').files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    fileContent.value = results.data;
                    console.log(results.data);
                    console.log(Object.keys(fileContent.value[0]));
                    fileKeys.value = Object.keys(fileContent.value[0]);
                }
            });


            
        }
        /*const uploadConfirm = document.getElementById('uploadConfirm');
        addEventListener('click', () => {
            Papa.parse(document.getElementById('uploadFile').files[0], {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    fileContent.value = results.data;
                    console.log(results.data);
                }
            });

        });*/
        customerFields

        return {
            fileContent,
            fileKeys,
            importType,
            dataHandling,
            uploadConfirm,
            customerFields,
            toggleImportType
        }
    }
}

</script>