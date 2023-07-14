<template>
  <div class="w-full">
    <div class="flex justify-between items-center p-[30px] relative">
      <h5 id="page-logo" class="flex justify-center items-center text-[3.2rem] text-[#78350F] font-extrabold cursor-pointer select-none">
        {{pageLogo}}
      </h5>
      <div class="flex justify-start items-center gap-[16px]">
        <button v-for="(item,i) in routeList" :key="'route'+i" :class="['routes relative md:block hidden rounded-lg font-medium px-[8px] py-[12px] text-[#78350F] text-[1.6rem] bg-none',item.id==='signup' ? 'border border-solid border-[#78350F] hover:text-[#FFFBEB] hover:bg-[#78350F] transition-all duration-150 ease-linear': 'border-none']">
          {{item.title}}
        </button>
        <div @click="openMobileMenu" class="flex justify-center items-center md:hidden">
          <img class="w-[24px] h-[24px]" src="@/assets/icons/menu-scale.svg" alt="">
        </div>
      </div>
      <div class="mobile-menu absolute left-0 top-[100%] ">
        <!-- Mobile için menu yapılacak -->
      </div>
    </div>
  </div>
</template>

<script>
import {routeList} from '@/enum'
export default {
  data(){
    return{
      pageLogo : 'Collers',
      routeList,
      isOpenMobileMenu:false,
    }
  },
  methods:{
    openMobileMenu(){

    }
  }
}
</script>

<style lang="scss">
.routes.border-none{
  @media (hover: hover){
    &:hover{
      &:before{
        width: 100%;
      }
    }
  }
  &:before{
    content: "";
    position: absolute;
    bottom: 10px;
    width: 0%;
    left: 50%;
    transform: translate(-50%,0);
    transition: all .15s linear;
    height: 2px;
    background-color: #78350F;
  }
}
</style>