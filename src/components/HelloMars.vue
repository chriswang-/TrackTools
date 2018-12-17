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
    <div class="row">
      <div class="col-12">
        <div v-if="shouldShowFile" v-for="file in rawFiles"  v-bind:key="file.name" style="border:1px solid #ff00ee" >
          <div>{{file.name}}</div>
          <div>file content</div>
        </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div id = "container" style="width: 100%;height: 800px;"></div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import AMap from 'AMap'
import $ from 'jquery'

export default {
  name: 'HelloMars',
  data () {
    return {
      msg: 'Welcome to Your Mars App',
      selectedFilter: '',
      pointFilters: [
        {
          name: 'Location keywords',
          description: 'Filter the location as keywords: Location:*.*,*,*',
          method: 'locationKeywordsFilter'
        }
      ],
      rawFiles: []
    }
  },
  methods: {
    locationKeywordsFilter: function (lineString) {
      var re1 = /Location\\:[0-9]*,[0-9]*/g
      return lineString.match(re1)
    },
    addFile: function (oEvent) {
      var that = this
      var fileToJSon = function (index, oFile) {
        const promise = new Promise((resolve, reject) => {
          var reader = new FileReader()
          reader.onload = function (e) {
            var data = e.target.result
            that.rawFiles.push({
              data: data,
              name: oFile.name,
              lines: data.split(/\r|[\r]/g).length
            })
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
    },
    shouldShowFile: function () {
      if (this.rawFiles.length === 0) {
        return false
      } else {
        return true
      }
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
