import App from './core/App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Something',
  },
})

export default app
