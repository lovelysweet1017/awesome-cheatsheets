/* *******************************************************************************************
 * GLOBAL CONFIG
 * Vue.config is an object containing Vue’s global configurations.
 * You can modify its properties listed below before bootstrapping your application.
 * https://vuejs.org/v2/api/#Global-Config
 * ******************************************************************************************* */


Vue.config.devtools = true        // Configure whether to allow vue-devtools inspection
Vue.config.performance = true     // Enable component init, compile, render and patch performance tracing in the browser devtool timeline.
Vue.config.productionTip = false  // Prevent the production tip on Vue startup.
Vue.config.silent = false         // Suppress all Vue logs and warnings

// Make Vue ignore custom elements defined outside of Vue
Vue.config.ignoredElements = [
  'my-custom-web-component',
  'another-web-component',
  /^ion-/
]

// Define custom key alias(es) for v-on.
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase won`t work
  mediaPlayPause: 179,
  // instead you can use kebab-case with double quotation marks
  "media-play-pause": 179,
  up: [38, 87]
}

// Assign a handler for uncaught errors during component render function and watchers. 
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in. Only available in 2.2.0+
}

// Define custom merging strategies for options
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1
}

// Assign a custom handler for runtime Vue warnings.
// Note this only works during development and is ignored in production.
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
}


/* *******************************************************************************************
 * GLOBAL API
 * https://vuejs.org/v2/api/#Global-API
 * ******************************************************************************************* */
