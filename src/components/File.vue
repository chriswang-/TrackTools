<template>
  <div class="panel panel-default"  >
    <div class="panel-heading" >
      <button v-on:click="toggleContent" class="btn btn-primary">Toggle Points Panel<span class="badge badge-light">{{objFile.validLinesCount}} / {{objFile.linesCount}}</span></Button>
      <button v-on:click="togglePolyline" class="btn btn-primary">Toggle Polyline</button>{{objFile.name}}
    </div>
    <div v-if="showPointsPanel" class="panel-body">
        <button v-on:click="toggleMarker(p)" class="btn btn-info" v-bind:key="p.rawLine" v-for="p in objFile.points">{{timeFormat(p.time)}}</button>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'File',
  /**
      this.objFiles.push({
          linesCount: linesCount,
          name: value.name,
          points: points
        })
   *     file.points = points.push({
            rawLine: v,
            lan: 123,
            lati: 321
          }),
   */
  props: ['objFile'],
  watch: {
    objFile: function (newVal, oldVal) { // watch it
      console.log('objFile Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },
  data () {
    return {
      showPointsPanel: false,
      showPolyline: false,
      showMarker: false,
      amapPloyline: null,
      amapMarkers: {}
    }
  },
  methods: {
    toggleContent: function () {
      this.showPointsPanel = !this.showPointsPanel
    },
    togglePolyline: function () {
      console.log('notifiy to map')
      this.showPolyline = !this.showPolyline
      if (this.showPolyline) {
        var path = []
        this.objFile.points.forEach((v, i) => {
          path.push(new AMap.LngLat(v.lng, v.lat))
        })
        var polyline = new AMap.Polyline({
          path: path,
          borderWeight: 2, // 线条宽度，默认为 1
          strokeColor: 'red', // 线条颜色
          lineJoin: 'round' // 折线拐点连接处样式
        })
        this.$emit('togglePolyline', {
          polyline: polyline,
          action: 'add'
        })
        this.amapPloyline = polyline
      } else {
        this.$emit('togglePolyline', {
          polyline: this.amapPloyline,
          action: 'remove'
        })
      }
    },
    toggleMarker: function (point) {
      this.showMarker = !this.showMarker
      if (this.showMarker) {
        var marker = new AMap.Marker({
          position: [point.lng, point.lat] // 位置
        })
        this.$emit('toggleMarker', {
          marker: marker,
          action: 'add'
        })
      } else {
        this.$emit('toggleMarker', {
          marker: marker,
          action: 'remove'
        })
      }
    },
    timeFormat: function (time) {
      var date = new Date(Number(time))
      // var formatString = '#DD#/#MM#/#YYYY# #hh#:#mm#:#ss#'
      var formatString = '#DD# #hh#:#mm#:#ss#'
      var YYYY, YY, MMMM, MMM, MM, M, DDDD, DDD, DD, D, hhhh, hhh, hh, h, mm, m, ss, s, ampm, AMPM, dMod, th
      YY = ((YYYY = date.getFullYear()) + '').slice(-2)
      MM = (M = date.getMonth() + 1) < 10 ? ('0' + M) : M
      // MMM = (MMMM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][M - 1]).substring(0, 3)
      DD = (D = date.getDate()) < 10 ? ('0' + D) : D
      // DDD = (DDDD = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]).substring(0, 3)
      th = (D >= 10 && D <= 20) ? 'th' : ((dMod = D % 10) === 1) ? 'st' : (dMod === 2) ? 'nd' : (dMod === 3) ? 'rd' : 'th'
      formatString = formatString.replace('#YYYY#', YYYY).replace('#YY#', YY).replace('#MMMM#', MMMM).replace('#MMM#', MMM).replace('#MM#', MM).replace('#M#', M).replace('#DDDD#', DDDD).replace('#DDD#', DDD).replace('#DD#', DD).replace('#D#', D).replace('#th#', th)
      h = (hhh = date.getHours())
      if (h === 0) h = 24
      if (h > 12) h -= 12
      hh = h < 10 ? ('0' + h) : h
      hhhh = hhh < 10 ? ('0' + hhh) : hhh
      AMPM = (ampm = hhh < 12 ? 'am' : 'pm').toUpperCase()
      mm = (m = date.getMinutes()) < 10 ? ('0' + m) : m
      ss = (s = date.getSeconds()) < 10 ? ('0' + s) : s
      return formatString.replace('#hhhh#', hhhh).replace('#hhh#', hhh).replace('#hh#', hh).replace('#h#', h).replace('#mm#', mm).replace('#m#', m).replace('#ss#', ss).replace('#s#', s).replace('#ampm#', ampm).replace('#AMPM#', AMPM)
    }
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
