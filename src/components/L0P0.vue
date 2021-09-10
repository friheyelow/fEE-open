<template>
      <v-card class="rounded-corner cardborder" elevation="0" >
        <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-btn
              color="transparent"
              icon
              plain
              v-ripple="false"
              
            >
              <i class="fas fa-arrow-left fa-2x"></i>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-toolbar-title class="toolbar-font purple1--text">
              음···
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="purple0"
              icon
              plain
              v-ripple="false"
              @click="kill"
            >
              <i class="fas fa-times fa-2x"></i>
            </v-btn>
        </v-app-bar>

        <v-card-text>
            <h class="maintext">
              <h class="strong">{{inputname}}</h>님은 이번 학기 재학 명단에 없어요. 졸업/휴학/전과를 하신 것으로 보여요.
              또한, 전자과에 재학하는 동안 과비를 납부하시지 않았던 것 같아요. </h>
            
            <v-row class="mt-2 px-2 pb-2" justify="center">
            <v-col cols="12" sm="4" class="py-1 px-1">
            <strange @showparent="showparent"></strange></v-col>
            <v-col cols="12" sm="4" class="py-1 px-1">
            <isgood0 @showparent="showparent"></isgood0></v-col>
            
            <v-col cols="12" sm="4" class="py-1 px-1">
            <gopay @showparent="showparent"
            ></gopay></v-col>

            </v-row>

        </v-card-text>
      </v-card>
</template>

<script>
import strange from "./strange.vue"
import isgood0 from "./isgood0.vue"
import gopay from "./gopay.vue"

export default {
  props: {
    inputname: {
      type: String,
      required: true,
    }
  },
  data() {
    return {

    }
  },
  components:{
    strange,
    isgood0,
    gopay,
  },
  methods: {
    kill(){
      this.$emit('kill')
    },
    showparent(show){
      this.$emit('showparent',show)
    }
  },
  
}
</script>

<style lang="scss" scoped>
.v-btn{
  font-family: raleway, sans-serif;
  font-weight: 600;
  font-style: normal;
}
.v-btn--outlined{
  border: 2px solid currentColor
}
.v-card--outlined{
  border: 4px solid 

}
.strong {
  font-family: 'CookieRunOTF-Bold';
  color: #CB63E5;
  letter-spacing: -0.1px;
  font-size: 18px;
  line-height: 1.5;
}
.toolbar-font{
  font-family: 'CookieRunOTF-Bold';
  font-weight: 500;
  font-style: normal;
  font-size: 30px;
}
.maintext {
  font-family: 'CookieRun-Regular';
  color: #4e4e4e;
  letter-spacing: -0.1px;
  font-size: 18px;
  line-height: 1.5;
}
.rotate{
  transform: rotate(360deg);
  transition: all 0.4s ease-in-out;
}
.rounded-corner{
  border-radius:20px;
}
.cardborder{
  border: 3px solid #BD52D8;
}
</style>