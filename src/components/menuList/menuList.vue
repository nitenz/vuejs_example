<template>
  <div class="menuList">
    <p>
      <nav role="navigation" class="primary-navigation">
        <ul>
              <li><router-link class="nav-link" to="/action">Action</router-link></li>
              <li><router-link class="nav-link" to="/drama">Drama</router-link></li>
              <li><router-link class="nav-link" to="/scifi">Sci-fi</router-link></li>
              <li><router-link class="nav-link" to="/popular">Destaque</router-link></li>
        </ul>
      </nav>
    </p>
    <router-view />
  </div>
</template>

<script>
  import './menuList.scss'

  export default {
    name: 'menuList',
    components: { 
    },
    mounted() {
      this.user="Nitenz";
    }
  }
</script>