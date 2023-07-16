<template>
  <div class="w-full container mx-auto px-[16px]">
    <div class="flex justify-between items-center py-[16px] md:py-[24px] relative">
      <h5 id="page-logo" class="flex justify-center items-center text-[3.2rem] text-[#78350F] font-extrabold cursor-pointer select-none">
        {{pageLogo}}
      </h5>
      <div class="flex justify-start items-center gap-[16px]">
        <button v-for="(item,i) in routeList" :key="'route'+i" :class="['routes relative md:block hidden rounded-lg font-medium px-[8px] py-[12px] text-[#78350F] text-[1.6rem] bg-none',item.id==='signup' ? 'border border-solid border-[#78350F] hover:text-[#FFFBEB] hover:bg-[#78350F] transition-all duration-150 ease-linear': 'border-none']">
          {{item.title}}
        </button>
        <div v-if="!isOpenMobileMenu" @click="openMobileMenu" class="flex justify-center items-center md:hidden cursor-pointer">
          <img class="w-[24px] h-[24px]" src="@/assets/icons/menu-scale.svg" alt="">
        </div>
        <div v-else @click="closeMobileMenu" class="close-mobile-menu w-[24px] h-[24px] relative cursor-pointer">
        </div>
      </div>
      <transition name="slide-mobile-menu">
        <div v-if="isOpenMobileMenu" class="mobile-menu pb-[10px] fixed right-0 top-[100%] absolute flex justify-start items-stretch flex-wrap min-w-[200px] shadow-[0px_26px_35px_0px_rgba(0,0,0,0.08)] z-[99] bg-[#fff]">
          <div v-for="(item,i) in routeList" :key="'mobileRoute'+i" class="text-[2rem] py-[10px] px-[4px] min-w-[100px] flex justify-center items-center text-[#78350F] font-medium">
            {{ item.title }}
          </div>
        </div>
      </transition>
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
      this.isOpenMobileMenu = true
    },
    closeMobileMenu(){
      this.isOpenMobileMenu = false
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
.close-mobile-menu{
  &:before,&:after{
    content:"";
    width: 100%;
    height: 2px;
    background-color: #78350F;
    position: absolute;
    transform:rotate(45deg);
    top: 50%;
    left: 0;
  }
  &:after{
    transform:rotate(-45deg);
  }
}

.slide-mobile-menu-enter{
    opacity: 0;
}
.slide-mobile-menu-enter-active{
    animation: slide-mobile-menu-in .3s ease-out forwards;
}
.slide-mobile-menu-leave{
}
.slide-mobile-menu-leave-active{
    animation: slide-mobile-menu-out .3s ease-out forwards;
}
.slide-mobile-menu-move{
    transition: transform .3s;
}

@keyframes slide-mobile-menu-in{
    from{
      opacity: 0;
      transform: translateY(-40%);
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-mobile-menu-out{
    from{
      opacity: 1;
        transform: translateY(0);
    }
    to{
      opacity: 0;
        transform: translateY(-40%);
    }
}
</style>