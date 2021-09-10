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
            <v-toolbar-title class="toolbar-font primary--text">
              축하합니다!
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="primary"
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
              하지만 <h class="strong">{{inputname}}</h>님은 과비를 납부했기 때문에 따봉넙죽이의 행운을 받았습니다.
              아래의 <h class="strong">"따봉넙죽아 고마워"</h> 버튼을 누르면 당신을 포함한 가족 구성원 모두가 몸이 건강해지며
              하고자 하는일이 모두 잘 풀리게 될것입니다.</h>
            <v-row justify=center>
              <v-col cols="3"/>
              <v-col cols="6">
                <v-img v-if="before" src="../assets/넙죽이-05.png"/>
                <v-img v-else src="../assets/넙죽이-02.png"/>
              </v-col>
              <v-col cols="3"/>
            </v-row>
            
            <v-row class="mt-2 px-2 pb-2" justify="center">
            <v-col cols="12" sm="4" class="py-1 px-1">
                <v-hover v-slot="{hover}">
                  <transition name="fade" mode="in-out">
                  <v-btn
                  v-if="hover"
                  class="pink1 white--text"
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="change()"
                  >
                  <i class="fas fa-heart fa-2x "></i>
                  </v-btn>
                  <v-btn
                  class="pink0 white--text"
                  v-else
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="change()"
                  >
                  따봉넙죽아 고마워~♥
                  </v-btn>
                  </transition>
                  
                </v-hover>
            
            </v-col>
            <v-col cols="12" sm="4" class="py-1 px-1">
            <isgood1 @showparent="showparent"></isgood1></v-col>
            </v-row>

        </v-card-text>
      </v-card>
</template>

<script>
import isgood1 from "./isgood1.vue"

export default {
  props: {
    inputname: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      before: true,

    }
  },
  components:{
    isgood1
  },
  methods: {
    change(){
      this.before = !this.before;
    },
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
  font-family: 'CookieRun-Regular';
  letter-spacing: -0.1px;
  font-style: normal;
}
.v-btn--outlined{
  border: 2px solid currentColor
}
.v-card--outlined{
  border: 4px solid 

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
  border: 3px solid #ec4e88;
}
.strong {
  font-family: 'CookieRunOTF-Bold';
  color: #ec4e88;
  letter-spacing: -0.1px;
  font-size: 18px;
  line-height: 1.5;
}

</style>