<template>
  <div class="row">
    <one-button @click="getInfo">按钮</one-button>
    <one-button type="primary">primary</one-button>
    <one-button type="success">success</one-button>
    <one-button type="info">info</one-button>
    <one-button type="danger">danger</one-button>
    <one-button type="warning">warning</one-button>
  </div>
  <div class="row">
    <one-button plain>按钮</one-button>
    <one-button plain type="primary">primary</one-button>
    <one-button plain type="success">success</one-button>
    <one-button plain type="info">info</one-button>
    <one-button plain type="danger">danger</one-button>
    <one-button plain type="warning">warning</one-button>
  </div>
  <div class="row">
    <one-button plain round>按钮</one-button>
    <one-button plain round type="primary">primary</one-button>
    <one-button plain round type="success">success</one-button>
    <one-button plain round type="info">info</one-button>
    <one-button plain round type="danger">danger</one-button>
    <one-button plain round type="warning">warning</one-button>
  </div>
  <div class="row">
    <one-button plain circle>按</one-button>
    <one-button plain circle type="primary">按</one-button>
    <one-button plain circle type="success">按</one-button>
    <one-button plain circle type="info">按</one-button>
    <one-button plain circle type="danger">按</one-button>
    <one-button plain circle type="warning">按</one-button>
  </div>
  <div class="row">
    <one-button icon="bluetoothon"></one-button>
    <one-button type="primary" icon="camera">照相机</one-button>
    <one-button type="success" icon="course"></one-button>
    <one-button type="info" icon="bluetooth_link"></one-button>
    <one-button type="danger" icon="addto"></one-button>
    <one-button type="warning" icon="audio"></one-button>
  </div>
  <div class="row">
    <one-button icon="bluetoothon" disabled></one-button>
    <one-button type="primary" icon="camera" disabled>照相机</one-button>
    <one-button type="success" icon="course" disabled></one-button>
    <one-button type="info" icon="bluetooth_link" disabled></one-button>
    <one-button type="danger" icon="addto" disabled></one-button>
    <one-button  @click="getInfo" type="warning" icon="audio" disabled></one-button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    getInfo(e) {
      console.log(e)//获取信息！！
    }
  }
};
</script>

<style lang="scss">
.row {
  padding: 12px;
  one-button {
    margin-right: 6px;
  }
}
</style>
