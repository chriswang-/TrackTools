<template>
  <div v-bind:id="id"  class="panel panel-default"  >
    <div class="panel-heading" >
      <button v-on:click="toggleContent" class="btn btn-primary" v-bind:class="{ active: showPointsPanel }">Toggle Points Panel<span class="badge badge-light">{{objFile.validLinesCount}} / {{objFile.linesCount}}</span></Button>
      <button v-on:click="togglePolyline" class="btn btn-primary" v-bind:class="{ active: showPolyline }">Toggle Polyline</button>{{objFile.name}}
    </div>
    <div v-if="showPointsPanel" class="panel-body">
        <Point v-bind:pointData="p" v-bind:key="p.rawLine" v-for="p in objFile.points" v-on:toggleMarker="toggleMarker"></Point>
    </div>
    <div v-if="showPointsPanel" class="panel-footer"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
import Point from '@/components/Point'
import {timeFormat, uuid} from '.././utils/utils.js'
import $ from 'jquery'

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
  components: {Point},
  data () {
    return {
      id: null,
      showPointsPanel: false,
      showPolyline: false,
      amapPloyline: null
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
    toggleMarker: function (val) {
      var hintId = val.id + '_hint'
      var dateRawLine = '[' + timeFormat(val.pointData.time) + ']:  ' + (val.pointData.rawLine)
      if (val.action === 'add') {
        $('#' + this.id).find('.panel-footer').append(' <div role="alert" id=' + hintId + ' class="alert-info" style="margin:1px;padding:1px">' + (dateRawLine) + '</div>')
        this.$emit('toggleMarker', val)
      } else {
        $('#' + hintId).remove()
        this.$emit('toggleMarker', val)
      }
    }
  },
  computed: {

  },
  mounted () {
    this.id = uuid(5, 16)
  }
}
</script>

<style>

</style>
