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
        <div style="line-height:105%" v-resize-text="{ratio:1.6, minFontSize: '26px', maxFontSize: '100px', delay: 200,}">
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
        <input type="hidden" id="accountInfo"/>
      </v-col>
      </v-row>
    <v-row class="text-center" >
      <v-col class="pb-0">
        <v-text-field
          v-model="name"
          label="이름"
          class="inputf"
          placeholder="예) 김전자"
          clearable
          hide-details
          outlined
        >
        </v-text-field>
      </v-col>

      <v-col class="pb-0">
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
        <v-btn
          v-if="isBeingLoaded"
    
          disabled
          block
          plain
          color="primary">넙죽이가 데이터를 긁어오고 있어요...
        </v-btn>
        <v-btn 
          v-else
          
          :disabled="isBtnDisabled"
          block
          plain
          color="primary"
          @click="enter"
        >조회하기</v-btn>
        <L0P0></L0P0>
      </v-col>
    </v-row>

  </v-container>
  </v-main>
  </v-app>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'
const srcurl = require('./assets/srcurl.txt')

import L0P0 from './components/L0P0.vue'

export default {
  name: 'App',
  data(){
    return {
      name: null,
      id: null,
      case: null,
      eedata: [[], [], [], [], [], [], []],
      loadedSheetNumb: 0,
    }
  },
  components: {
    L0P0
  },
  created: function(){
    const sheetList = ["21F", "주전공", "복수등", "부전공", "~17", "복부", "명단x"]
    for (let i=0; i<sheetList.length; i++){
      let newUrl = srcurl.default+sheetList[i]
      console.log("srcURL:", srcurl.default)
      console.log("newURL:", newUrl)
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
      return !(this.name && this.id && this.id.length==8)
    },
  },

  methods: {
    enter(){
      function compareData(name, id, data){
        let matchlist = []
        for (let j = 0; j<data.length; j++){
          for (let i = 0; i < data[j].length; i++) {
            if (name==data[j][i].name && id==data[j][i].id){
              matchlist.push(data[j][i])
              console.log("data match!")
            }
          }
          
        }
        console.log("matchlist is: ", matchlist)
        if (matchlist.length == 0){
          console.log("loop ended. not found in the list")
          return 'notfound'
        }
        else {
          for (let i = 0; i<matchlist.length; i++) {
            if (matchlist[i].bool1 || matchlist[i].bool2){
              console.log("this user have paid")
              return 'yes'
            }
          }
          console.log("this user have not paid")
          return 'no'
        }

      }
        

      function fireYes(){
        Swal.fire({
            imageUrl: require('./assets/넙죽이-05.png'),
            imageHeight: 150,
            title: '축하합니다!',
            html:
              '<h class="test">과비 납는 <b>항시</b> 가능하며, </h>' +
              '재학 기간 중 <b>한 번만</b> 납부하시면 '+
              '<b>행사 참여, 경품 당첨</b> 등 전자과의 혜택을<br/>😍200%😍<br/>누리실 수 있습니다 🙌<br/>'+
              '우리 1002-455-310519 이훈준<br/>'+
              '입금자명: \'이름+학번뒷5자리\'  (ex. \'훈준90111\')<br/>'+
              '금액: 3만원<br/>'
            ,
            showCloseButton: true,
            customClass: {
              title: 'swal2title'
            },
            focusConfirm: true,
            confirmButtonText:
            '따봉넙죽아 고마워~💛',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.case="yes2"
            }
          })
      }

      function fireNo(){
        Swal.fire({
          icon: 'warning',
          title: '과비를 납부하지 않았어요',
          showCloseButton: true,
          text: 'ㅠㅠ',
          focusConfirm: false,
          confirmButtonText: 'ㅠㅠ',
        })
      }

      function fireError(){
        Swal.fire({
          icon: 'question',
          title: '정보를 조회할 수 없어요',
          text: '입력하신 이름과 학번이 명단에 존재하지 않아요. 정보를 올바르게 입력하셨는데도 이 창이 뜬다면 당황하지 마시고 카톡 챗봇을 통해 알려주세요!',
          showCloseButton: true,
          showCancelButton: true,
          cancelButtonText: '닫기',
          confirmButtonText: `소통EE 채팅하기`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            window.open("http://pf.kakao.com/_SVxdFT","_self")
          }
        })
      }

      this.case = compareData(this.name, this.id, this.eedata)
      if (this.case=='yes') fireYes()
      else if (this.case=='no') fireNo()
      else fireError()
      
      
    },
    showPayInfo(){
      function copyAccount(){
        const accountInfo = document.getElementById("accountInfo")
        accountInfo.type = 'text'
        accountInfo.value = '우리 1002-455-310519 이훈준'
        accountInfo.select()
        document.execCommand("copy")
        accountInfo.selectionEnd = accountInfo.selectionStart
        accountInfo.value = ''
        accountInfo.type = 'hidden'
      }
      Swal.fire({
        icon: 'info',
        html:
          '<h>과비 납부는 <b>항시</b> 가능하며, </h>' +
          '재학 기간 중 <b>한 번만</b> 납부하시면 '+
          '<b>행사 참여, 경품 당첨</b> 등 전자과의 혜택을<br/>😍200%😍<br/>누리실 수 있습니다 🙌<br/>'+
          '우리 1002-455-310519 이훈준<br/>'+
          '입금자명: \'이름+학번뒷5자리\'  (ex. \'훈준90111\')<br/>'+
          '금액: 3만원<br/>'
          ,
        showCloseButton: true,
        showCancelButton: true,
        showDenyButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-copy"></i> 계좌 정보 복사하기',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '닫기',
        denyButtonText: '<i class="fa fa-instagram"></i> 학생회 인스타그램',
      }).then((result)=>{
        if (result.isConfirmed) {
          copyAccount()
          alert('계좌가 복사되었어요.')
        } else if (result.isDenied) {
          window.open("http://instagram.com/shoutoutto.ee")
        }
      })
    }
  }
}

</script>

<style scoped>
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
  color:#5A54CF;
}
.title2{
  font-family:'Recipekorea';
  color:#ec4e88;
}
.test{
  font-family:'Recipekorea';
}
.backg{
  background-color:#fff7cb;
  font-family: 'CookieRun-Regular';
  color: #594E32;
  letter-spacing: -0.1px;
}
.paybtn{
  color: #ec4e88;
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
  color: #157a7a;
  margin-bottom: 0;
}
.maintext2 {
  letter-spacing: -0.1vw;
  font-family: 'CookieRunOTF-Bold';
  margin-bottom: 0;
}
.v-input {
  font-size: 1em;
}
.inputf  {
  color: #ec4e88 !important;

}
.swal2title  {
  font-family: 'CookieRun-Regular';
}

</style>