<template>
  <div class="container mx-auto px-[16px] join-us-wrapper py-[16px] md:py-[160px] w-full">
    <div class="join-us-card shadow-[0_20px_25px_-5px_#0000001A] w-full py-[32px] px-[16px] flex flex-col justify-start items-center gap-[32px] md:py-[73px] md:px-[80px] md:flex-row md:gap-[80px] bg-[#fff] rounded-[30px]">
      <div class="why-join-us flex flex-[1_0_0%] flex-col justify-start items-center gap-[24px] md:items-start">
        <h2 class="why-join-us-header w-full font-extrabold text-[5.6rem] text-[#0F172A] text-center md:text-left">
          {{whyJoinUsHeader}}
        </h2>
        <ul class="list-wrapper flex flex-col justify-start items-start">
          <li v-for="(item,i) in checkList" :key="'check'+i" class="flex justify-start items-center gap-[8px]">
            <img class="w-[24px] h-[24px]" src="@/assets/icons/check.svg" alt="">
            <div class="check-content text-left font-normal text-[2rem] text-[#0F172A]">
              {{item}}
            </div>
          </li>
        </ul>
        <button class="show-room-sign-up-button text-[#78350F] border-2 border-solid border-[#78350F] rounded-[8px] py-[16px] px-[32px] text-[20px] font-medium hover:bg-[#78350F] hover:text-[#fff] transition-all duration-150 ease-linear">
          {{signUpButton}}
        </button>
      </div>
      <div class="screen-wrapper flex justify-center items-center flex-[1_0_0%] relative">
        <div class="screen-window shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff]">
          <div class="screen-top-bar relative flex justify-start items-center gap-[5px] px-[16px] py-[8px]">
            <div :style="{'background-color':item.color}" v-for="(item,i) in windowTopBarDots" :key="'color'+i" :class="getColor(item)">
            </div>
          </div>
          <img src="@/assets/images/Video.png" alt="">
        </div>
        <div class="background-1 w-[120%] h-[50%] bg-[#FDE68A] rotate-[-45deg] absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-[0] opacity-70 md:w-[110%]"></div>
        <div class="background-2 w-[50px] h-[50px] bg-[#15803D] absolute left-[25%] top-[100%] translate-y-[-50%] translate-x-[-50%] rounded-[99px] z-[3] opacity-70 md:w-[85px] md:h-[85px]"></div>
        <div class="background-3 w-[55px] h-[55px] bg-[#B45309] absolute left-[-5%] top-[15%] translate-y-[-50%] rounded-[30px] z-[0] opacity-70 md:w-[90px] md:h-[90px] md:left-[5%]"></div>
        <div class="background-4 w-[35px] h-[35px] bg-[#0369A1] absolute left-[90%] top-[-15%] translate-y-[-50%] rounded-[99px] z-[1] opacity-70 md:w-[60px] md:h-[60px] md:left-[85%] md:top-[-20%]"></div>
        <div class="background-5 w-[45px] h-[45px] bg-[#A21CAF] absolute left-[70%] top-[100%] translate-y-[-50%] rounded-[30px] z-[0] opacity-70 md:w-[74px] md:h-[74px]"></div>
        <div class="background-6 w-[134px] h-[134px] bg-[#BE185D] absolute left-[55%] top-[100%] translate-y-[-50%] rounded-[50px] z-[1] opacity-70 md:w-[218px] md:h-[218px] md:left-[50%]"></div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  data(){
    return{
      whyJoinUsHeader:'Why join us',
      checkList:[
        "Est et in pharetra magna adipiscing ornare aliquam.",
        "Tellus arcu sed consequat ac velit ut eu blandit.",
        "Ullamcorper ornare in et egestas dolor orci."
      ],
      signUpButton:'Sign up now',
      windowTopBarDots:[
        {color:'#E11D48'},
        {color:'#FBBF24'},
        {color:'#22C55E'}
      ]
    }
  },
  methods:{
    getColor(item){
      return `w-[10px] h-[10px] rounded-[99px] bg-[${item.color}]`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>