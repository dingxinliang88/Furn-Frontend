import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 引入css
import '@/assets/css/global.css'

// 引入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入国际化需要的组件
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App).use(router).use(ElementPlus, {locale: zhCn,}).mount('#app')
