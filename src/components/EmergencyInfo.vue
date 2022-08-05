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
            {{this.$store.state.userSelectEmergency.user}}
          </div>
        </div>

        <div class="customer-info">
          <div class="title-person">
            <div class="title-set-tel-device">
              เบอร์โทรศัพท์ (อุปกรณ์)
            </div>
            <div class="title-set-tel-person">
              เบอร์โทรศัพท์ (บุคคล)
            </div>
            <div class="title-congenital-disease">
              โรคประจำตัว
            </div>
          </div>
          <div class="personal-detail">
            <div class="detail-set-tel-device">
              ---
            </div>
            <div class="detail-set-tel-person">
              xxx-xxx-xxxx
            </div>
            <div class="detail-congenital-disease">
              ---
            </div>
          </div>
          
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

        }
    },
    methods:{

    },
    mounted(){
      // console.log("emer info ==> ",this.$store.state.cssEmergencyInfo)
    },
    updated(){
      
    }
}
</script>

<style scoped>

/* open on of info */
.set-emergency-info{
    position: absolute;
    width: 500px;
    height: 100vh;
    background: white;
    left: 0;
    z-index: 999;
    transition: 0.4s;
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
  display: flex;
  justify-content: start;
  width: 80%;
  margin-left: 40px;
  margin-top: 30px;
}

.user-id{
  margin-left: 30px;
  font-size: 16px;
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


.personal-detail{
  margin-left: 30px;
}
</style>