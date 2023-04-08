<template>
  <div class="row w-75 bg-light shadow m-auto mt-5 rounded">
    <div class="col-6">
      <div class="p-5">
        <div class="row calendar container m-auto">
          <h4 class="text-center">Selectionnez une date</h4>
          <vc-calendar
            :attributes="attributes"
            is-expanded
            is-dark
            color="red"
            @dayclick="onDayClick"
          />
        </div>
        <div class="row mt-3 m-auto container">
          <h4 class="text-center">Selectionnez l'horaire</h4>
          <div
            class="horaires bg-dark text-light row row-cols-1 row-cols-md-4 g-2 m-auto py-3 px-2 rounded"
          >
            <div
              class="col text-dark text-center"
              v-for="(hour, index) in horaireTravail"
              :key="index"
            >
              <div class=""></div>
              <button
                type="button"
                class="btn btn-warning hour px-3 py-2 rounded"
                :disabled="hourClicked.includes(index) || temp.includes(hour)"
                @click="disableHour(index, hour)"
              >
                {{ hour }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-6 p-5">
      <h1 v-if="!selectedDate">{{ formatDate(new Date()) }}</h1>
      <h1 v-else>{{ formatDate(selectedDate) }}</h1>
      <form v-if="show">
        <div class="row">
          <div class="col-sm mb-3">
            <label class="form-label">Votre CIN</label>
            <input
              type="text"
              v-model="cin"
              class="form-control"
              required
              aria-describedby="emailHelp"
            />
            <div class="form-text">Entrer votre CIN</div>
          </div>
        </div>
        <button type="button" @click="verifier()" class="btn btn-primary">
          Verifier
        </button>
      </form>
      <br />
      <div class="row" v-if="!show">
        <div class="col-md-6" v-if="!exist">
          <label for="inputEmail4" class="form-label">Nom</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            v-model="nom"
            @blur="validateNom"
          />
        </div>
        <div class="col-md-6" v-if="!exist">
          <label for="inputPassword4" class="form-label">Prenom</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            v-model="prenom"
          />
        </div>
        <div class="col-sm mb-3" v-id="!exist">
          <label class="form-label">Numero de Telephone</label>
          <input
            type="text"
            v-model="num_tel"
            class="form-control"
            required
            aria-describedby="emailHelp"
          />
        </div>
        <div class="col-6" v-if="!exist">
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
        <div class="col-6" v-if="!exist">
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
        <div class="col-12 mt-4">
          <button class="btn btn-success" @click="addrsv()">Reserver</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VCalendar from "v-calendar";
import moment from "moment";
import axios from "axios";
Vue.use(VCalendar, {
  componentPrefix: "vc",
});

export default {
  data() {
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
      hourClicked: [],
      days: [],
      temp: [],
      exist: false,
      patient: [],
      services: [],
      cin: "",
      nom: "",
      prenom: "",
      date: "",
      serviceid: "",
      genre: "",
      horaire: "",
      num_tel: "",
      show: true,
    };
  },
  computed: {
    selectedDate() {
      if (this.days.length > 0) {
        const date = this.days[this.days.length - 1].date;
        this.nom = "";
        this.prenom = "";
        return moment(date).format("YYYY-MM-DD");
      } else {
        return null;
      }
    },
    attributes() {
      return this.days.map((day) => ({
        highlight: true,
        dates: day.date,
      }));
    },
  },
  created() {
    this.getHoraireTravail();
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
    onDayClick(day) {
      this.days = [
        {
          id: day.id,
          date: day.date,
        },
      ];
      this.getHoraireTravail();
    },
    formatDate(dateString) {
      return moment(dateString).format("D MMMM YYYY");
    },
    disableHour(index, hour) {
      this.hourClicked = [index]; // select just one hour
      this.horaire = hour;
    },
    async verifier() {
      if (this.cin != "") {
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/exists", {
            params: {
              cin: this.cin,
            },
          });
          if (response.data.message != "null") {
            this.cin = response.data.patient.cin;
            this.nom = response.data.patient.nom;
            this.prenom = response.data.patient.prenom;
            this.date = response.data.patient.date_naissance;
            this.num_tel = response.data.patient.num_tel;
            this.genre = response.data.patient.genre;
            this.exist = true;
          } else {
            this.exist = false;
          }
          console.log(this.exist);
        } catch (error) {
          console.log(error);
        }
      }
      this.show = false;
    },
    async getHoraireTravail() {
      if (this.selectedDate != "") {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/heures`, {
            params: {
              date: this.selectedDate,
            },
          });
          this.temp = response.data.heures;
          console.log(this.temp);
        } catch (error) {
          console.log(error);
        }
      } else {
        this.temp = [];
      }
    },
    validateNom() {
      const regex = /^[a-zA-Z]+$/;
      const userInput = document.querySelector("#lastName");
      let isTrue = null;
      console.log(userInput);
      if (regex.test(this.nom)) {
        userInput.classList.remove("is-invalid");
        isTrue = true;
        if (isTrue) {
          userInput.classList.add("is-valid");
        }
      } else {
        userInput.classList.add("is-invalid");
        isTrue = false;
      }
    },
    async addrsv() {
      console.log(this.horaire);
      const response = await axios.post(
        `http://127.0.0.1:8000/api/rendez_vous`,
        {
          nom: this.nom,
          cin: this.cin,
          prenom: this.prenom,
          genre: this.genre,
          date_naissance: this.date,
          num_tel: this.num_tel,
          date_rdv: this.selectedDate,
          temp_dep: this.horaire,
          id_ser: this.serviceid,
        }
      );
      this.cin = "";
      this.nom = "";
      this.prenom = "";
      this.genre = "";
      this.date = "";
      this.num_tel = "";
      this.horaire = "";
      this.serviceid = "";
      this.selectedDate = "";
      this.getHoraireTravail();
      this.hourClicked = [];
      this.show = true;
      console.log(response);
    },
  },
};
</script>

<style lang="scss" scoped>
.hour {
  font-size: 12px;
  font-weight: bold;
}
</style>
