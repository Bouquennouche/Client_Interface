<template>
  <div class="container bg-light my-4 rounded w-75 shadow">
    <div class="row">
      <div class="col-lg-5 imagbg"></div>
      <div class="col py-5">
        <div class="row g-3 px-5">
          <h1>Reservation</h1>
          <div class="col-12">
            <label for="inputEmail4" class="form-label">CIN</label>
            <input type="text" class="form-control" v-model="cin" />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Nom</label>
            <input type="text" class="form-control" id="lastName" v-model="nom" @blur="validateNom"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Prenom</label>
            <input type="text" class="form-control" id="firstName" v-model="prenom" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label"
              >Numero de telephone</label
            >
            <input type="tel" class="form-control" v-model="num_tel" />
          </div>
          <div class="col-6">
            <label class="form-label">Genre</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="genre"
            >
              <option selected value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </div>
          <div class="col-6">
            <label for="inputAddress" class="form-label">Date naissance</label>
            <input type="date" class="form-control" v-model="date" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Service</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="serviceid"
              placeholder="Selectionner une service"
            >
              <option v-for="item in services" :value="item.id" :key="item.id">
                {{ item.nom }}
              </option>
            </select>
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label"
              >Date de reservation</label
            >
            <input
              type="date"
              class="form-control"
              v-model="date_rsv"
              @input="getHoraireTravail()"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">Horaire</label>
            <select
              class="form-select"
              aria-label="Default select example"
              v-model="horaire"
              placeholder="Selectionner un horaire"
            >
              <option
                v-for="item in horaireTravail"
                v-bind:style="getItemStyle(item)"
                v-bind:disabled="checkIfInArray(item)"
                :value="item"
                :key="horaireTravail.indexOf(item)"
              >
                {{ item }}
              </option>
            </select>
          </div>

          <div class="col-12 mt-4">
            <button class="btn btn-success" @click="addrsv()">Reserver</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      horaireTravail: [
        "09:00:00",
        "09:30:00",
        "10:00:00",
        "10:30:00",
        "11:00:00",
        "11:30:00",
        "13:00:00",
        "13:30:00",
        "14:00:00",
        "14:30:00",
        "15:00:00",
        "15:30:00",
        "16:00:00",
        "16:30:00",
      ],
      temp: [],
      services: [],
      cin: "",
      horaire: "",
      date_rsv: "",
      nom: "",
      prenom: "",
      date: "",
      serviceid: "",
      genre: "",
      horaire: "",
      num_tel: "",
    };
  },
  created() {
    this.getSers();
  },
  methods: {
    async getSers() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/service");
        this.services = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async addrsv() {
      console.log(this.cin);
      const response = await axios.post(`http://127.0.0.1:8000/api/rendez_vous`, {
        nom: this.nom,
        cin : this.cin,
        prenom: this.prenom,
        genre: this.genre,
        date_naissance: this.date,
        num_tel: this.num_tel,
        date_rdv: this.date_rsv,
        temp_dep: this.horaire,
        id_ser: this.serviceid,
      });
      this.cin = "";
      this.nom = "";
      this.prenom = "";
      this.genre = "";
      this.date = "";
      this.num_tel = "";
      this.date_rsv = "";
      this.horaire = "";
      this.serviceid = "";
      this.getHoraireTravail();
      console.log(response)
    },
    async getHoraireTravail() {
      if (this.date_rsv != "") {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/heures`, {
            params: {
              date: this.date_rsv,
            },
          });
          this.temp = response.data.heures;
        } catch (error) {
          console.log(error);
        }
      } else {
        this.temp = [];
      }
    },
    checkIfInArray(item) {
      return this.temp.includes(item);
    },
    getItemStyle(item) {
      return this.checkIfInArray(item)
        ? { color: "white", background: "#de4452" }
        : {};
    },
    validateNom(){
          const regex =  /^[a-zA-Z]+$/
          const userInput = document.querySelector('#lastName')
          let isTrue = null
          console.log(userInput)
          if(regex.test(this.nom)){
              userInput.classList.remove('is-invalid')
              isTrue = true
              if(isTrue){
                userInput.classList.add('is-valid')
              }
          }
          else{
              userInput.classList.add('is-invalid')
              isTrue = false
          }
          
      },
  },
};
</script>

<style lang="scss" scoped>
.imagbg {
  background-image: url("@/assets/imgs/calandar.jpg") !important;
  background-size: cover !important;
}
</style>
