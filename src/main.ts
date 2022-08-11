import App from './core/App.svelte'

const app = new App({
  target: document.body,
  props: {
    title: 'Somethings',
  },
})

export default app
