import { allNav } from "./allNav";

export const getNav = (role)=>{
    const finalNavs = []

    // console.log('getNav method is called')
    // console.log(allNav)
    // console.log(allNav[1])
    // console.log(allNav[1].role)
    for (let i = 0; i < allNav.length; i++) {
        if (role === allNav[i].role) {
            // console.log('in forloop')
            finalNavs.push(allNav[i])
        }        
    }
    // console.log('Final Array is: ', finalNavs)
    return finalNavs

}