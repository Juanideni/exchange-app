<template>
  <div class="trade">
    
    <div>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <br />
      <input class="form-control" type="number" />
      <br />
      <button class="btn btn-primary">Buy</button>
    </div>
    <div>
      <select
        class="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <br />
      <input class="form-control" type="number" />
      <br />
      <button class="btn btn-primary">Sell</button>
    </div>
  </div>
  <hr />
  <div>
    <h1>Trade´s history</h1>
    <table class="table">
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
        <tr>
          <th scope="row">Purchase</th>
          <td>Bitcoin</td>
          <td>0000.10</td>
          <td>100</td>
          <td>2022</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Sale</th>
          <td>Bitcoin</td>
          <td>0000.10</td>
          <td>100</td>
          <td>2022</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
        <tr>
          <th scope="row">Purchase</th>
          <td>Bitcoin</td>
          <td>0000.10</td>
          <td>100</td>
          <td>2022</td>
          <td>
            <button class="btn btn-warning">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
   
  </div>
</template>

<script>


const date = new Date();
export default {
  name: "Trade"
};
</script>
<style scoped>
.trade {
  display: flex;
  justify-content: space-evenly;
  margin: 10% 0 0 0;
}
</style>
