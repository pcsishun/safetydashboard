<template>
  <div :class="$store.state.cssEmergencyInfo">
  <div v-if="$store.state.cssEmergencyInfo === 'set-emergency-info'">
      <div class="title-info">
          <div class="title-content">
            Telehealth Development
          </div>
          <div class="title-btn-out" @click="$store.commit('closeEmergencyDetail')"> 
            X
          </div>
        </div>

        <div class="user-detail">
          <div class="user-icon">
            <i class='fas fa-user-alt' style='font-size:40px'></i>
          </div>
          <div class="user-id">
            <div class="user-name">{{this.$store.state.userSelectEmergency.user}}</div>
            <div class="user-address">{{this.$store.state.userSelectEmergency.userAddress}}</div>
          </div>
        </div>

        <div class="customer-info">
          <div class="title-person">
            <div class="title-set-tel-device">
              <div class="set-name">เบอร์โทรศัพท์ (อุปกรณ์)</div>
              <!-- <div class="set-data"></div> -->
            </div>
            <div class="title-set-tel-person">
              <div class="set-name">เบอร์โทรศัพท์ (บุคคล)</div>
              <!-- <div class="set-data"></div> -->
              
            </div>
            <div class="title-congenital-disease">
              <div class="set-name">โรคประจำตัว</div>
              <!-- <div class="set-data"></div> -->
            </div>
          </div>
          <div class="personal-detail">
            <div class="detail-set-tel-device">
              <div class="set-name">{{this.$store.state.userSelectEmergency.userNumDevice}}</div>
              <!-- <div class="set-data"></div> -->
            </div>
            <div class="detail-set-tel-person">
              <div class="set-name">{{this.$store.state.userSelectEmergency.userPhone}}</div>
              <!-- <div class="set-data"></div> -->
              
            </div>
            <div class="detail-congenital-disease">
              <div class="set-name">{{this.$store.state.userSelectEmergency.congenitalDisease}}</div>
            </div>
          </div>
        </div>

        <div class="set-customer-contact">
          <div class="title-contact">ผู้ติดต่อ</div>
          <div class="customer-contact" v-for="(data, index) in $store.state.userSelectEmergency.subContact" :key="index">
            <div class="another-type">{{ data.typeCon}}</div>
            <div class="another-contact">{{data.contact }}</div>
          </div>
        </div>

        <div class="staff-in-action">
          <div class="staff-title">เจ้าหน้าที่ศูนย์ควบคุมประจำท้องที่ (กำลังปฏิบัติงาน)</div>
          <div class="set-staff-contact">
            <div class="set-name-title">UAT TESTER</div>
            <div class="staff-contact">{{$store.state.userSelectEmergency.UATAction}}</div>
          </div>
        </div>
        <div class="under-line">
          <hr/>
        </div>
        
        <div class="time-emergency">
          <div class="title-emergency">เหตุการณ์ กดปุ่มขอความช่วยเหลือ (Anywhere)</div>
          <div class="set-time-emergency">
            <div class="is-emer">เวลาเกิดเหตุ</div>
            <div class="at-emer">{{$store.state.userSelectEmergency.emergencyDate}} &nbsp; {{$store.state.userSelectEmergency.emergencyTime}}</div>
          </div>
        </div>

        <div class="confirm-emer">
          <div class="confirm-title">
            ยืนยันเหตุการณ์
          </div>
          <div class="set-confirm-emer">
            <div class="set-dropdown-select">
              <label>หน่วยฉุกเฉิน</label>
              <select class="dropdown-select">
                <option>SmartLiving Hospital</option>
              </select>
            </div>
          </div>
        </div>

        <div class="set-comment-area">
          <textarea class="area-comment" v-model="commentArea"></textarea>
        </div>

        <div class="btn-change">
          <button :class="cssBtnConfirm">ยืนยันเหตุการณ์</button>
          <button :class="cssBtnEvt">ไม่เกิดเหคุการณ์</button>
        </div>

      </div>
  </div>
</template>

<script>
export default {
    components:{

    },
    data(){
        return{
          commentArea:"",
          cssBtnConfirm:"btn-on-comment",
          cssBtnEvt:"btn-on-comment",
          cssTextArea:"btn-on-comment"
        }
    },
    methods:{
      haddleAction(){

      },
      checkComment(){
        if(this.commentArea !== ''){
          this.cssBtnConfirm = "btn-confirm"
          this.cssBtnEvt = "btn-no-evt"
        }else{
          this.cssBtnConfirm = this.cssTextArea
          this.cssBtnEvt = this.cssTextArea
        }
      }
    },
    mounted(){
      
    },
    updated(){
      this.checkComment();      
    }
}
</script>

<style scoped>

/* open on of info */
.set-emergency-info{
    position: absolute;
    width: 500px;
    background: white;
    left: 0;
    z-index: 999;
    transition: 0.4s;
    height: 100vh;
    overflow-y: scroll;
}

.set-emergency-info-close{
    position: absolute;
    width: 0;
    height: 100vh;
    left: 0;
    z-index: 1;
    transition: 0.4s;
}

/* *********** */

/* title detail */
.title-info{
  display: flex;
  justify-content: space-between;
}
.title-content{
  color: black;
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
  margin-left: 20px;
}

.title-btn-out{
  text-align: center;
  color: rgb(90, 90, 90);
  margin-right: 20px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
  width: 50px;

}

/* user detail */

.user-detail{
  color: black;
  display: flex;
  justify-content: start;
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
}

.user-id{
  color: black;
  margin-left: 30px;
  
}

.user-name{
  font-size: 16px;
}

.user-address{
  font-size: 12px
}

/* customer detail */
.customer-info{
  display: flex;
  justify-content: start;
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
  font-size: 16px;
  color: grey;
}


/* customer contact */
.set-customer-contact{
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
}

.title-contact{
  color: black;
}
.customer-contact{
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 16px;
  color: black;
}


/* staff contact */
.staff-in-action{
  margin-top: 30px;
  margin-left: 40px;
  color: black;
}

.staff-title{
  margin-bottom: 5px;
}

.set-staff-contact{
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: gray;
}
.staff-contact{
  transform: translateX(-30px);
}

.under-line{
  width: 90%;
  margin: auto;
}

hr{
  margin-top: 35px;
  border: 1px solid rgb(223, 223, 223)
}

/* time emergency */

.time-emergency{
  margin-left: 40px;
  margin-top: 3px;
}
.title-emergency{
  color: red;
  font-weight: bold;
  font-size: 16px;
}

.set-time-emergency{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
  
}
.is-emer{
  color: grey;
}

.at-emer{
  color: black;
  transform: translateX(-30px);
}


/* confirm emer */

.confirm-emer{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 6px;
  margin-left: 40px;
}

.set-confirm-emer{
  color: black;
}

select{
  margin: auto;
}

.confirm-title{
  color: black
}

label{
  color: black;
  text-align: center;
  font-size: 13px;
}
.set-dropdown-select{
  margin-right: 90px;
}

.dropdown-select{
  color: rgb(28, 28, 28);
  background-color: white;
  border-bottom: 1px solid gray;
  width: 120%;
}

/* comment text area */
.set-comment-area{
  margin-top: 30px;
  margin-left: 40px;
}
.area-comment{
  color: black;
  background: white;
  border: 1px solid gray;
  border-radius: 10px;
  width: 90%;
  height: 100px;
  text-indent: 10px;
}

/* btn action api */
.btn-change{
  margin:auto;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
}

.btn-change > button{
  margin-left: 10px;
  margin-right: 10px;
}

.btn-confirm{
  background: rgb(63, 63, 108);
  width: 170px;
  height: 40px;
  border-radius: 10px;
}

.btn-no-evt{
  background: rgb(138, 29, 29);
  width: 170px;
  height: 40px;
  border-radius: 10px;
}

.btn-on-comment{
  background: rgb(57, 57, 57);
  width: 170px;
  height: 40px;
  border-radius: 10px;
}
.personal-detail{
  margin-left: 30px;
}
</style>