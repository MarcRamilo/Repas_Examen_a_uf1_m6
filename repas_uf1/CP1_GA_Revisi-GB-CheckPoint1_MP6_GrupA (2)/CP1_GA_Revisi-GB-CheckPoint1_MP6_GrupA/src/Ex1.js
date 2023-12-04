function taulerEscacs() {

        let taulerEscacs ="";
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if((i+j) % 2 === 0){
                    taulerEscacs+=" ";
                } else{
                    taulerEscacs+="#";
                }
            }
            taulerEscacs += "\n";
        }
    
    
        return taulerEscacs;
    }
    

module.exports = { taulerEscacs };
