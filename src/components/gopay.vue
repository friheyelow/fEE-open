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
          class="blue1 white--text"
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          @click="next"
          >
          <i class="fas fa-donate fa-2x "></i>
          </v-btn>
          <v-btn
          class="blue0 white--text"
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
          과비 납부하기
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
              color="blue0"
              icon
              plain
              v-ripple="false"
              @click="before"
            >
              <i class="fas fa-arrow-left fa-2x"></i>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-toolbar-title class="toolbar-font blue1--text">
              납부 정보
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="blue0"
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
              우리 1002-455-310519 이훈준<div></div>
              입금자명: ‘이름+학번뒷5자리’ (ex. ‘훈준90111’)<div></div>
              금액: 3만원
            </h>
            <input type="hidden" id="accountInfo"/>
            <v-row class="mt-2 px-2 pb-2" justify="center">
            <v-col cols="12" sm="4" class="py-1 px-1" >
              
                <v-hover v-slot="{hover}">
                  <transition name="fade" mode="in-out">
                  <v-btn
                  v-if="hover"
                  class="blue1 white--text"
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="copyAccount()"
                  >
                  {{btext2}}
            
                  </v-btn>
                  <v-btn
                  class="blue0 white--text"
                  v-else
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="copyAccount()"
                  >
                  {{btext}}
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
  data() {
    return {
      btext: '계좌 복사하기',
      btext2: '계좌 복사하기',
      dialog: null
    }
    
  },
    methods: {
      copyAccount(){
        const accountInfo = document.getElementById("accountInfo")
        accountInfo.type = 'text'
        accountInfo.value = '우리 1002-455-310519 이훈준'
        accountInfo.select()
        document.execCommand("copy")
        this.btext="계좌가 복사되었어요"
        this.btext2="계좌가 복사되었어요"
        accountInfo.selectionEnd = accountInfo.selectionStart
        accountInfo.value = ''
        accountInfo.type = 'hidden'
      },
      before(){
        this.$emit("showparent", true)
        console.log("before clicked")
        this.dialog = false
        this.btext = '계좌 복사하기'
        this.btext2 = '계좌 복사하기'
      },
      next(){
        this.$emit("showparent", false)
        console.log("next clicked")
        this.dialog = true
      }
    }

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
  border: 3px solid #25AABE ;
}

</style>