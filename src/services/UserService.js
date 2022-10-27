import axios from "axios";

const clientAPI = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  headers: { "x-apikey": "60eb09146661365596af552f" },
});

export default {
  getMovements(username) {
    return clientAPI.get(`/transactions?q={"user_id": "${username}"}`);
  },
  getMovementById(id) {
    return clientAPI.get(`/transactions/${id}`);
  },

  newTrade(newTrade) {
    console.log("Movimiento correcto")
    return clientAPI.post("/transactions", newTrade);
  },
  updateMovement(id, transaccionEditada) {
    transaccionEditada.datetime = Date.now();
    console.log(transaccionEditada)
    return clientAPI.put(`/transactions/${id}`, transaccionEditada);
  },
  deleteMovement(id) {
    return clientAPI.delete(`/transactions/${id}`);
  },

  //Crypto

  getCryptoData(coin){
    return axios.get("https://criptoya.com/api/buenbit/"+coin+"/ars/0.5")
  },

  cryptos: [
    { id: 0, name: "Bitcoin", symbol: "BTC", totalAmount: 0, amountInMoney: 0, salePrice: 0},
    { id: 1, name: "Ethereum", symbol: "ETH", totalAmount: 0, amountInMoney: 0, salePrice: 0 },
    { id: 2, name: "Theter", symbol: "USDT", totalAmount: 0, amountInMoney: 0, salePrice: 0 },
    { id: 3, name: "USD Coin", symbol: "USDC", totalAmount: 0, amountInMoney: 0, salePrice: 0 },
    { id: 4, name: "Dai", symbol: "DAI", totalAmount: 0, amountInMoney: 0, salePrice: 0 },
  ],
  
}