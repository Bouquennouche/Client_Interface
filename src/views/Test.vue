<template>
  <div class="row w-75 bg-light shadow m-auto mt-5 rounded">
    <div class="col-5">
      <div class="p-5">
        <div class="row calendar container m-auto">
          <h4 class="text-center">Selectionnez une date</h4>
          <vc-calendar :attributes="attributes" is-expanded is-dark  color="red" @dayclick="onDayClick"/>
        </div>
        <div class="row mt-3 m-auto container">
          <h4 class="text-center">Selectionnez l'horaire</h4>
          <div class="horaires bg-dark text-light row row-cols-1 row-cols-md-4 g-2 m-auto py-3 px-2 rounded">
                  <div class="col text-dark text-center" v-for="(hour,index) in horaireTravail" :key="index">
                  <div class=""></div>
                  <button type="button" class="btn btn-warning hour px-3 py-2 rounded" 
                  :disabled="hourClicked.includes(index)"
                  @click="disableHour(index)"
                  >{{ hour }}</button>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-7 p-5">
      <h1 v-if="!selectedDate">{{ formatDate(new Date()) }}</h1>
      <h1 v-else>{{ formatDate(selectedDate) }}</h1>
      <form>
        <div class="row">
          <div class="mb-3">
              <label class="form-label">Votre CIN</label>
              <input type="text" class="form-control" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Entrer votre CIN</div>   
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Verifier</button>
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VCalendar from "v-calendar";
import moment from "moment";
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
      nom:'',
      prenom:'',
      adresse:'',

    };
  },
  computed: {
    selectedDate() {
      if (this.days.length > 0) {
        const date = this.days[this.days.length - 1].date;
        this.nom=''
        this.prenom=''
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
  methods: {
    onDayClick(day) {
      this.days = [
        {
          id: day.id,
          date: day.date,
        },
      ];
    },
    formatDate(dateString) {
      return moment(dateString).format("D MMMM YYYY");
    },
     disableHour(index) {
      this.hourClicked = [index]; // select just one hour
    },
  },
};
</script>

<style lang="scss" scoped>
.hour{
  font-size: 12px;
  font-weight: bold;
}
</style>
