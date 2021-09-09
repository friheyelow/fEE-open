import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ec4e88',
        secondary: '#00838f',

        blue0: '#2FB8CE',
        blue1: '#25AABE',
        orange0: '#FD923A',
        orange1: '#FB7E2A',
        pink0: '#EE6796',
        pink1: '#E44C81',
        green0: '#96D63E',
        green1: '#84C732',
        purple0: '#CB63E5',
        purple1: '#BD52D8',
      }
    }
  }

});
