<template>
  <div class="row">
    <div class="col-12">
      <File v-if="shouldShowFile" v-for="file in objFiles"  v-bind:key="file.name" v-bind:objFile="file"  v-on:togglePolyline="togglePolyline" v-on:toggleMarker="toggleMarker">
      </File>
    </div>
  </div>
</template>

<script>
// import AMap from 'AMap'
// import $ from 'jquery'
import File from '@/components/File'
import Extractors from '.././utils/Extractor.js'

export default {
  name: 'FileTray',
  components: {File},
  /**
   * files structor:
   *          files = parent.chunkFiles.push({
                name: oFile.name,
                chunk: data
              })
   */
  props: ['files'],
  watch: {
    files: function (newVal, oldVal) { // watch it
      console.log('files Prop changed: ', newVal, ' | was: ', oldVal)
      this.files2ObjFiles(newVal, oldVal)
    }
  },
  data () {
    return {
      objFiles: []
    }
  },
  methods: {
    files2ObjFiles: function (newVal, oldVal) {
      console.log('files2ObjFiles: ')
      this.objFiles = []
      var that = this
      this.files.forEach((value, index) => {
        var linesCount = value.chunk.split(/[\n]/g).length
        var validLinesCount = 0
        var points = []
        value.chunk.split(/[\n]/g).forEach((v, i) => {
          var filter = that.$parent.selectedExtractor
          var result = Extractors[filter](v)
          if (result != null) {
            points.push(result)
            validLinesCount++
          }
        })
        this.objFiles.push({
          linesCount: linesCount,
          validLinesCount: validLinesCount,
          name: value.name,
          points: points
        })
      })
      console.log('After files2ObjeFile', this.objFiles)
      // rawData: data,
      //   structedData: {},
      // name: oFile.name,
      //   lines: data.split(/\r|[\r]/g).length,
      //   points: that[that.selectedFilter]
    },
    togglePolyline: function (val) {
      this.$emit('togglePolyline', val)
    },
    toggleMarker: function (val) {
      this.$emit('toggleMarker', val)
    }
  },
  mounted () {
    console.log('hello FileTray')
  },
  computed: {
    shouldShowFile: function () {
      if (this.files.length === 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
</style>
