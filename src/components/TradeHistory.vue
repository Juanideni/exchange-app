<template>
    <div class="tradeHistory">
      
        <div class="test">
            <div class="tableHistory">
                <h1>Trade's history</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Action</th>
                        <th scope="col">Currency</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Money (in $ARS)</th>
                        <th scope="col">Date</th>
                        <th scope="col">Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="transaccion in investmentHistory"
                            :key="transaccion._id"
                        >
                            <td class="tg-kxt4">{{ transaccion.action}}</td>
                            <td class="tg-kxt4">{{ transaccion.crypto_code }}</td>
                            <td class="tg-kxt4">{{ transaccion.crypto_amount }}</td>
                            <td class="tg-kxt4">${{ transaccion.money }}</td>
                            <td class="tg-kxt4">{{ new Date(transaccion.datetime).toLocaleString() }}</td>
                            <td>
                            <button class="btn btn-primary"  v-on:click="getMovementToEdit(transaccion._id, true)" data-bs-toggle="modal" data-bs-target="#viewModal">View</button>
                            <button class="btn btn-warning" v-on:click="getMovementToEdit(transaccion._id, false)" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                            <button class="btn btn-danger" v-on:click="deleteMovement(transaccion._id)">Delete</button>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          
            <router-link to="/trade" target="_blank"><button type="button" class="btn btn-warning">New movement</button></router-link>
            
           
        </div>
    </div>

    
    <div class="modal fade bd-example-modal-lg" id="editModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit movement</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Action</label>
                    <div class="col-md-6">
                        <select class="form-control" v-model="newMovement.action"  @change="getPrice(newMovement.action, newMovement.crypto_code)">
                            <option>
                                {{newMovement.action}}
                            </option>
                            <option>
                                {{otherAction}}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Crypto</label>
                    <div class="col-md-6">
                        <select class="form-control" v-model="newMovement.crypto_code" @change="getPrice(newMovement.action, newMovement.crypto_code)">
                            <option v-for="crypto in cryptoList" :key="crypto.id">
                                {{crypto.symbol}}
                            </option>
                            
                        </select>
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Price</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="price">
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Amount</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" v-model="newMovement.crypto_amount">
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Money</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" v-model="newMovement.money">
                    </div>
                </div>   
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">From</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="newMovement.datetime">
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-warning" v-on:click="postNewMovement(newMovement._id)">Save changes</button>
            </div>
            </div>
        </div>
    </div>

    <div class="modal fade bd-example-modal-lg" id="viewModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Movement</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Action</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="newMovement.action">
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Crypto</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="newMovement.crypto_code">
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Price</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="newMovement.crypto_amount">
                    </div>
                </div>
                <div class="form-group row updateForm">
                    <label for="action" class="col-md-4 col-form-label text-md-right">Amount</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="newMovement.money">
                    </div>
                </div>   
                <div class="form-group row updateForm hidden">
                    <label for="action" class="col-md-4 col-form-label text-md-right">From</label>
                    <div class="col-md-6">
                        <input type="text" name="crypto" id="disabledTextInput" class="form-control" disabled v-model="formatDate">
                    </div>
                </div> 
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Done</button>
            </div>
            </div>
        </div>
    </div>


</template>
<script>


import UserService from '@/services/UserService';


    export default {
        name: "TradeHistory",
        data(){
            return {
                investmentHistory: [],
                movementId: null,
                newMovement: {
                    user_id: this.$store.state.username,
                    action: "",
                    crypto_code: "",
                    crypto_amount: "",
                    money: "",
                    datetime: "",
                },
                oldMovement: null,
                otherAction: null,
                
                formatDate: null,
                price: null
            }
        },


        mounted(){
            debugger;
            // if (this.$store.state.username === ''){
            //     alert("user not found");
            //     this.$router.push("/")
            // }

            UserService.getMovements(this.$store.state.username).then((res) => {
                this.investmentHistory = res.data
                this.cryptoList = UserService.cryptos;
                
                console.log(UserService.cryptos);
            })
            
        },
        methods:{
            
            reloadTable(){
               UserService.getMovements(this.$store.state.username).then((res) => {
                this.investmentHistory = res.data
                })
            },

            deleteMovement(id){
                console.log(id)
                UserService.deleteMovement(id)
                .then(()=>{
                    this.reloadTable();
                })
                this.investmentHistory = ""
            },

            getMovementToEdit(id, isView){
                UserService.getMovementById(id).then((res)=>{
                    this.newMovement = res.data;
                    this.otherAction = this.newMovement.action === "sale" ? "purchase" : "sale";
                    
                    if (isView){
                        this.formatDate = new Date(this.newMovement.datetime).toLocaleString()
                    }
                    UserService.getCryptoData(this.newMovement.crypto_code).then((res) =>{
                        debugger
                        this.price = this.newMovement.action === "sale" ? res.totalBid : res.totalAsk;
                    })
                    console.log("price:"+this.price)
                })
               
            },
            postNewMovement(id){
                UserService.updateMovement(id, this.newMovement).then(()=>{
                    debugger
                    console.log(this.newMovement)
                    console.log("editado correctamente")
                    if (this.newMovement.action === "purchase"){
                        this.$store.commit("newPurchase", this.newMovement)
                    }
                    else{
                        this.$store.commit("newSale", this.purchase)
                    }
                    location.reload()
                })
            },
            getPrice(action, crypto){
                let cryptoInfo 
                UserService.getCryptoData(crypto).then((res)=>{
                    console.log(res.data)
                    cryptoInfo = res.data
                    debugger;
                    if(action === "sale"){
                    this.newMovement.action = "sale";
                    this.otherAction = "purchase";
                    this.price = cryptoInfo.totalBid
                }
                else if (action === "purchase"){
                    this.newMovement.action = "purchase";
                    this.otherAction = "sale";
                    this.price = cryptoInfo.totalAsk
                }
                })
            },
        }
    }

</script>
<style scoped>
.tradeHistory{
    margin: 5%;
}
.buttons{
    display: flex;
    justify-content: space-evenly;
}
.updateForm{
    margin-top: 3%;
    margin-bottom: 3%;
}
.tableAmounts{
    width: 100%;
   
}
.tableHistory{
    width: 100%;
}


.test{
    display: flex;
    justify-content: space-between;
}
.table{
    padding: 2%;
}
</style>
