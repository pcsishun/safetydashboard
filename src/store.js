import { createStore } from 'vuex' 

export default createStore({

    state:{
        username:'',
        isMenuOpen: false,
        cssGoogleMapContainer:"set-googlemap-container",
        cssEmergencyInfo:"set-emergency-info-close",
        setmenu:"set-menu",
        setsidemenu: "set-menu-container",
        myDefaultPosition: { lat: 13.746791, lng:100.535458 },
        muDefaultZoom: 12,
 

        // vvvv userSelectEmergency collect data in array like this vvvv // 
        // {
        //     text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
        //     user: "Earth(test)",
        //     matLine: "Telehealth Development",
        //     timing: "9 ชม.",
        //     location: {lat:13.727795, lng:100.532462}
        // },
        userSelectEmergency: "",
        
        // mock emergency data // 
        emergencyList: [{
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "1 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.727795, lng:100.532462}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "2 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.711606, lng:100.490628}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "3 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.775360, lng:100.673387}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "4 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.889880, lng:100.560813}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "5 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.638319, lng:100.577770}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "6 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.765298, lng:100.637522}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "7 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.730496, lng:100.540191}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "8 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.746103, lng:100.545748}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "9 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.749054, lng:100.545456}
        },
        {
            text:"กดปุ่มขอความช่วยเหลือ (Anywhere)",
            user: "10 Earth(test)",
            matLine: "Telehealth Development",
            timing: "9 ชม.",
            location: {lat:13.778514, lng:100.390810}
        }],
    },
    mutations:{
        closingMenuSideBar(state){
            state.isMenuOpen = false
            state.setmenu = "setmenu"
            state.setsidemenu = "set-menu-container"
            state.cssGoogleMapContainer = "set-googlemap-container"
            // if(state.cssEmergencyInfo === "set-emergency-info"){
            //     state.cssEmergencyInfo = "set-emergency-info-close"
            // }
            // state.cssEmergencyInfo = "set-emergency-info-close"
        },

        haddleMenu(state){
            if(state.isMenuOpen === false){
                state.setmenu = "open setmenu"
                state.setsidemenu = "isopen-set-menu-container"
                state.cssGoogleMapContainer = "bind-set-googlemap-container"
                state.isMenuOpen = true

            }else{
                state.setmenu = "setmenu"
                state.setsidemenu = "set-menu-container"
                state.cssGoogleMapContainer = "set-googlemap-container"
                state.isMenuOpen = false
            }

        },

        haddleSelectEmergency(state,payload){
            
            state.myDefaultPosition = payload.location;
            state.muDefaultZoom = 15;
            // state.cssEmergencyInfo = 'set-emergency-info';
            this.commit('haddleEmergencyMarker', payload)
 

        },
        haddleEmergencyMarker(state,payload){
            state.cssEmergencyInfo = "set-emergency-info"
            state.userSelectEmergency = payload;
            console.log(payload)
        },
        closeEmergencyDetail(state){
            state.cssEmergencyInfo = "set-emergency-info-close"
        }
    }

})