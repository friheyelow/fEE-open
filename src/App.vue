<template>
  <v-app>
    <v-main class="backg">
  <v-container>
    <v-row class="text-center ma-0 pa-0" align="center" justify="center">
      <v-col cols="4" class="mt-3 pt-0 pb-1" >
        <v-img
          :src="require('./assets/kaistee.svg')"
          contain
          style="max-height:70px"
      />
      </v-col>
    </v-row>
    <v-row class="text-center" justify="center" align="center">

      <v-col class="pt-0 pb-0 ma-0">
        <div style="line-height:105%" v-resize-text="{ratio:2, minFontSize: '15px', maxFontSize: '50vw', delay: 200,}">
          <h class="title1">⚡️전기및전자공학부⚡️<br/></h>
          <h class="title2">과비Check ✅</h>
        </div>
        <div></div>
        <div v-resize-text="{ratio:1.9, minFontSize: '10px', maxFontSize: '40vw', delay: 200,}">
          <h class="maintext1">~ 오픈 베타 버전 ~</h>
        </div>
        <div class="mt-1" v-resize-text="{ratio:1.3, minFontSize: '10px', maxFontSize: '25vw', delay: 200,}">
          <p class="maintext2">이름과 학번을 입력하세요!</p>
        </div>
      </v-col>
      </v-row>
    <v-row class="text-center" >
      <v-col class="pb-0 input">
        <v-text-field
          v-model="name"
          label="이름"
          class="inputf"
          placeholder="예) 김전자"
          clearable
          hide-details
          outlined
          @change="updateName"
        >
        </v-text-field>
      </v-col>

      <v-col class="pb-0 input">
        <v-text-field
          v-model="id"
          class="inputf"
          label="학번"
          hide-details
          placeholder="예) 20202222"
          clearable
          outlined
        >
        </v-text-field>
      </v-col>
    </v-row>


    <v-row class="text-center" >


      <v-col class="mx-1">
        
    <v-dialog
      v-model="dialog"
      transition="scale-transition"
      max-width="600px"
      content-class="elevation-0"
      hide-overlay
    >
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{hover}">
          <transition name="fade" mode="in-out">
          <v-btn
          class="ma-2 orange0 white--text change-font "
          v-if="hover"
          width="100"
          height="100"
          outlined
          fab
          large
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          :disabled="isBtnDisabled"
          >
          <i class="fas fa-bolt fa-3x rotate"></i>
          </v-btn>
          <v-btn
          class="ma-2 orange0--text change-font hand"
          v-else
          width="100"
          height="100"
          outlined
          fab
          large
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          :disabled="isBtnDisabled"
          >
          <i class="fas fa-bolt fa-3x"></i>
          </v-btn>
          </transition>
          
        </v-hover>
        
      </template>

      <component :is="component" @kill="kill" :inputname="firstname" @showparent="showparent"></component>
    </v-dialog>


    <v-btn
      :disabled="isBtnDisabled || isBeingLoaded"
      block
      plain
      class="pa-0"
      :ripple="false"
      color="orange1">
      {{loadingMethod()}}
    </v-btn>
      </v-col>
    </v-row>

  </v-container>
  </v-main>
  </v-app>
</template>

<script>
import axios from 'axios'

const srcurl = require('/etc/secrets/srcurl.txt')

import L0P0 from './components/L0P0.vue'
import L0P1 from './components/L0P1.vue'
import L1P0 from './components/L1P0.vue'
import L1P1 from './components/L1P1.vue'
import notfound from './components/notfound.vue'

export default {
  name: 'App',
  data(){
    return {
      name: null,
      id: null,
      eedata: [[], [], [], [], [], [], []],
      loadedSheetNumb: 0,
      dialog: null,
      firstname: null,
    }
  },
  components: {
    L0P0,
    L0P1,
    L1P0,
    L1P1,
    notfound,
  },
  created: function(){
    const sheetList = ["21F", "주전공", "복수등", "부전공", "~17", "복부", "명단x"]
    for (let i=0; i<sheetList.length; i++){
      let newUrl = srcurl.default+sheetList[i]
      axios.get(newUrl).then((response) => {
        this.eedata[i] = response.data.data
        this.loadedSheetNumb++
      })
    }
  },
  computed: {
    isBeingLoaded(){
      return !(this.loadedSheetNumb==7)
    },
    isBtnDisabled(){
      return !(this.name && this.id && this.id.length==8 && this.loadedSheetNumb==7)
    },
    component: function(){
      let name = this.name
      let id = this.id
      let data = this.eedata
      let isMember = false

        let matchlist = []
        for (let j = 0; j<data.length; j++){
          for (let i = 0; i < data[j].length; i++) {
            if (name==data[j][i].name && id==data[j][i].id){
              matchlist.push(data[j][i])
              console.log("data match!")
              if (j==0){
                isMember = true
              }
            }
          }
          
        }
        console.log("matchlist is: ", matchlist)
        if (matchlist.length == 0){
          console.log("loop ended. not found in the list")
          return `notfound`
        }
        else {
          for (let i = 0; i<matchlist.length; i++) {
            if (matchlist[i].bool1 || matchlist[i].bool2){
              if (isMember) return `L1P1`
              else return `L0P1`
            }
          }
          if (isMember) return `L1P0`
          else return `L0P0`
        }

    },
  },

  methods: {
    loadingMethod(){
      if (!(this.loadedSheetNumb==7)){
        return '넙죽이가 데이터를 긁어오고 있어요···'
      }
      else if (!(this.name && this.id && this.id.length==8)){
        return '빈칸을 채워주세요'
      }
      else {
        return '외쳐 EE!'
      }
    },
    updateName(){
      this.firstname = this.name.substring(1,)
      console.log("fistname is ", this.firstname)
    },
    kill(){
      this.dialog = !this.dialog
      console.log("close signal at app.vue")
    },
    showparent(show){
      this.dialog = show
      console.log("show at app.vue: ", show)
    }
  }
}

</script>

<style scoped>
* {
  cursor: url(./assets/cur.gif), grab;
}
.v-btn{
  letter-spacing: -0.2px;
}
.rotate{
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out;
}
@font-face {
  font-family: 'Recipekorea';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'dodam';
  src: local('dodam'), url('./assets/dodam.ttf') format("truetype");
}
@font-face {
font-family: 'UhBeeTokki';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeTokki.woff') format('woff');
font-weight: normal;
font-style: normal;
}
@font-face {
    font-family: 'Doing_well';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_03@1.0/Doing_well.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.title1{
  font-family:'Recipekorea';
  color:#2370ce;
}
.title2{
  font-family:'Recipekorea';
  color:#84C732;
}
.test{
  font-family:'Recipekorea';
}
.backg{
  background-color:#f2f4f89c;
  font-family: 'CookieRun-Regular';
  color: #594E32;
  letter-spacing: -0.1px;
}

.icon {
  font-size: 12vw;
}
@font-face {
font-family: 'UhBeeSeulvely';
src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSeulvely.woff') format('woff');
font-weight: normal;
font-style: normal;
}
@font-face {
  font-family: 'CookieRun-Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'CookieRunOTF-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/CookieRunOTF-Bold00.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
.maintext1 {
  font-family: 'UhBeeSeulvely';
  letter-spacing: -0.3vw;
  color: #25AABE;
  margin-bottom: 0;
}
.maintext2 {
  letter-spacing: -0.1vw;
  font-family: 'CookieRunOTF-Bold';
  margin-bottom: 2px;
  color: #BD52D8;
}
.v-input {
  font-size: 1em;
}
.inputf  {
  color: #ec4e88 !important;
}

.v-btn--outlined{
  border: 3px solid #FD923A;
  background-color: white;
}
.v-btn--outlined:disabled{
  border: 3px solid #d1cfce;
  background-color: rgb(235, 235, 235);
}
.hand{
    animation:rotate infinite ;
    animation-duration: 3.6s;
}
@keyframes rotate {
  0% {transform: rotate(0deg); }
  2% {transform: rotate(10deg);}
  4% {transform: rotate(0deg);}
  6% {transform: rotate(-10deg);}
  8% {transform: rotate(0deg);}
  10% {transform: rotate(10deg);}
  12% {transform: rotate(0deg);}
  14% {transform: rotate(-10deg);}
  16% {transform: rotate(0deg);}
  100% {transform: rotate(0deg);}
  
}

</style>