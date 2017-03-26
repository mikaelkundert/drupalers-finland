<template>
  <v-app id="drupalers-finland" footer>
    <main>
      <v-content>
        <v-container fluid>
          <section class="search-section row">
            <article class="col sm4 offset-sm8">
              <v-text-field
                name="search"
                label="Search"
                class="input-group--focused pr-5"
                prepend-icon="search"
                placeholder="search"
                single-line
                >
              </v-text-field>
            </article>
          </section>
          <section class="body-section">
            <companies></companies>
          </section>
        </v-container>
      </v-content>
    </main>
    <footers></footers>
  </v-app>
</template>




<script>
import Yaml from 'yamljs'
import Companies from './Company.vue'
import Footers from './Footer.vue'
const YAML = Yaml
const _ = require('lodash');

export default {
  components: {
    Companies,
    Footers
  },
  YAML,
  _
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
</style>
