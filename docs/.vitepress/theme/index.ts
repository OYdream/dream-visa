import DefaultTheme from 'vitepress/theme'
import DreamHome from './components/DreamHome.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DreamHome', DreamHome)
  },
}
