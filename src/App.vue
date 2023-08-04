<template>
  <nut-tabbar bottom safe-area-inset-bottom placeholder>
    <nut-tabbar-item v-for="(item,index) in List" :tab-title="item.title" :icon="item.icon"> </nut-tabbar-item>
  </nut-tabbar>
</template>
<script>
  import { h } from 'vue';
  import { Home, Category, Find, Cart, My } from '@nutui/icons-vue';
  export default {
    components: { Home, Category, Find, Cart, My },
    setup() {
      const List = [
        {
          title: '标签',
          icon: h(Home)
        },
        {
          title: '标签',
          icon: h(Category)
        },
        {
          title: '标签',
          icon: h(Find)
        },
        {
          title: '标签',
          icon: h(Cart)
        },
        {
          title: '标签',
          icon: h(My)
        }
      ];
      return {
        List
      };
    }
  };
</script>
