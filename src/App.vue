<template>
<div class="app">
  <switchProjects/>
  <router-view/>
</div>
  
</template>

<script>
import switchProjects from '@/components/SwitchProjects.vue'

export default {
  components:{
    switchProjects
  }
}
</script>


<style lang="scss">
@font-face {
  font-family: Roboto;
  src: url('./assets/fonts/Roboto-Regular.ttf');
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: Roboto;
  -webkit-tap-highlight-color: transparent;
}
.app{
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
html,body{
  height: 100%;
  font-size: 10px;
  @media (min-width: 1025px) and (max-width: 1440px){
    font-size: 9px;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    font-size: 8px;
  }
  @media (max-width: 768px) {
    font-size: 7px;
  }
}
</style>
