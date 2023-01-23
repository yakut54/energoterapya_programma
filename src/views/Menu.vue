<template>
	<div class="page-menu">
		<div class="max">
			<div class="menu">
				<img src="@/assets/images/atom.png" alt="" class="atom a1" />
				<img src="@/assets/images/atom.png" alt="" class="atom a2" />

				<div class="title_block center">
					<div class="menu-text-1">ЦЕЛЕБНАЯ и РАЗВИВАЮЩАЯ ТЕХНОЛОГИЯ</div>
					<div class="title-menu abl">ЭНЕРГОТЕРАПИЯ</div>
					<div class="menu-text-1">по принципам вибрационной медицины</div>
				</div>

				<div class="menu-btn-block">

					<button
						type="button"
						:key="btn.titleBtn"
						@click="start(idx)"
						v-for="(btn, idx) in btns"
						class="menu-btn ar new-btn"
					>
						<component :is="`IconBtn_${idx}`" class="icon-menu" />
						<span>{{ btn.titleBtn }}</span>
					</button>
					

          <div class="bottom-button-block row">
            <div class="btn-block">
              <a href="https://marta-ng.ru/help/?video" class="btn-block-a">Служба поддержки</a>
            </div>
            <div class="img-block">
              <img src="@/assets/images/logo.png" alt="" class="img-block-a">
            </div>
            <div class="btn-block">
              <a href="https://marta-ng.com/" class="btn-block-a">Другие программы проекта</a>
            </div>
          </div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'


export default {
	name: 'Menu',
	data() {
		return {
			btns: [],
		}
	},
	computed: {
		...mapState(['config']),
	},
	methods: {
		...mapMutations(['changeBg', 'changeColor', 'changeStrelka', 'toggleDrop', 'changeIsSidebarOpen']),
		start(idx) {
			localStorage.setItem('idx', idx)
			this.$router.push(`/${this.btns[idx].type}`)
		},
	},
	mounted() {
		window.scrollTo(0, 0)
		this.$title(this.config.appTitle)
		this.btns = this.config.data
    this.changeBg(this.config.bg)
    this.changeColor(this.config.bgColor)
    this.changeStrelka(this.config.Strelka)
		this.toggleDrop(false)
		this.changeIsSidebarOpen(false)
	},
}
</script>
