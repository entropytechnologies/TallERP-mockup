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
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="uploadFile" placeholder="" accept=".csv" required>
                        <button class="btn btn-secondary" @click.prevent="uploadConfirm">Confirm Upload</button>
                    </div>
                    <div class="mb-3" v-if="dataHandling">
                        <div class="row mt-4"> 
                            <div class="col-12">
                                <h4 class="card-title">Field Mapping</h4>
                                <!---Tabs-->
                                <ul class="nav nav-tabs justify-content-center mt-4" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#fieldMapping-tab-pane" type="button" role="tab" aria-controls="fieldMapping-tab-pane" aria-selected="true">
                                            <i class="fa-solid fa-table "></i>
                                            Field Mapping
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#preview-tab-pane" type="button" role="tab" aria-controls="preview-tab-pane" aria-selected="false">
                                            <i class="fa-solid fa-magnifying-glass me-1"></i>
                                            Preview
                                        </button>
                                    </li>
                                </ul>
                                <!---Tabs-->
                                <!---Tabs Content-->
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="fieldMapping-tab-pane" role="tabpanel" aria-labelledby="fieldMapping-tab" tabindex="0">
                                        <div class="row mt-4">
                                            <div class="col-4">
                                                <h5 class="text-center mb-4">Uploaded File fields</h5>
                                                <ul>
                                                    <li v-for="(newKey, index) in newKeys">{{newKey}}</li>
                                                </ul>
                                            </div> 
                                            <div class="col-4">
                                                <div class="d-flex">
                                                    <div>
                                                        <label>File Field</label>
                                                        <select v-model="new_mapping.file_field">
                                                            <option v-for="(newKey, index) in newKeys" :value="newKey">{{ newKey }}</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <button @click="addMapping" class="btn btn-primary">Add</button>
                                                    </div>
                                                    <div>
                                                        <label>System Field</label>
                                                        <select v-model="new_mapping.system_field">
                                                            <option v-for="(customerField, index) in customerFields" :value="customerField">{{ customerField }}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="mt-2">
                                                    <ul>
                                                        <li v-for="(mapped_fields, index) in mapped_fields" @click="removeMapping(index)">{{ mapped_fields.file_field }} - "{{ mapped_fields.system_field }}"</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h5 class="text-center mb-4">System fields</h5>
                                                <ul>
                                                    <li v-for="(customerField, index) in customerFields">{{ customerField }}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="preview-tab-pane" role="tabpanel" aria-labelledby="preview-tab" tabindex="0">
                                        <div class="container">
                                            <div class="" v-if="fileKeys != [] && fileContent != []">
                                                <h5 class="text-center mt-4">Uploaded File</h5>
                                                <div class="table-responsive">
                                                    <table class="table table-striped">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th v-for="(fileKey, index) in newKeys" scope="col">{{fileKey}}</th>
                                                            </tr>    
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="(fileContent, index) in fileContent">
                                                                <th scope="row">{{index}}</th>
                                                                <td class="text-truncate" v-for="(fileKey, index) in fileKeys">{{fileContent[fileKey]}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>    
                                                <hr>
                                                <h5 class="text-center mt-4">System's Data</h5>
                                                <div class="table-responsive">
                                                    <table class="table table-striped">
                                                        <thead>
                                                            <tr>
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
                                            <div class="text-center text-warning" v-else>
                                                Please upload a file first
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!---Tabs Content-->
                            </div>
                            <div class="text-center mt-2">
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary my-3 text-center me-2" @click="updateKeys">
                                    <i class="fa-solid fa-floppy-disk me-1"></i>
                                    Save Changes
                                </button>
                                <!-- Button trigger modal -->
                                <button type="button" class="btn btn-warning my-3 text-center" @click="clearData">
                                    <i class="fa-solid fa-delete-left me-1"></i>
                                    Clear data
                                </button>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-success form-control" type="submit" @click="addRecords">{{dataHandling}}</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue'
import customers from '../assets/js/customersData.json'
import customerFields from '../assets/js/customersFields.json'

export default {
    setup() {
        const mapped_fields = ref([]);
        const new_mapping = ref({});
        const customersEdit = JSON.stringify(customers);
        const fileContent = ref('');
        const importType = ref(false);
        const dataHandling = ref('');
        const fileKeys = ref([]);
        const newKeys = ref([]);
        const newRecords = ref([]);
        //
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
            fileKeys.value = [];
            newKeys.value = [];
        };
        const updateKeys = () => {
            fileKeys.value = newKeys.value;
        };
        const deleteKey = (index) => {
            newKeys.value.splice(index, 1);
        };
        const addRecords = () => {

            newRecords.value = [];
            
            fileContent.value.forEach(element => {
                let newRecord = {};
                customerFields.forEach(customerField => {
                    let mapped_field = mapped_fields.value.find(mapped_field => mapped_field.system_field === customerField);
                    if(mapped_field)
                    {
                        newRecord[customerField] = element[mapped_field.file_field];
                    }
                    else {
                        newRecord[customerField] = '';
                    }
                });
                newRecords.value.push(newRecord);
            });

            console.log(newRecords.value);
        };
        
        function addMapping() {
            mapped_fields.value.push(new_mapping.value);
            new_mapping.value = {};
        }

        function removeMapping(index) {

            let confirmed = confirm('Do you wish to remove this mapping?');

            if(confirmed)
            {
                mapped_fields.value.splice(index, 1);
            }
        }

        return {
            mapped_fields,
            new_mapping,
            customersEdit,
            fileContent,
            importType,
            dataHandling,
            fileKeys,
            newKeys,
            newRecords,
            toggleImportType,
            uploadConfirm,
            clearData,
            updateKeys,
            deleteKey,
            addRecords,
            customers,
            customerFields,
            addMapping,
            removeMapping,
        }
    }
}

</script>