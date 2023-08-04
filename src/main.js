import { createApp } from 'vue';
import { Tabbar, TabbarItem } from '@nutui/nutui';
import { IconFont } from '@nutui/icons-vue';
import '@nutui/icons-vue/dist/style_iconfont.css';

const app = createApp();
app.use(Tabbar, TabbarItem, IconFont);
