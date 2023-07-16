<template>
  <div class="switch-projects-wrapper">
    <router-link v-for="(item,i) in projects" :key="'route'+i" tag='div' :to="item.url" class="css-work box" active-class="active" @click.native="removeLocalStorage">
      {{item.title}}
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      projects:[
        {url:'/css-work',title:'Css Work'},
        {url:'/quiz',title:'Quiz App'}
      ]
    }
  },
  methods:{
    removeLocalStorage(){
      window.localStorage.removeItem('questionNumbers');
      window.localStorage.removeItem('quizResult');
      window.localStorage.removeItem('currCount');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";
.switch-projects-wrapper{
  position: fixed;
  right: 30px;
  bottom: 10px;
  @include d-flex(column,flex-start,stretch);
  gap: 5px;
  z-index: 999999;
  .box{
    border: 1px solid #8d8b8b;
    @include d-flex-center;
    min-width: 100px;
    padding: 8px 4px;
    border-radius: 6px;
    font-size: 1.6rem;
    user-select: none;
    cursor: pointer;
    transition: all .2s linear;
    background-color: #fff;
    @media (hover: hover){
      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .active{
    background-color: #8d8b8b;
    transform: scale(1.1);
  }
}
</style>