<template>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="600px"
      content-class="elevation-0"
      hide-overlay
    >
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{hover}">
          <transition name="fade" mode="in-out">
          <v-btn
          v-if="hover"
          class=" primary--text"
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          >
          <i class="fas fa-meh-rolling-eyes fa-2x "></i>
          </v-btn>
          <v-btn
          class=" primary--text"
          v-else
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          >
          과비를 내면 뭐가 좋나요?
          </v-btn>
          </transition>
          
        </v-hover>
        
      </template>
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
              전자과 과비?
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
              ‘전기및전자공학부 학생회비(aka 과비)’는 본회의 재정을 구성하며, 과비를 납부하면 학생회칙에 따라 전기및전자공학부 학생회가 주최하는 모든 자치활동에 참여할 권리를 보장받을 수 있어요.
            </h>
            <v-card class="rounded-corner cardborder2 my-2" elevation="0" align="center">
              <v-card-text>
                 <v-img src="../assets/그림1.png"></v-img>
              </v-card-text>
            </v-card>
            <h class="maintext">
              과비 납부는 항시 가능하며, 재학 기간 중 한 번만 납부하시면 졸업 시까지 행사 참여, 경품 당첨 등 전자과의 혜택을 200% 누리실 수 있어요.
            </h>
            
            <v-row class="mt-2 px-2 pb-2" justify="center">
            <v-col cols="12" sm="4" class="py-1 px-1" >
              
                <v-hover v-slot="{hover}">
                  <transition name="fade" mode="in-out">
                  <v-btn
                  v-if="hover"
                  class=" primary--text"
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="openSNS()"
                  >
                  <i class="fas fa-meh-rolling-eyes fa-2x "></i>
                  </v-btn>
                  <v-btn
                  class=" primary--text"
                  v-else
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="openSNS()"
                  >
                  샤라웃투 EE
                  </v-btn>
                  </transition>
                  
                </v-hover>
            
            
            </v-col>
            <v-col cols="12" sm="4" class="py-1 px-1">
              <gopay></gopay>
            </v-col>

            </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>

</template>

<script>
import gopay from "./gopay.vue"
  export default {
    components:{
      gopay
    },
    methods: {
      openSNS(){
        window.open("http://instagram.com/shoutoutto.ee")
      },
      kill() {
        this.$emit("kill")
        console.log("kill emitted")
        this.dialog = !this.dialog
      }
    }

  }
</script>

<style lang="scss" scoped>
.v-btn{
  font-family: 'CookieRun-Regular';
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
  color: #594E32;
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
.cardborder2{
  border: 3px solid #317FE1;
}
</style>