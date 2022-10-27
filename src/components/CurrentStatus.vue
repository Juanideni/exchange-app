<template>
    <h1>Your crypto amounts</h1>
     <div class="tableAmounts">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Coins</th>
                        <th scope="col">Coin's Amount</th>
                        <th scope="col">Total Money amount (sale price)</th>
                        <th scope="col">Coin's sale price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="crypto of cryptoList" :key="crypto.id">
                        <td class="tg-kxt4">{{crypto.name}}</td>
                        <td class="tg-kxt4">{{crypto.totalAmount.toLocaleString()}}</td>
                        <td class="tg-kxt4">${{crypto.amountInMoney.toLocaleString()}}</td>
                        <td class="tg-kxt4">${{crypto.salePrice.toLocaleString()}}</td>
                    </tr>
                </tbody>
            </table>
     </div>
</template>
<script>
import UserService from '@/services/UserService';
export default {
    name: "CurrentStatus",
    data(){
        return {
            cryptoList: [],
        }
    }, 
    mounted(){
        
        UserService.getMovements("juani3").then((res) => {
            this.investmentHistory = res.data
            this.cryptoList = UserService.cryptos;
                
                this.investmentHistory.forEach(element => {
                    var calculateMoney = this.cryptoList.find(x => x.symbol === element.crypto_code);
                    var num = Number(element.crypto_amount);
                    if (element.action === "purchase"){
                        calculateMoney.totalAmount += num 
                    }
                    else if (element.action === "sale"){
                        calculateMoney.totalAmount -= num
                    }
                    UserService.getCryptoData(element.crypto_code).then((res)=>{
                                let price = res.data
                                calculateMoney.amountInMoney = price.totalBid * calculateMoney.totalAmount
                    })
                });
            })

        UserService.cryptos.forEach(coin =>{
            debugger;
            UserService.getCryptoData(coin.symbol.toLocaleLowerCase()).then((res) => {
                debugger;
                coin.salePrice = res.data.totalBid
            })
        })
    },
}
</script>

<style scoped>
.tableAmounts{
   width: 80%;
   margin-left: auto;
   margin-right: auto;

}
</style>