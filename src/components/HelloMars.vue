<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <input type="file" id="my_file_input" class="btn btn-primary" multiple="multiple" @change="addFile" />
        <select v-model="selectedFilter">
          <option v-for="fltr in pointFilters" v-bind:key="fltr.method" >{{fltr.method}}</option>
        </select>
        Description({{selectedFilter}}): {{currentSelectedDescription}}
      </div>
    </div>
    <FileTray v-bind:files="chunkFiles"  v-on:togglePolyline="togglePolyline" v-on:toggleMarker="toggleMarker" ></FileTray>
    <div class="row">
      <div class="col-12">
        <div id = "container" style="width: 100%;height: 800px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
import AMap from 'AMap'
import $ from 'jquery'
import FileTray from '@/components/FileTray'

export default {
  name: 'HelloMars',
  components: {FileTray},
  data () {
    return {
      msg: 'Welcome to Your Mars App',
      selectedFilter: 'KeywordsFilter',
      pointFilters: [
        {
          name: 'Location keywords',
          description: 'Filter location infomation, Sample: PointLocation:126.432432,36.432432543,PointTime:213214432432',
          method: 'KeywordsFilter'
        }
      ],
      chunkFiles: []
    }
  },
  methods: {
    KeywordsFilter: function (lineString) {
      var matchedLocationResult = lineString.match(/PointLocation:.*?#/g)
      var matchedTimeResult = lineString.match(/PointTime:.*?#/g)

      if (lineString === undefined || lineString === null || matchedLocationResult == null || matchedTimeResult == null) {
        return null
      }
      var loc = matchedLocationResult[0].replace('PointLocation:', '').replace('#', '').split(',')
      var tm = matchedTimeResult[0].replace('PointTime:', '').replace('#', '')
      return {
        lng: loc[0],
        lat: loc[1],
        time: tm,
        rawLine: lineString
      }
    },
    addFile: function (oEvent) {
      var that = this
      var fileToJSon = function (index, oFile) {
        const promise = new Promise((resolve, reject) => {
          var reader = new FileReader()
          reader.onload = function (e) {
            console.log('file added:', oFile.name)
            if (!that.dupliccateFile(oFile.name)) {
              var data = e.target.result
              that.chunkFiles.push({
                name: oFile.name,
                chunk: data
              })
            } else {
              alert('duplicate file: ' + oFile.name)
              console.log('duplicate file of: ', oFile.name)
            }
          }
          reader.onerror = function (ex) {
            console.log(ex)
            reject(ex)
          }
          reader.readAsText(oFile, null)
        })
        return promise
      }
      var oFile = oEvent.target.files[0]
      if (oFile === undefined) {
        return
      }

      // $('#originalDataArea').empty()
      $(oEvent.target.files).each(function (index, file) {
        var promise = fileToJSon(index, file)
        promise.catch(function (err) {
          console.log(err)
          alert(err)
        })
        promise.then(function (value) {

        })
      })
    },
    dupliccateFile: function (inputname) {
      for (var i = 0; i < this.chunkFiles.length; i++) {
        if (this.chunkFiles[i].name === (inputname)) {
          return true
        }
      }
      return false
    },
    togglePolyline: function (val) {
      console.log('receive a polyline..', val)
      if (val.action === 'add') {
        window.amap.add(val.polyline)
      } else {
        window.amap.remove(val.polyline)
      }
      window.amap.setFitView()
    },
    toggleMarker: function (val) {
      console.log('receive a marker..', val)
      if (val.action === 'add') {
        window.amap.add(val.marker)
      } else {
        window.amap.remove(val.marker)
      }
      window.amap.setFitView()
    }
  },
  computed: {
    currentSelectedDescription: function () {
      for (var i = 0; i < this.pointFilters.length; i++) {
        if (this.pointFilters[i].method === this.selectedFilter) {
          return this.pointFilters[i].description
        }
      }
      return 'N/A'
    }
  },
  mounted () {
    const amap = new AMap.Map('container', {
      zoom: 11,
      center: [126.576617, 43.859237], // 中心点坐标
      viewMode: '3D'// 使用3D视图
    })
    this.$nextTick(function () {
    })
    window.amap = amap
  },
  beforeMount () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
</style>
