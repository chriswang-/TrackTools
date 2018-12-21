<template>
  <button v-bind:id="id" style="margin-right: 3px;" v-bind:class="{ active: showMarker }" v-on:click="toggleMarker()"
          class="btn btn-dark">{{timeFormat(pointData.time)}}
  </button>
</template>

<script>
import {timeFormat, uuid} from '.././utils/utils.js'
import AMap from 'AMap'

export default {
  name: 'Point',
  props: ['pointData'],
  data () {
    return {
      id: null,
      amapMarkers: null,
      showMarker: false
    }
  },
  watch: {
    data: function (newVal, oldVal) { // watch it
      console.log('objFile Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },
  methods: {
    timeFormat: timeFormat,
    toggleMarker: function () {
      this.showMarker = !this.showMarker
      if (this.showMarker) {
        var marker = new AMap.Marker({
          position: [this.pointData.lng, this.pointData.lat] // 位置
        })
        this.$emit('toggleMarker', {
          id: this.id,
          marker: marker,
          action: 'add',
          pointData: this.pointData
        })
        this.amapMarkers = marker
      } else {
        this.$emit('toggleMarker', {
          id: this.id,
          marker: this.amapMarkers,
          action: 'remove',
          pointData: this.pointData
        })
      }
    }
  },
  mounted () {
    this.id = uuid(5, 16)
  }
}
</script>

<style scoped>

</style>
