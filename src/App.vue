<template>
  <v-container>
    <v-row class="text-center" justify="center" align="center">
      <v-col cols="4">
        <v-img
          :src="require('./assets/kaistee.svg')"
          class="my-3"
          contain
          height="100"
        />
        
      </v-col>
      <v-col cols="4">
        <v-img
          v-show="this.case=='yes'"
          :src="require('./assets/넙죽이-02.png')"
          class="my-3"
          contain
          height="100"
        />
        <v-img
          v-show="this.case=='no'"
          :src="require('./assets/넙죽이-05.png')"
          class="my-3"
          contain
          height="100"
        />
        <v-img
          v-show="this.case=='yes2'"
          :src="require('./assets/넙죽이-05.png')"
          class="my-3"
          contain
          height="100"
        />
        <v-img
          v-show="this.case=='error'"
          :src="require('./assets/넙죽이-06.png')"
          class="my-3"
          contain
          height="100"
        />
        <v-img
          v-show="this.case==null"
          :src="require('./assets/넙죽이-01.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>
      <v-col cols="4">
        <v-hover v-slot="{hover}">
          <v-btn v-if="hover" block round height="50" class="paybtn">
            <i class="fas fa-hand-holding-usd rotate"></i>
            <v-text class="ml-1">Join</v-text>
          </v-btn>
          <v-btn v-else block round height="50" class="paybtn">
            <i class="fas fa-hand-holding-usd"></i>
            <v-text class="ml-1">Join</v-text>
          </v-btn>
        </v-hover>
      </v-col>

      <v-col>
        <h1 class="display-2 font-weight-bold mb-4">
          전자과 과비 납부 확인
        </h1>
        <p class="subheading font-weight-regular">
          이름과 학번을 입력하세요!
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
          v-model="id"
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
          @click="showAlert"
        >조회하기</v-btn>
      </v-col>
      
    </v-row>

  </v-container>
</template>

<script>
import Swal from 'sweetalert2'
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      name: null,
      id: null,
      case: null,
      url: "https://script.googleusercontent.com/macros/echo?user_content_key=REnrDPv9DMi20UT1aIfN1bGC5Jg0_VWORLyjhY7gOo_4-j2Apq1rMGsyly5wha3GBdhN2JG0cZfLMhQJfrDf4AB7l3DQ7vjkOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHawU5RwtN1n-PgPm0zS8FVyPTsgf2W1LcWWTjgyABiCNwescgP-iqikAj8oA9QqrKD5IwIxVnpQ4C1S-CINmJ16Oiu4KMG0dyd83BI-dLAEELVKjLHQ4mSKXs-G6lcwKxZg&lib=Mw1WTMMCev1up4LqHkwc4ZB_mdlfhbD35",
      eedata: [],
    }
  },
  created: function () {
    axios.get(this.url).then((response) => {
      this.eedata = response.data.data
      console.log('done',this.eedata)
    })
  },
  computed: {
    isBtnDisabled(){
      return !(this.name && this.id && this.id.length==8 && this.eedata.length>0)
    },
  },

  methods: {
    compareWithData(){
      
    }
  }
}

</script>

<style scoped>
.paybtn{
  letter-spacing: -0.1px;
}
.rotate{
    transform: rotate(360deg);
    transition: all 0.3s ease-in-out;
}
</style>