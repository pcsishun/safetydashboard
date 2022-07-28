<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import Navbar from "../components/Navbar.vue";
import Emergency from "../components/Emergency.vue";

export default defineComponent({
  components: { 
    GoogleMap, 
    Marker, 
    Navbar,
    Emergency
    },
    data(){
        return{
            cssGoogleMapContainer: "set-googlemap-container"
        }
    },
    setup() {
    const center = { lat: 13.746791, lng:100.535458 };
    // const themes = ['aubergine', 'dark', 'grey', 'minimal', 'retro', 'roadways', 'roadwaysMinimal', 'ultraLight'];

        return {center};
    },
    methods:{
        
    },
    mounted(){
 
    },
 
});
</script>

<template>

    <div class="safety-dashborad-container">
        <div class="set-navbar-container">
            <Navbar/>
        </div>
        <div class="set-emergency-container">
            <Emergency/>
        </div>
        <div :class="$store.state.cssGoogleMapContainer" @click="$store.commit('closingMenuSideBar')">
            <GoogleMap
            api-key="AIzaSyD8ykKnc-qmYxTXQc5c_L6uQkbTHrIwH3M"
            style="width: 100%; height: 100vh"
            :center="center"
            :zoom="12"
            backgroundColor="dark"
            mapId="2ee29cc57f571e5b"
            >
            <!-- <Marker :options="{ position: center }" /> -->
        </GoogleMap>
        </div>
        
    </div>
</template>

<style scoped>
.bind-set-googlemap-container{
    opacity: 0.5;
}

</style>