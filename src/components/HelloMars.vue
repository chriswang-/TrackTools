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
    <FileTray v-bind:files="chunkFiles"  v-on:addPoints="addPoints"></FileTray>
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
      selectedFilter: 'locationKeywordsFilter',
      pointFilters: [
        {
          name: 'Location keywords',
          description: 'Filter the location as keywords: Location:*.*,*,*  Sample: Location:126.432432,36.432432543',
          method: 'locationKeywordsFilter'
        }
      ],
      chunkFiles: []
    }
  },
  methods: {
    locationKeywordsFilter: function (lineString) {
      var re1 = '/Location:\\d{2,3}\\.\\d{3,15}\\,\\d{2,3}\\.\\d{3,15}/g'
      if (lineString === undefined || lineString === null || lineString.match(re1) == null) {
        return null
      }
      var loc = lineString.match(re1).replace('Location:', '').split(',')
      return {
        lng: loc[0],
        lat: loc[1],
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
    addPoints: function (val) {
      console.log('receive a points..', val)
      var path = [
        new AMap.LngLat(116.368904, 39.913423),
        new AMap.LngLat(116.382122, 39.901176),
        new AMap.LngLat(116.387271, 39.912501),
        new AMap.LngLat(116.398258, 39.904600)
      ]

      var polyline = new AMap.Polyline({
        path: path,
        borderWeight: 2, // 线条宽度，默认为 1
        strokeColor: 'red', // 线条颜色
        lineJoin: 'round' // 折线拐点连接处样式
      })
      window.amap.add(polyline)
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
      center: [116.397428, 39.90923], // 中心点坐标
      viewMode: '3D'// 使用3D视图
    })
    var marker = new AMap.Marker({
      position: [116.39, 39.9] // 位置
    })
    amap.add(marker) // 添加到地图
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
