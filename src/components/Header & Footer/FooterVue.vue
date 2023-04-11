<template>
  <div class="bg-light pt-4 mt-5 footervue">
<footer class="container">
  <div class="row py-3 mb-3 align-middle">
    <a class="navbar-brand" href="#">
    <img src="@/assets/imgs/tooth.png" alt="Bootstrap" width="25" height="25"><a class="brand align-middle ms-2 me-5" href="/">uSmile</a>
    </a>
  </div>
  <div class="row">
    <div class="col-6 col-md-2 mb-3">
      <h5>Les liens</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-muted">Accueil</a></li>
        <li class="nav-item mb-2"><a href="/services" class="nav-link p-0 text-muted">Services</a></li>
        <li class="nav-item mb-2"><a href="/apropos" class="nav-link p-0 text-muted">A propos</a></li>
        <li class="nav-item mb-2"><a href="/reservation" class="nav-link p-0 text-muted">Reserver</a></li>
      </ul>
    </div>

    <div class="col-6 col-md-2 mb-3">
      <h5>Localisation</h5>
      <ul class="nav flex-column">
        <p class="text-muted">Apt 19 Avenue Al Amal, <br> Sale, Tabrikt</p>
      </ul>
    </div>

    <div class="col-6 col-md-2 mb-3">
      <h5>Telephone</h5>
      <p class="text-muted">+212 567684812 <br>+212 556768481</p>
      
    </div>

    <div class="col-md-5 offset-md-1 mb-3">
      <form>
        <h5>Abonnez-vous à notre newsletter</h5>
        <p>Résumé mensuel de ce qui est nouveau et excitant de notre part.</p>
        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
          
          <input id="newsletter1" type="text" class="form-control" placeholder="Adresse email">
          <button class="btn btn-primary" type="button">S'abonner</button>
        </div>
      </form>
    </div>
  </div>

  <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    <p>© 2023</p>
    <ul class="list-unstyled d-flex">
      <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
      <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
      <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
    </ul>
  </div>
</footer>
</div>
</template>


<style lang="scss" scoped>
  .footervue{
      margin-top: 150px !important;
  }
  .brand{
    text-decoration: none;
    font-weight: bold;
    color: black;
    font-size: 22px;
  }
</style>
