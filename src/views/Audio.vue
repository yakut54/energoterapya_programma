<template>
	<div class="audio inner-page">
		<div
			class="media-window"
			:style="{
				boxShadow: `4px 4px 15px 4px ${config.data[idx].playerColorGragient[0]}`,
			}"
		>
			<back-button />
			<div
				class="video_title aeb"
				:style="{ color: config.data[idx].playerColorGragient[0] }"
				v-html="title"
			></div>

			<div class="row audio-row">
				<div class="img-audio">
					<div class="aeb title3_ dop-mb show_600">
						{{ titleBtn }}
					</div>
					<img :src="img" alt="" />
				</div>
				<div class="player-audio">
					<div class="aeb title3_ dop-mb hide_600">
						{{ titleBtn }}
					</div>
					<img
						src="@/assets/images/process.png"
						alt=""
						v-if="idx === 5"
						class="process-img"
					/>

					<div class="rec-block">
						<div class="row dop-10">
							<div class="rec-img">
								<img src="@/assets/images/audio-mini.png" alt="" />
							</div>
							<div class="rec-content">
								<div class="rec-text-block">
									Сеанс принимай в наушниках.
									<span class="rec-text-span">Это важно.</span>
								</div>
							</div>
						</div>
					</div>

					<div class="audio-wrapper">
						<audio :src="config.data[idx].source" ref="audio"></audio>
						<player :player="player" :src="config.data[idx].source" />
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { ref } from 'vue'

export default {
	name: 'Audio',
	setup() {
		const audio = ref(null)
		const player = () => audio.value
		return { audio, player }
	},
	data() {
		return {
			idx: 0,
			title: '',
			titleBtn: '',
			img: '',
		}
	},
	computed: {
		...mapState(['config']),
	},
	methods: {
		...mapMutations(['changeColor', 'changeBg', 'changeStrelka', 'changeIsSidebarOpen']),
	},
	mounted() {
		this.idx = +localStorage.getItem('idx') || 0
		this.title = this.config.data[this.idx].title
		this.titleBtn = this.config.data[this.idx].titleBtn
		this.img = require(`@/assets/images/${this.config.data[this.idx].img}`)
		this.changeBg(this.config.data[this.idx].bg)
		this.changeColor(this.config.data[this.idx].bgColor)
		this.changeStrelka(this.config.data[this.idx].strelka)
		this.$title(this.config.data[this.idx].titleBtn)
		this.changeIsSidebarOpen(false)
		window.scrollTo(0, 0)
	},
}
</script>
