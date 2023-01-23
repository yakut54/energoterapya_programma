<template>
  <footer 
    :style="{
      backgroundImage: `linear-gradient(${bgColor}, ${bgColor}), url(${require(`@/assets/images/${bg}`)})`
    }"
  >
    <div class="max960">
      <div class="row">
        <div class="footer-item left">
          <span :style="{color: strelka}">Бесплатный звонок по России <a href="tel:8 800 350 79 63" :style="{color: strelka}">8 800 350 79 63</a> </span>
          <span :style="{color: strelka}">MARTA-NG ©Все права защищены</span>
        </div>
        <div class="footer-item right">
          <a class="footer__item-img" href="https://zen.yandex.ru/marta_ng/"><IconSite :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
          <a class="footer__item-img" href="https://www.youtube.com/channel/UCcAXS8DjSnp1k1l_Q2f4JEQ"><IconYoutube :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
          <a class="footer__item-img" href="https://t.me/marta_ng/"><IconDzen :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
          <a class="footer__item-img" href="https://marta-ng.com/zhenskii_zhurnal_d/"><IconTelegram :style="{fill: strelka, border: `2px ${strelka} solid`}"/></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'


export default {
  computed: {
    ...mapState(['bg', 'bgColor', 'strelka'])
  },
}
</script>

<style scoped>

</style>