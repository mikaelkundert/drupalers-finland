<template>
  <v-app id="drupalers-finland" footer>
    <main class="main-container">
      <v-content class="teal lighten-4">
        <v-container fluid>
          <section class="search-section row">
            <article class="col sm6 offset-sm6 md4 offset-md8">
              <v-text-field
                name="search"
                label="Search"
                class="input-group--focused pr-5"
                prepend-icon="search"
                single-line
                v-model="searchQuery"
                >
              </v-text-field>
            </article>
          </section>
          <section class="body-section">
            <v-row class="row-body">
              <v-card class="ma-4 company-card" v-for="company in filterCompanies">
                <v-card-row class="cyan darken-2">
                  <v-card-title>
                    <span class="white--text">{{ company.Name }}</span>
                    <v-spacer></v-spacer>
                    <v-menu id="space" bottom left origin="top right" transition="v-scale-transition">
                      <v-btn icon="icon" slot="activator" class="white--text">
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                      <v-list>
                        <v-list-item v-for="location in company.Locations">
                          <v-list-tile>
                            <v-list-tile-title>{{ location }}</v-list-tile-title>
                          </v-list-tile>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-card-title>
                </v-card-row>
                <v-card-row height="15em" :class="company.Background" class="company-logo">
                  <img :src="company.Logo" :alt="company.Name" :title="company.Name" class="pa-2 company-logo-image">
                </v-card-row>
                <v-card-row actions class="blue-grey darken-2 mt-0">
                  <v-spacer></v-spacer>
                  <a :href="company.Website" target="_blank" rel="nofollow"><button flat class="white--text">{{ company.Website }}</button></a>
                  <v-spacer></v-spacer>
                </v-card-row>
              </v-card>
            </v-row>
          </section>
        </v-container>
      </v-content>
    </main>
    <footers></footers>
  </v-app>
</template>

<script>
import Yaml from 'yamljs'
import Footers from './Footer.vue'
const YAML = Yaml
const _ = require('lodash');

export default {
  data() {
    return {
      allCompanies: _.orderBy(YAML.load('./data/companies.yml'), ['Name'], ['asc']),
      searchQuery: ''
     }
  },
  computed: {
    filterCompanies() {
       return this.findBy(this.allCompanies, this.searchQuery, 'Name')
     }
  },
  methods: {
    findBy: function (list, value, column) {
      return list.filter(function (item) {
        return item[column].toLowerCase().includes(value)
      })
    }
  },
  components: {
    Footers
  }
}
</script>

<style lang="stylus">
  @import '../css/vuetify'
</style>
