<template>
  <div class="love-us-main container mx-auto px-[16px] py-[48px] gap-[32px] md:gap-[80px] md:py-[80px] relative flex flex-col justify-start items-start">
    <div class="header-and-button flex justify-between items-center w-full">
      <h2 class="header-text font-extrabold text-[5.6rem] text-[#0F172A] text-center w-full md:text-left md:w-fit">
        {{loveUsText}}
      </h2>
      <div class="swiper-button-wrapper flex justify-center items-center gap-[24px] max-[639px]:hidden">
        <button @click="goPrev()" class="swiper-prev rounded-[99px] border-2 border-solid border-[#78350F] p-[12px] flex justify-center items-center">
          <img src="@/assets/icons/arrow-left.svg" alt="">
        </button>
        <button @click="goNext()" class="swiper-next rounded-[99px] border-2 border-solid border-[#78350F] p-[12px] flex justify-center items-center rotate-180">
          <img src="@/assets/icons/arrow-left.svg" alt="">
        </button>
      </div>
    </div>
    <div class="slider-area w-full p-[40px] relative overflow-hidden">
      <swiper-container class="cards-wrapper flex justify-start items-stretch gap-[24px] relative z-[1]">
        <swiper-slide lazy="true" v-for="(item,i) in cardList" :key="'card'+i" class="card-main shadow-[0_10px_15px_-3px_#0000001A] min-h-[420px] bg-[#fff] flex flex-col justify-between items-start p-[32px] rounded-[20px] gap-[16px]">
          <div class="card-company flex justify-start items-center py-[16px]">
            <img loading="lazy"  :src="require('../../assets/icons/'+item.company)" alt="">
          </div>
          <div class="card-content font-normal text-[2.4rem] text-[#000] text-left">
            {{item.content}}
          </div>
          <div class="card-owner flex justify-start items-center gap-[16px]">
            <img class="rounded-[99px] w-[64px] h-[64px]" :src="require('../../assets/images/'+item.picture)" alt="">
            <div class="owner-name-and-job flex flex-col justify-start">
              <div class="owner-name text-[1.8rem] font-normal text-[#000]">
                {{item.name}}
              </div>
              <div class="owner-job text-[1.6rem] font-normal text-[#475569]">
                {{item.job}}
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="slider-background w-[110%] h-[80%] top-[-10px] left-[50%] translate-x-[-50%] bg-[#FDE68A] absolute z-[0]">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loveUsText:'Because they love us',
      cardList:[
        {company:'Kontrastr.svg',content:'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',picture:'kontrastr_picture.png',name:'Ralph Edwards',job:'Product Designer'},
        {company:'Zoomerr.svg',content:'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',picture:'zoomerr_picture.png',name:'Hellen Jummy',job:'Team Lead'},
        {company:'Shells.svg',content:'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',picture:'shells_picture.png',name:'Hellena John',job:'Co-founder'},
        {company:'ArtVenue.svg',content:'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',picture:'artvenue_picture.png',name:'David Oshodi',job:'Manager'},
        {company:'Waves.svg',content:'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',picture:'waves_picture.png',name:'Charolette Hanlin',job:'CEO'},
      ]
    }
  },
  methods:{
    goPrev(){
      document.querySelector('.slider-area .cards-wrapper').swiper.slidePrev();
    },
    goNext(){
      document.querySelector('.slider-area .cards-wrapper').swiper.slideNext();
    }
  },
  mounted(){
    const swiperEl = document.querySelector('.slider-area .cards-wrapper');
    const swiperParams = {
      slidesPerView: 1,
      spaceBetween:24,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {
          // ...
        },
      },
    };
    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
    document.querySelector('.cards-wrapper').shadowRoot.querySelector('.swiper').style.overflow='inherit'
  }
}
</script>

<style lang='scss' scoped>
.swiper.swiper-initialized{
  overflow: inherit!important;
}
</style>