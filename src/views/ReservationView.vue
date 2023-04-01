<template>
  <div class="container bg-light py-5 my-5 rounded w-75">
    <div class="row">
      <div class="col-lg-5">
        <span class="imagbg"> </span>
      </div>
      <div class="col">
        <form class="row g-3 px-5">
            <h1>Hello</h1>
          <div class="col-md-7">
            <label for="inputEmail4" class="form-label">E-mail</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col">
            <label for="inputPassword4" class="form-label">Mot de pass</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Numero de telephone</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">CIN</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Ville</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Date de reservation</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>
