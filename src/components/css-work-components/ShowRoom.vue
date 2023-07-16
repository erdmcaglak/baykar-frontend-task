<template>
  <div class="show-room-wrapper flex flex-col justify-start items-stretch relative">
    <div class="container mx-auto px-[16px] show-room w-full py-[80px] gap-[80px] flex justify-start items-stretch flex-col md:flex-row md:items-center max-[639px]:py-[48px] relative z-[1]">
      <div class="show-room-infos md:flex-[2_0_0%] flex flex-col justfy-start items-stretch gap-[32px]">
        <h1 class="text-[7.2rem] text-[#0F172A] font-extrabold text-left">
          {{showRoomHeader}}
        </h1>
        <div class="show-room-text text-[1.8rem] font-normal">
          {{showRoomText}}
        </div>
        <div class="show-room-buttons flex justify-start items-stretch gap-[16px]">
          <button class="show-room-sign-up-button text-[#78350F] border-2 border-solid border-[#78350F] rounded-[8px] py-[16px] px-[32px] text-[20px] font-medium hover:bg-[#78350F] hover:text-[#fff] transition-all duration-150 ease-linear">
            {{signUpButton}}
          </button>
          <button class="show-room-wrat-button flex justify-start items-center px-[8px] py-[12px] rounded-[8px] ">
            <img class="w-[24px] h-[24px]" src="@/assets/icons/play-circle.svg" alt="">
            <div class="show-room-wrat-button-text px-[8px] font-medium text-[1.6rem] text-[#78350F]">
              {{watchDemoButton}}
            </div>
          </button>
        </div>
      </div>
      <div class="show-room-image h-[423px] flex justify-center max-h-[315px] items-end 2xl:h-[423px] xl:h-[373px] lg:h-[323px] md:h-[273px] md:flex-[1_0_0%] md:max-h-[100%] relative max-[320px]:h-[250px]">
        <div class="show-room-image-bg w-[80%] lg:h-[90%] h-[90%] rounded-[50px] bg-[#FBBF24] max-w-[270px] max-h-[275px] md:max-w-[100%] md:max-h-[100%] md:h-[80%] md:w-[90%] max-[320px]:h-[80%] max-[320px]:mb-[10%] max-[320px]:max-h-[210px]">
          <transition name="rotate-image" appear>
            <img class="w-full absolute max-w-[360px] left-[50%] top-0 translate-x-[-50%] lg:top-0 md:top-[10%] md:max-w-[100%] " src="@/assets/images/Shoe.png" alt="">
          </transition>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-[16px] show-room-info flex justify-between items-center py-[80px] gap-[20px] lg:gap-[80px] max-[639px]:flex-col max-[639px]:py-[48px] relative z-[1]">
      <div v-for="(item,i) in showRoomInfoList" :key="'showRommInfo'+i" class="flex flex-col justify-start items-start gap-[16px] text-[#0F172A] max-[639px]:items-center max-[639px]:max-w-[400px]">
        <div class="info-image-wrapper relative flex justify-center items-center">
          <img class="relative z-[2] w-[64px] h-[64px]" :src="require('../../assets/icons/' + item.icon)" alt="">
          <img class="absolute top-0 right-0 translate-x-[30%] translate-y-[-20%] z-[1] w-[40px] h-[40px]" :src="require('../../assets/icons/' + item.rectangle)" alt="">
        </div>
        <div class="info-title text-left text-[2rem] font-bold max-[639px]:text-center">
          {{item.title}}
        </div>
        <div class="info-content text-left text-[1.8rem] font-normal max-[639px]:text-center">
          {{item.content}}
        </div>
      </div>
    </div>
    <div class="overflow-background bg-[#FEF3C7] w-full h-full absolute bottom-0 left-0 z-[0]"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      showRoomHeader:'Collectible Sneakers',
      showRoomText:'Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.',
      signUpButton:'Sign up now',
      watchDemoButton:'Watch Demo',
      showRoomInfoList:[
        {icon:'trophy.svg',rectangle:'trophy-rectangle.svg',title:'Nibh viverra',content:'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'},
        {icon:'cursus.svg',rectangle:'cursus-rectangle.svg',title:'Cursus amet',content:'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'},
        {icon:'tv.svg',rectangle:'tv-rectangle.svg',title:'Ipsum fermentum',content:'Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.'}
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.overflow-background{
  clip-path: polygon(100% 10%, 0 100%, 100% 100%);
}
</style>