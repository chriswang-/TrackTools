<template>
  <div class="row">
    <div class="col-12">
      <div>{{msg}}</div>
      <input type="file" id="my_file_input" multiple="multiple" @click="addFile" />
      <div id = "container" style="width: 100%;height: 800px;"></div>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button>
      <button type="button" class="btn btn-success">Success</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
    </div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getUnits: function () {

    },
    addFile: function (oEvent) {
      alert('addFiles')
      var oFile = oEvent.target.files[0]
      if (oFile === undefined) {
        return
      }
      var sFilename = oFile.name
      alert(sFilename)
      // var fileNum = oEvent.target.files.length
      // var dealtNum = 0
      // var chunk = []
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
    this.getUnits()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
