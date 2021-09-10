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
          class="cardblue1 white--text"
          depressed
          block
          height="40"
          rounded
          v-ripple="false"
          v-bind="attrs"
          v-on="on"
          @click="next"
          >
          <i class="fas fa-grin-stars fa-2x "></i>
          </v-btn>
          <v-btn
          class=" cardblue0 white--text"
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
          혜택 알아보기
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
              color="cardblue0"
              icon
              plain
              v-ripple="false"
              @click="before"
            >
              <i class="fas fa-arrow-left fa-2x"></i>
            </v-btn>
            
            <v-spacer></v-spacer>
            <v-toolbar-title class="toolbar-font cardblue1--text">
              전자과 과비?
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
              color="cardblue0"
              icon
              plain
              v-ripple="false"
              @click="dialog=false"
            >
              <i class="fas fa-times fa-2x"></i>
            </v-btn>
        </v-app-bar>

        <v-card-text>
            <h class="maintext">
              ‘전기및전자공학부 학생회비(aka 과비)’는 본회의 재정을 구성하며, 과비를 납부하면 학생회칙에 따라 전기및전자공학부 학생회가 주최하는 모든 자치활동에 참여할 <h class="strong">권리를 보장</h>받을 수 있어요.
            </h>
            <v-card class="rounded-corner cardborder2 my-2" elevation="0" align="center">
              <v-card-text>
                 <v-img src="https://user-images.githubusercontent.com/50997319/132789071-9329b080-4969-4c24-a3c8-a7b42546d77d.png"></v-img>
              </v-card-text>
            </v-card>
            <h class="maintext">
              과비를 납부해주셨기 때문에 <h class="strong">졸업 시까지 </h>행사 참여, 경품 당첨 등 전자과의 <h class="strong">혜택을 200%</h> 누리실 수 있어요.
              이번 학기 전자과 학생회가 하는 사업이 궁금하시다면 아래의 버튼을 눌러 인스타그램 게시물을 봐주세요.
            </h>
            
            <v-row class="mt-2 px-2 pb-2" justify="center">
            <v-col cols="12" sm="4" class="py-1 px-1" >
              
                <v-hover v-slot="{hover}">
                  <transition name="fade" mode="in-out">
                  <v-btn
                  v-if="hover"
                  class="cardblue1 white--text"
                  depressed
                  block
                  height="40"
                  rounded
                  v-ripple="false"
                  v-bind="attrs"
                  v-on="on"
                  @click="openSNS()"
                  >
                  <i class="fab fa-instagram fa-2x "></i>
                  </v-btn>
                  <v-btn
                  class="cardblue0 white--text"
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

            </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>

</template>

<script>
  export default {
    data(){
      return {
        dialog: null,
      }
    },
    components:{

    },
    methods: {
      openSNS(){
        window.open("http://instagram.com/shoutoutto.ee")
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
  border: 3px solid #317FE1;
}
.cardborder2{
  border: 3px solid #317FE1;
}
.strong {
  font-family: 'CookieRunOTF-Bold';
  color: #2370ce;
  letter-spacing: -0.1px;
  font-size: 18px;
  line-height: 1.5;
}
</style>