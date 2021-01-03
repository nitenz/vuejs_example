<template>
  <div class="user hidden">
    <div>
       <span v-if="user" v-bind="currentProperties">Welcome {{user.split('@')[0]}}</span>
    </div>
  </div>
</template>

<script>
  import './user.scss'

  export default {
  components: { 
    },
    props:{
      user: String,
    },
    name: 'user',
    computed: {
      currentProperties: function() {
        return this.user && this.user.length > 0 ? true : false;
      }
    }  
  }
</script>
