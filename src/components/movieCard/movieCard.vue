<template>
    <div>
      <div class="movie-card" v-for="(movie, x) in movies" :key="x" >
          <div class="card" style="width: 18rem;">
            <img v-bind:src="movie.img" />
              <div class="card-body">
                <h5 class="card-title">{{movie.title}}</h5>
                <p class="card-text">{{movie.year}}</p>
                  
               <!-- Button trigger modal -->
              <button v-on:click="openDialog" class="btn btn-primary btn-lg" data-toggle="modal" :data-target="'#myModal' + x.toString()">Watch movie!!</button>
              <Dialog :modalId="x.toString()" v-bind:title=movie.title v-bind:year=movie.year v-bind:path=movie.img />
              </div>
          </div>
      </div>
    </div>
</template>

<script>
  import './movieCard.scss'
  import Dialog from '@/components/dialog/dialog.vue'
  
export default {
  components: { 
    Dialog
  },
  name: 'movieCard',
  props: ["movies"],
  mounted() {
  },
  methods: {
   
  },
  computed: {
  }
  }
</script>