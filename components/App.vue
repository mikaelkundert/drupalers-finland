<template>
  <v-app id="drupalers-finland" footer>
    <main>
      <v-content>
        <v-container fluid>
          <companies></companies>
        </v-container>
      </v-content>
    </main>
    <v-footer>
      <footers></footers>
    </v-footer>
  </v-app>
</template>

<script>
const YAML = require('yamljs')
import Companies from './Company.vue'
import Footers from './Footer.vue'

export default {
  components: {
    Companies,
    Footers
  },
  YAML
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import '../css/main.css'
</style>
