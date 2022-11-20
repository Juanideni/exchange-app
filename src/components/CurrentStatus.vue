<template>
    <h1 class="title">Your crypto amounts</h1>
     <div class="tableAmounts">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Coins</th>
                        <th scope="col">Coin's Amount</th>
                        <th scope="col">Total Money amount (sale price)</th>
                        <th scope="col"> Accumulated Gain </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="crypto of cryptoList" :key="crypto.id">
                        <td class="tg-kxt4">{{crypto.name}}</td>
                        <td class="tg-kxt4">{{crypto.amount}}</td>
                        <td class="tg-kxt4">$ {{crypto.amountInMoney}}</td>
                        <td class="tg-kxt4">$ {{crypto.result}}</td>
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
            cryptoList: this.$store.state.cryptos,
            salePrice: 0,
            
        }
    }, 
    mounted(){
        if (this.$store.state.username === ''){
                alert("user not found");
                this.$router.push("/")
            }
        this.cryptoList.forEach(element => {
            UserService.getCryptoData(element.symbol).then((res)=>{
                element.amountInMoney = res.data.totalBid * element.amount;
                element.result = (element.sales- element.purchases) + element.amountInMoney;
            })
        });
    },
}
</script>

<style scoped>
.tableAmounts{
   width: 80%;
   margin-left: auto;
   margin-right: auto;
   margin: 2% auto 0 auto;

}
.title{
    margin: 5% 0 0 0;
    display: flex;
    justify-content: center;
}
</style>