import { jexiaClient, dataOperations, realTime } from "jexia-sdk-js/node";
const ds = dataOperations();
const rtc = realTime();

// Initiallize Jexia Client
jexiaClient().init(credentials, ds, rtc);

const subscription = ds.dataset("test")
   .watch("created", "deleted")
   .subscribe(messageObject => {
       console.log("Realtime message received:", messageObject.data);
   }, error => {
       console.log(error);
   });

   // here put Insert or Delete operations

   subscription.unsubscribe();

