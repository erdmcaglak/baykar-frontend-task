<template>
  <div class="bg-[#0F172A] md:py-[80px] py-[48px]">
    <div class="the-best-of container bg-bottom bg-no-repeat bg-contain mx-auto px-[16px] flex flex-col justify-start items-stretch gap-[80px] text-[#fff] max-[767px]:items-center">
      <div class="the-best-of-header-and-button flex justify-between items-center max-[767px]:flex-col max-[767px]:gap-[32px]">
        <h2 class="the-best-of-header text-[5.6rem] font-extrabold text-center md:text-left">
          {{theBestHeader}}
        </h2>
        <button class="sign-up-button text-[#fff] border-2 border-solid border-[#fff] rounded-[8px] py-[20px] px-[48px] text-[24px] font-bold hover:bg-[#fff] hover:text-[#0F172A] transition-all duration-150 ease-linear">
          {{signUpButton}}
        </button>
      </div>
      <div class="card-list flex justify-between items-stretch gap-[15px] lg:gap-[48px] max-[767px]:flex-col max-[767px]:max-w-[450px] max-[767px]:gap-[32px]">
        <div v-for="(item,i) in theBestCardList" :key="'card'+i" class="card rounded-[10px] overflow-hidden flex flex-col justify-start items-stretch flex-[1_0_0%] shadow-[0_25px_50px_-12px_#FFFFFF40]">
          <img class="object-contain w-full" :src="require('../../assets/images/'+item.image)" alt="">
          <div class="card-info-wrapper flex flex-col justify-start items-stretch p-[32px] gap-[32px] bg-[#0F172A]">
            <div class="card-info flex flex-col justify-start items-stretch">
              <h6 class="card-info-header text-left font-bold text-[2.4rem]">
                {{item.title}}
              </h6>
              <div class="card-info-content text-left font-normal text-[1.8rem]">
                {{item.content}}
              </div>
            </div>
            <button @mouseenter="hoveredItemId=item.id" @mouseleave="hoveredItemId=''" class="card-button text-[#fff] border-2 border-solid border-[#fff] rounded-[8px] py-[16px] px-[16px] text-[24px] font-bold hover:bg-[#fff] hover:text-[#0F172A] transition-all duration-150 ease-linear flex justify-center items-center gap-[16px] lg:px-[48px]">
              <img class="w-[24px] h-[24px]" :src="hoveredItemId === item.id ? require('../../assets/icons/black-shopping-cart.svg') : require('../../assets/icons/shopping-cart.svg')" alt="">
              <div class="button-text">
                Buy Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      theBestHeader:'The best of the best',
      theBestCardList:[
        {title:'Title',content:'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',image:'Picture.png',id:'1'},
        {title:'Title',content:'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',image:'Picture_2.png',id:'2'},
        {title:'Title',content:'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',image:'Picture_3.png',id:'3'}
      ],
      hoveredItemId:'',
      signUpButton:'Sign up now',
    }
  }
}
</script>

<style lang="scss" scoped>
.the-best-of{
    background-image: url('../../assets/images/Backlights.png');
    @media (max-width: 767px){
      background-image: url('../../assets/images/mobile_Backlights.png');
    }
}
</style>