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
            <v-toolbar-title class="toolbar-font orange1--text">
              정보가 없어요
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="orange0"
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
              <h class="strong">{{inputname}}</h>님을 이번 학기 전자과 재학 명단에서도, 과거의 명단에서도 찾을 수 없었어요.<div/>
              🚗 명단에 오류/누락이 있거나<div/>
              🚕 입력하신 정보에 오타가 있거나<div/>
              🚙 코드 상의 문제일 수 있어요.<div/>
              정보를 올바르게 입력하셨는데도 이 창이 뜬다면, 당황하지 마시고 <h class="strong">새로고침</h> 후 다시 시도해주세요. 그래도 문제가 해결되지 않는다면 아래의 버튼을 눌러 문제를 신고해주세요.
              (버튼은 모바일에서만 작동합니다)
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
                  <i class="fas fa-rocket fa-2x "></i>
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
</template>

<script>
export default {
  props: {
    inputname: {
      type: String,
      required: true,
    }
  },
  methods: {
    openKatalk(){
      window.open('http://qr.kakao.com/talk/mV45Z9kUIEu3HrR5XcA8eWcspmM-')
    },
    kill(){
    this.$emit('kill')
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
  border: 3px solid #FD923A;
}
.strong {
  font-family: 'CookieRunOTF-Bold';
  color: #FD923A;
  letter-spacing: -0.1px;
  font-size: 18px;
  line-height: 1.5;
}

</style>