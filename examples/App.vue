<template>
  <div>
    <!-- <div class="button">
    <ba-button>Default</ba-button>
    <ba-button type="primary">Primary</ba-button>
    <ba-button type="success">Success</ba-button>
    <ba-button type="info">Info</ba-button>
    <ba-button type="warning">Warning</ba-button>
    <ba-button type="danger">Danger</ba-button>
    <br />
    <br />
    <ba-button plain>Plain</ba-button>
    <ba-button plain type="primary">Primary</ba-button>
    <ba-button plain type="success">Success</ba-button>
    <ba-button plain type="info">Info</ba-button>
    <ba-button plain type="warning">Warning</ba-button>
    <ba-button plain type="danger">Danger</ba-button>
    <br />
    <br />
    <ba-button round>Round</ba-button>
    <ba-button type="primary" round>Primary</ba-button>
    <ba-button type="success" round>Success</ba-button>
    <ba-button type="info" round>Info</ba-button>
    <ba-button type="warning" round>Warning</ba-button>
    <ba-button type="danger" round>Danger</ba-button>

    <br />
    <br />
    <ba-button icon="eye" circle />
    <ba-button type="primary" icon="eye" circle />
    <ba-button type="success" icon="eye" circle />
    <ba-button type="info" icon="eye" circle />
    <ba-button type="warning" icon="eye" circle />
    <ba-button type="danger" icon="eye" circle />
    <br />
    <br />

    <ba-button disabled>Default</ba-button>
    <ba-button type="primary" disabled>Primary</ba-button>
    <ba-button type="success" disabled>Success</ba-button>
    <ba-button type="info" disabled>Info</ba-button>
    <ba-button type="warning" disabled>Warning</ba-button>
    <ba-button type="danger" disabled>Danger</ba-button>
    <br />
    <br />
    <ba-button plain disabled>Plain</ba-button>
    <ba-button type="primary" plain disabled>Primary</ba-button>
    <ba-button type="success" plain disabled>Success</ba-button>
    <ba-button type="info" plain disabled>Info</ba-button>
    <ba-button type="warning" plain disabled>Warning</ba-button>
    <ba-button type="danger" plain disabled>Danger</ba-button>
    <br />
    <br />
    <ba-button type="primary" icon="share-2" />
    <ba-button type="primary" icon="shopping-cart" ></ba-button>
    <ba-button type="primary" icon="trash-2" ></ba-button>
    <ba-button type="primary" icon="thumbs-up" ></ba-button>
    <ba-button type="primary" icon="search">搜索</ba-button>
    <ba-button type="primary" icon='upload' right>Upload</ba-button>
    <br />
    <br />
    <ba-button type="primary" loading='loader'>Loading</ba-button>
    <ba-button type="primary" loading='rotate-cw'>Loading</ba-button>
    <ba-button type="primary" loading='refresh-cw'>Loading</ba-button>
  </div> -->
    <!-- <div>
      <ba-button-group>
        <ba-button type="primary" icon="chevron-left">Previous Page</ba-button>
        <ba-button type="primary" icon="chevron-right" right>Next Page</ba-button>
      </ba-button-group>
      <ba-button-group>
        <ba-button type="primary" icon="check-circle"></ba-button>
        <ba-button type="primary" icon="feather"></ba-button>
        <ba-button type="primary" icon="linkedin"></ba-button>
      </ba-button-group>
    </div> -->
    <icon-list></icon-list>
  </div>
</template>

<script>
import IconList from '../packages/IconList.vue';
export default {
  components: { IconList },
  name: "App",
};
</script>
<style lang="scss"></style>;
