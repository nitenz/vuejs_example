<template>
  <div class="scifi">
      <h2> Filmes de Sci-FI </h2>
      <MovieCard :movies="movies" />
  </div>
</template>

<script>
  import MovieCard from '@/components/movieCard/movieCard.vue'
  import './scifi.scss'
  export default {
  components: { MovieCard },
    name: 'scifi',
    data() {
      return{
      movies: this.movies
      }
    },
    mounted() {
      
    },
    created() {
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'Vue POST Request Example' })
      };
      fetch('http://localhost:3000/scifi', requestOptions)
        .then(async response => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }else{
            this.movies = data;
          }

          this.postId = data.id;
        })
        .catch(error => {
          this.errorMessage = error;
          console.error('There was an error!', error);
        });
    }
  }
</script>