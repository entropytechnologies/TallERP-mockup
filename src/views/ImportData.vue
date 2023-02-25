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
                                        <div v-for="(newKey, index) in newKeys" class="d-flex">  
                                            <select class="form-select me-3" id="">
                                                <option selected>{{newKey}}</option>
                                                <option :value="newKey" v-for="(newKey, index) in fileKeys"> {{newKey}}</option>
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
                            <div class="text-center mt-2">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary my-3 text-center me-2" @click="updateKeys">
                                    <i class="fa-solid fa-floppy-disk me-1"></i>
                                    Save Changes
                                </button>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-info my-3 text-center me-2" data-bs-toggle="modal" data-bs-target="#previewModal">
                                    <i class="fa-solid fa-magnifying-glass me-1"></i>
                                    Preview your data
                                </button>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-warning my-3 text-center"  @click="clearData">
                                    <i class="fa-solid fa-delete-left me-1"></i>
                                    Clear data
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="dataHandling">
                        <!-- Modal -->
                        <div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-4" id="exampleModalLabel">Preview</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <h5 class="text-center">Uploaded File</h5>
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
                                                <td class="text-truncate" v-for="(fileKey, index) in fileKeys">{{fileContent[fileKey]}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr>
                                    <h5 class="text-center mt-4">System's Data</h5>
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th v-for="(customerField, index) in customerFields" scope="col">{{customerField}}</th>
                                                </tr>    
                                            </thead>
                                            <tbody>
                                                <tr v-for="(customer, index) in customers">
                                                    <th scope="row">{{index}}</th>
                                                    <td class="text-truncate" v-for="(customerField, index) in customerFields">{{customer[customerField]}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success form-control" type="submit">{{dataHandling}}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { toUpper } from 'lodash';
import {ref} from 'vue'
import customers from '../assets/js/customersData.json'
import customerFields from '../assets/js/customersFields.json'

export default {
    setup() {
        const fileContent = ref('');
        const importType = ref(false);
        const dataHandling = ref('');
        const fileKeys = ref([]);
        const newKeys = ref([]);
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
                    newKeys.value = fileKeys.value;
                }
            });
        };
        const clearData = () => {
            fileContent.value = '';
            newKeys.value = [];
        };
        const updateKeys = () => {
            fileKeys.value === newKeys.value;
        };

        customers
        customerFields

        return {
            fileContent,
            importType,
            dataHandling,
            fileKeys,
            newKeys,
            toggleImportType,
            uploadConfirm,
            clearData,
            updateKeys,
            customers,
            customerFields,
        }
    }
}

</script>