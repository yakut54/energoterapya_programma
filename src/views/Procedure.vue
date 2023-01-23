<template>
	<div class="video inner-page">
		
		<div class="media-window" :style="{boxShadow: `4px 4px 15px 4px ${config.data[idx].playerColorGragient[0]}`}">
			<back-button />

			<div 
				class="video_title aeb" 
				:style="{color: config.data[idx].playerColorGragient[0]}"
				v-html="title"
			></div>
			<div 
				class="aeb title3_" 
				:style="{color: config.data[idx].strelka}"
			>
				{{ titleBtn }}
			</div>

			<div class="text-block">Курс: 20 дней в режиме 2 раза в день</div>

			<div class="rec-block">
				<div class="row dop-10">
					<div class="rec-img">
						<img src="@/assets/images/audio-mini.png" alt="">
					</div>
					<div class="rec-content">
						<div class="rec-text-block">Сеанс принимай в наушниках. 
							<span class="rec-text-span">Это важно.</span>
						</div>
					</div>
				</div>
			</div>
			
			<div class="video-wrapper" :style="{border: `1px solid ${config.data[idx].playerColorGragient[0]}`}">
				<div class="video-top teleport">
					<video 
						ref="video"
						:src="procedure.source" 
						:poster="require(`@/assets/images/vbg3_1.jpg`)">
					</video>
				
					<div 
						@click="fullscreenVideo" 
						class="fullscreen"
						:style="{backgroundImage: `radial-gradient(${config.data[idx].playerColorGragient[0]}, #fff)`}"
					>
						<i class="fa fa-arrows-alt" aria-hidden="true" :style="{color: config.data[idx].strelka}"></i>
					</div>
				<!-- teleport play button -->
				</div>
				<div class="video-bottom">
					<player :player="player" :src="procedure.source"/>
				</div>
    	</div>

			<span 
				v-if="$route.name === 'procedure'"
				class="dop-btn-procedure asb" 
				:style="{
					color: '#fff',
					backgroundImage: `radial-gradient(${config
						.data[idx].playerColorGragient[0]}, ${config
							.data[idx].playerColorGragient[1]})`
				}"
				@click="$router.back()"
			>
				НАЗАД
			</span>

		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ref } from 'vue'

export default {
	name: 'Video',
	setup() {
		const video = ref(null)
		const player = () => video.value

		const fullscreenVideo = () => {
			if (video.value) {
				video.value.requestFullscreen()
			}
		}

		return { video, player, fullscreenVideo }
	},
	data() {
		return {
			idx: 0,
			title: '',
			titleBtn: '',
			procedure: {}
		}
	},
	computed: {
		...mapState(['config']),
	},
	methods: {
		...mapMutations(['changeColor', 'changeBg', 'changeStrelka', 'changeIsSidebarOpen']),
		setData(){
			
		}
	},
	mounted() {
		this.idx = +localStorage.getItem('idx') || 0
		this.title = this.config.data[this.idx].procedure.title
		this.titleBtn = this.config.data[this.idx].procedure.titleBtn
		this.procedure = this.config.data[this.idx].procedure
		this.changeBg(this.config.data[this.idx].bg)
		this.changeColor(this.config.data[this.idx].bgColor)
		this.changeStrelka(this.config.data[this.idx].strelka)
		this.$title(this.config.data[this.idx].procedure.titleBtn)
		this.changeIsSidebarOpen(false)
		window.scrollTo(0, 0)
	},
}
</script>

<style></style>
