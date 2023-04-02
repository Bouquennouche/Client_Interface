<template>
  <div class="container bg-light my-4 rounded w-75 shadow">
    <div class="row">
      <div class="col-lg-5 imagbg">
      </div>
      <div class="col py-5">
        <form class="row g-3 px-5">
            <h1>Reservation</h1>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Nom</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col">
            <label for="inputPassword4" class="form-label">Prenom</label>
            <input type="text" class="form-control"  />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Numero de telephone</label>
            <input
              type="number"
              class="form-control"
            />
          </div>
          <div class="col-6">
            <label class="form-label">Genre</label>
            <select class="form-select" aria-label="Default select example">
                <option selected value="Homme">Homme</option>
                <option value="Femme">Femme</option>
            </select>
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">Date naissence</label>
            <input type="date" class="form-control" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Service</label>
            <input
              type="number"
              class="form-control"
            />
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label">Date de reservation</label>
            <input type="date" class="form-control"  />
          </div>
          <div class="col-md-6">
            <label class="form-label">Horaire</label>
            <input type="text" class="form-control"  />
          </div>
          
          <div class="col-12 mt-4">
            <button class="btn btn-success">Reserver</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return{
      horaireTravail:[],
    }
  }
};
</script>

<style lang="scss" scoped>
  .imagbg{
      background-image: url('@/assets/imgs/calandar.jpg') !important;
      background-size: cover !important;
  }
</style>
