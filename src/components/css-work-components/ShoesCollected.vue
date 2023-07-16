<template>
  <div class="shoes-collected bg-[#78350F] relative flex justify-start md:justify-center items-center py-[80px] pt-[120px] overflow-hidden ">
    <div class="background-wrapper relative flex justify-center items-center ">
      <img class="max-[767px]:min-w-[1000px]" src="@/assets/images/chart.png" alt="">
      <div class="rounded-[99px] border-[3px] border-solid border-[#A3E635] absolute bg-[#A3E635] left-[14%] top-[34%] w-[24px] h-[24px]">
        <div class="relative h-full">
          <div class="popup absolute left-[50%] top-[-100%] translate-x-[-50%] translate-y-[-100%] rounded-[5px] bg-[#E2E8F0] shadow-[0_25px_50px_-12px_#00000040] min-w-[250px] text-[1.4rem] text-left font-medium">
            <div class="arrow-wrapper relative w-full h-full p-[16px] z-[1]">
              <img class="absolute w-full left-[0] top-[0] translate-y-[-85%] z-[0]" src="@/assets/images/Picture_5.png" alt="">
              <span class="relative z-[1]">Emma Simpson collected one pair of <b>Cool Shoes.</b></span>
            </div>
          </div>
          <div class="md:hidden area-info flex flex-col justify-start items-center absolute left-[50%] top-[100%] translate-x-[-50%] translate-y-[50%]">
            <div class="count text-[9.6rem] text-[#FFFBEB] font-extrabold text-center max-[767px]:text-[7.6rem]">
              11,658,467
            </div>
            <div class="counte-content text-[5.6rem] text-[#FFFBEB] font-extrabold text-center max-[767px]:text-[3.6rem]">
              Shoes Collected
            </div>
          </div>
        </div>
      </div>
      <div :style="{'left':item.left+'%','margin-left':getMargin+'px','top':item.top+'%','width':item.width+'px','height':item.width+'px'}" v-for="(item,i) in dots" :key="'dots'+i" class="rounded-[99px] border-[3px] border-solid border-[#A3E635] absolute"></div>
      <div class="max-[767px]:hidden area-info flex flex-col justify-start items-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div class="count text-[9.6rem] text-[#FFFBEB] font-extrabold text-center">
          11,658,467
        </div>
        <div class="counte-content text-[5.6rem] text-[#FFFBEB] font-extrabold text-center">
          Shoes Collected
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dots:[
        {left:20,top:50,selected:false,width:24},
        {left:30,top:77,selected:false,width:24},
        {left:31,top:28,selected:false,width:30},
        {left:35,top:72,selected:false,width:16},
        {left:40,top:10,selected:false,width:16},
        {left:55,top:70,selected:false,width:25},
        {left:75,top:55,selected:false,width:24},
        {left:85,top:53,selected:false,width:16},
        {left:87,top:77,selected:false,width:24},
      ]
    }
  },
  computed:{
    getMargin(){
      console.log(window.innerWidth)
      return window.innerWidth/8
    }
  }
}
</script>

<style lang="scss" scoped>
.arrow-wrapper{
  &:before{
    content: "";
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    width: 12px;
    height: 6px;
    position: absolute;
    left: 50%;
    top: 100%;
    background-color: #E2E8F0;
    transform: translate(-50%,0);
    z-index: 2;
  }
}
</style>