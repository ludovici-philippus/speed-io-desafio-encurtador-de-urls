import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils' // eslint-disable-line no-unused-vars
import scrollBehavior from './router.scrollBehavior.js'

const _c78cccd0 = () =>
  interopDefault(
    import('../pages/top-cem.vue' /* webpackChunkName: "pages/top-cem" */)
  )
const _64b26e57 = () =>
  interopDefault(
    import('../pages/index.vue' /* webpackChunkName: "pages/index" */)
  )

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,
  /* eslint-disable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */
  routes: [
    {
      path: '/top-cem',
      component: _c78cccd0,
      name: 'top-cem',
    },
    {
      path: '/',
      component: _64b26e57,
      name: 'index',
    },
  ],
  /* eslint-enable array-bracket-spacing, quotes, quote-props, object-curly-spacing, key-spacing */

  fallback: false,
}

export function createRouter(ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
