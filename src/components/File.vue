<template>
  <div class="panel panel-default"  >
    <div class="panel-heading" >
      <button v-on:click="toggleContent" class="btn btn-primary">Show Points <span class="badge badge-light">{{objFile.validLinesCount}} / {{objFile.linesCount}}</span></Button>
      <button v-on:click="add2Map" class="btn btn-primary">Add to Map</button>{{objFile.name}}
    </div>
    <div v-if="showPoints" class="panel-body">
        <button class="btn btn-info" v-bind:key="p.rawLine" v-for="p in objFile.points">{{p.lng}},{{p.lat}}</button>
    </div>
  </div>
</template>

<script>
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
      showPoints: false
    }
  },
  methods: {
    toggleContent: function () {
      this.showPoints = !this.showPoints
    },
    add2Map: function () {
      console.log('notifiy to map')
      this.$emit('addPoints', {
        fileName: this.objFile.name,
        points: this.objFile.points
      })
    }
  }
}
</script>

<style scoped>

</style>
