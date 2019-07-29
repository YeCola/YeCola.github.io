
import { axios } from "../axios"
export const getUserInfo = (userInfo) => {
    return {
        type: "getUserInfo",
        userInfo
    }
}

// export const updateavatar = (avatar) => {
//     return {
//         type: "updateavatar",
//         avatar
//     }
// }