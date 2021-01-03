<template>
  <div class="gallery">
    <div class="movie-card">
      <component :is="currentComponent" v-bind="currentProperties"></component>
    </div>
  </div>
</template>

<script>
  import Popular from '@/views/popular/popular.vue'
  import Action from '@/views/action/action.vue'
  import Drama from '@/views/drama/drama.vue'
  import './gallery.scss'

  export default {
  components: { 
    Popular,
    Action,
    Drama
    },
    data(){
      return{
        currentComponent: ''
      }
    },
    name: 'gallery',
    mounted() {
      this.currentComponent = '';
    },
    computed: {
      currentProperties: function() {
        return this.currentComponent === 'Popular' ? 'Popular' : (this.currentComponent === 'Action' ? 'Action' : (  this.currentComponent === 'Drama' ? 'Drama' : 'Scifi' ) )
      }
    }  
  }
</script>
