<template>
  

      <v-card class="rounded-corner cardborder" elevation="0" >
        <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-btn
              color="primary"
              icon
              plain
              v-ripple="false"
            >
              <i class="fas fa-arrow-left fa-2x"></i>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-toolbar-title class="toolbar-font primary--text">
              음...
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              icon
              plain
              v-ripple="false"
            >
              <i class="fas fa-times fa-2x"></i>
            </v-btn>
        </v-app-bar>

        <v-card-text>
            <h class="maintext">{{name}}님은 이번 학기 전기및전자공학부 재학생 명단에 없지만, 예전 명단에는 있어요.
              아마 졸업/휴학/전과를 하신 것 같아요.
              휴학생이시라면, 휴학 중이어도 과비를 납부했다면 전자과 사업에 참여하실 수 있어요. 
              하지만 전자과 재학 당시 과비를 납부하신 기록이 없는 것 같아요.</h>
            
            
            <v-row class="mt-2 px-2 pb-2">
            <v-col cols="12" sm="4" class="py-1 px-1">
            <strange></strange></v-col>
            <v-col cols="12" sm="4" class="py-1 px-1">
            <strange></strange></v-col>
            <v-col cols="12" sm="4" class="py-1 px-1">
            <strange></strange></v-col>
            
            <!-- <isgood0></isgood0>
            <gopay></gopay> -->
            </v-row>

        </v-card-text>
      </v-card>
</template>

<script>
import strange from "./strange.vue"
// import isgood0 from "./isgood0.vue"
// import gopay from "./gopay.vue"

export default {
  data() {
    return {
      name: "testname",
    }
  },
  components:{
    strange,
    // isgood0,
    // gopay,
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
.toolbar-font{
  font-family: 'CookieRunOTF-Bold';
  font-weight: 500;
  font-style: normal;
  font-size: 30px;
}
.maintext {
  font-family: 'CookieRun-Regular';
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
</style>