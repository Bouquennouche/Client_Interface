<template>
  <div class="container">
    <h1 class="pt-5"></h1>
    <div class="bg-light mt-3 rounded shadow">
      <div class="row">
        <div class="col-lg-5 imagbg"></div>
        <div class="col py-5">
          <form class="row g-3 px-5">
            <h1>Evaluer cette experience</h1>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Email</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-2">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Votre avis</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-12 mt-4">
              <button class="btn btn-success">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.imagbg {
  background-image: url("@/assets/imgs/6189.jpg") !important;
  background-size: cover !important;
}
</style>
