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
                <form @submit.prevent="" class="mt-4">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Import Type</label>
                        <select class="form-select" placeholder="" v-model="importType">
                            <option selected>Select...</option>
                            <option value="customer">Customer</option>
                            <option value="vehicle">Vehicle</option>
                            <option value="Accounting">Accounting</option>
                        </select>    
                    </div>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="uploadFile" placeholder="" accept=".csv" required>
                        <button class="btn btn-secondary" @click.prevent="uploadConfirm">Confirm Upload</button>
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
                        <div class="row mt-4"> 
                            <div class="col-12">
                                <h4 class="card-title">Field Mapping</h4>
                                <div class="row mt-4">
                                    <div class="col-6">
                                        <h5 class="text-center mb-4">Uploaded File fields</h5>
                                        <div v-for="(fileKey, index) in fileKeys" class="d-flex">  
                                            <select class="form-select me-3" id="" >
                                                <option selected>{{fileKey}}</option>
                                                <option value="" v-for="(fileKey, index) in fileKeys"> {{fileKey}}</option>
                                            </select>
                                        </div>
                                    </div> 
                                    <div class="col-6">
                                        <h5 class="text-center mb-4">System fields</h5>
                                        <select class="form-select" id="" v-for="(customerField, index) in customerFields">
                                            <option selected>{{ customerField }}</option>
                                            <option value="" v-for="(customerField, index) in customerFields">{{ customerField }}</option>
                                        </select> 
                                    </div>
                                </div>
                            </div>
                            <!-- Button trigger modal -->
                            <a type="button" class="text-info my-3 text-center" data-bs-toggle="modal" data-bs-target="#previewModal" href="#">
                                Preview your data
                            </a>
                        </div>
                    </div>
                    <div v-if="dataHandling">
                        <!-- Modal -->
                        <div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th v-for="(fileKey, index) in fileKeys" scope="col">{{fileKey}}</th>
                                            </tr>    
                                        </thead>
                                        <tbody>
                                            <tr v-for="(fileContent, index) in fileContent">
                                                <th scope="row">{{index}}</th>
                                                <td v-for="(fileKey, index) in fileKeys">{{fileContent[fileKey]}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success form-control" type="submit">Success</button>
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
        };
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
        };
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