import { service } from "../service/index.js"
import { view } from "../view/index.js"

// const checkinComponent = () => {
    view.getCheckinHtml()

    service.getActivities().then( data => {
        data.forEach(element => {
            
        });
    })
// }