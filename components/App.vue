<template>
  <v-app id="drupalers-finland" footer>
    <main>
      <v-content>
        <v-container fluid>
          <section class="search-section">
            <v-row>
              <v-col xs4 v-for="i in 2"></v-col>
              <v-col xs4>
                <v-text-field
                  name="search"
                  label="Search"
                  class="input-group--focused pr-5"
                  prepend-icon="search"
                  placeholder="search"
                  single-line
                  >
                </v-text-field>
              </v-col>
            </v-row>
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
const YAML = require('yamljs')
import Companies from './Company.vue'
import Footers from './Footer.vue'
var _ = require('lodash');

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
