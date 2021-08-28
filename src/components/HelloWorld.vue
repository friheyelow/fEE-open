<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <v-col cols="4">
        <v-img
          :src="require('../assets/kaistee.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
      <v-col cols="4">
        <v-img
          :src="require('../assets/넙죽이-01.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
      <v-col cols="4">
        <v-btn block round height="50">
          Contact
        </v-btn>
      </v-col>

      <v-col>
        <h1 class="display-2 font-weight-bold mb-4">
          전자과 과비 납부 확인
        </h1>
        <p class="subheading font-weight-regular">
          과비 납부는 항시 가능하며,
          <br>재학 기간 중 한 번만 납부하시면
          <br>*행사 참여, 경품 당첨* 등 전자과의 혜택을 200% 누리실 수 있습니다.
          <br>우리 1002-455-310519 이훈준
          <br>입금자명: '이름+학번뒷5자리'  (ex. '훈준90111')
          <br>금액: 3만원
        </p>
      </v-col>
    </v-row>
    <v-row class="text-center" >
      <v-col>
        <v-text-field
          v-model="name"
          label="이름"
          clearable
          outlined
        >
        </v-text-field>
      </v-col>

      <v-col

      >
        <v-text-field
          v-model="st_number"
          label="학번 (8자리)"
          clearable
          outlined
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="text-center" >
      <v-col class="mx-1">
        <v-btn 
          :disabled="isBtnDisabled"
          block
          color="primary"
        >조회하기</v-btn>
      </v-col>
      
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data(){
      return {
        name: null,
        st_number: null,
      }
    },
    computed: {
      isBtnDisabled(){
        return !(this.name && this.st_number && this.st_number.length==8)
      },
    }
  }
</script>
