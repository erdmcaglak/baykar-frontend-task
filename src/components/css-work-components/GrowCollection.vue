<template>
  <div class="grow-collection-main relative">
    <div class="grow-collection-wrapper container mx-auto px-[16px] py-[48px] gap-[32px] md:gap-[80px] md:py-[80px] relative flex flex-col justify-start items-start text-[#0F172A]">
      <div class="header-wrapper flex flex-col justify-start items-start gap-[32px]">
        <h2 class="grow-header text-[5.6rem] font-extrabold text-center md:text-left">
          {{growHeader}}
        </h2>
        <div class="grow-content font-normal text-[1.8rem] text-center  md:text-left">
          {{growContent}}
        </div>
      </div>
      <div class="grow-items-area flex justify-start items-stretch w-full min-h-[600px]">
        <div class="buttons flex flex-col justify-start items-stretch gap-[16px] ">
          <div @click="choseButton(item)" v-for="(item,i) in buttonList" :key="'growButton'+i" :class="['grow-button flex justify-start items-center gap-[16px] font-medium text-[2rem] p-[16px] select-none cursor-pointer rounded-[8px]',selectedButton === item.id ? 'bg-[#fff] shadow-[0_4px_6px_-1px_#0000001A]' : '']">
            <img :src="require('../../assets/icons/'+item.icon)" alt="">
            <div class="button-content">
              {{item.title}}
            </div>
            <img v-if="selectedButton === item.id" :src="require('../../assets/icons/arrow-right.svg')" alt="">
          </div>
        </div>
        <div class="window-area relative flex-[1_0_0%] relative">
          <div class="screen-wrapper flex justify-center items-center absolute left-[50%] top-[0] translate-x-[-50%] w-[60%]">
            <div class="screen-window w-full shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff]">
              <div class="screen-top-bar relative flex justify-start items-center gap-[5px] px-[16px] py-[8px]">
                <div :style="{'background-color':item.color}" v-for="(item,i) in windowTopBarDots" :key="'color'+i" :class="getColor(item)">
                </div>
              </div>
              <img src="@/assets/images/Video.png" alt="">
            </div>
          </div>
          <div class="screen-wrapper flex justify-center items-center absolute left-[60%] top-[100px] translate-x-[-50%] w-[60%]">
            <div class="screen-window w-full shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff]">
              <div class="screen-top-bar relative flex justify-start items-center gap-[5px] px-[16px] py-[8px]">
                <div :style="{'background-color':item.color}" v-for="(item,i) in windowTopBarDots" :key="'color'+i" :class="getColor(item)">
                </div>
              </div>
              <img src="@/assets/images/Picture_2.png" alt="">
            </div>
          </div>
          <div class="screen-wrapper flex justify-center items-center absolute left-[90%] top-[150px] translate-x-[-50%] w-[25%]">
            <div class="screen-window h-[335px] w-full shadow-[0_25px_50px_-12px_#00000040] border-[5px] border-solid border-[#fff] rounded-[20px] overflow-hidden flex flex-col justify-start items-stretch relative z-[2] bg-[#fff]">
              <img style="rect(19px, 264px, 271px, 38px)" class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-45%] scale-[1.4]" src="@/assets/images/Picture_4.png" alt="">
            </div>
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
      selectedButton:'search',
      growHeader:'Grow your collection',
      growContent:'Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.',
      buttonList:[
        {icon:'search.svg',title:'Bibendum tellus',id:'search'},
        {icon:'shield-check.svg',title:'Cras eget',id:'shield'},
        {icon:'rocket.svg',title:'Dolor pharetra',id:'rocket'},
        {icon:'screen.svg',title:'Amet, fringilla',id:'screen'},
        {icon:'podcast.svg',title:'Amet nibh',id:'poscast'},
        {icon:'settings-alt.svg',title:'Sed velit',id:'settings'},
      ],
      windowTopBarDots:[
        {color:'#E11D48'},
        {color:'#FBBF24'},
        {color:'#22C55E'}
      ]
    }
  },
  methods:{
    choseButton(item){
      this.selectedButton = item.id
    },
    getColor(item){
      return `w-[10px] h-[10px] rounded-[99px] bg-[${item.color}]`
    }
  }
}
</script>

<style lang='scss' scoped>
.grow-collection-main{
  background-image:url('../../assets/images/Waves.png');
  background-position: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>