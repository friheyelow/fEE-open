<template>
    <v-dialog
      v-model="dialog"
      transition="fade-transition"
      max-width="600px"
      content-class="elevation-0"
      hide-overlay
    >
      <template v-slot:activator="{ on, attrs }">
        <v-hover v-slot="{hover}">
          <transition name="fade" mode="in-out">
          <v-btn
          v-if="hover"
          class="orange1 white--text"
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          @click="next"
          >
          <i class="fas fa-meh-rolling-eyes fa-2x "></i>
          </v-btn>
          <v-btn
          class="orange0 white--text"
          v-else
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          @click="next"
          >
          냈던 것 같은데···
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
              color="orange0"
              icon
              plain
              v-ripple="false"
              @click="before"
            >
              <i class="fas fa-arrow-left fa-2x"></i>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-toolbar-title class="toolbar-font orange1--text">
              오류 신고
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="orange0"
              icon
              plain
              v-ripple="false"
              @click="dialog=false"
            >
              <i class="fas fa-times fa-2x"></i>
            </v-btn>
        </v-app-bar>

        <v-card-text class=text-center>
            <h class="maintext">
              총무가 수기로 구글 스프레드시트를 수정하는 과정에서 문제가 생겼을 수 있어요.
              당황하지 마시고 아래의 버튼을 눌러 저희에게 알려주시면
              빠르게 해결해드릴게요! (버튼은 모바일에서만 작동합니다)
            </h>
            <v-row class="mt-2 px-2 pb-2" justify="center">
            <v-col cols="12" sm="4" class="py-1 px-1" >
              
                <v-hover v-slot="{hover}">
                  <transition name="fade" mode="in-out">
                  <v-btn
                  v-if="hover"
                  class="orange1 white--text"
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="openKatalk()"
                  >
                  <i class="fas fa-rocket fa-2x"></i>
            
                  </v-btn>
                  <v-btn
                  class="orange0 white--text"
                  v-else
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="openKatalk()"
                  >
                  담당자 호출!
                  </v-btn>
                  </transition>
                  
                </v-hover>
            
            
            </v-col>


            </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>

</template>

<script>
  export default {
    data(){
      return {
        dialog: false,
      }
    },

    methods: {
      openKatalk(){
        window.open('http://qr.kakao.com/talk/mV45Z9kUIEu3HrR5XcA8eWcspmM-')
      },
      before(){
        this.$emit("showparent", true)
        console.log("before clicked")
        this.dialog = false
      },
      next(){
        this.$emit("showparent", false)
        console.log("next clicked")
        this.dialog = true
      }
    }

  }
</script>

<style  scoped>
.v-btn{
  font-family: 'CookieRun-Regular';
  letter-spacing: -0.1px;
  font-style: normal;
}
.v-btn--outlined{
  border: 2px solid currentColor
}
.v-card--outlined{
  border: 4px solid;

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
  border-radius: 20px;
}
.cardborder{
  border: 3px solid #FD923A ;
}

</style>

