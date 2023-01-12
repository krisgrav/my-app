/*
NB!
Alle tekststiler ligger i componentStyles.css

*/

import { colors } from "../Colors"

export const componentstyles = {
    forecast : {
        borderRadius: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        margin: 10,
        backgroundColor: colors.grey,
        width:"fit-content"
    },
    wrapper: {
        
        border: "2px solid grey",
        borderRadius: 8
    }
}

