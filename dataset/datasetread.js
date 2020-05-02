// Jexia client
import { jexiaClient, dataOperations, field } from "jexia-sdk-js/node";   //jexia-sdk-js/browser

const ds = dataOperations(); 

jexiaClient().init({
    projectID: "90455dd3-42ba-4f10-8c9e-7a5799e383be",
    key: "8d574c40-a2ec-4e7d-9f09-ee944d1f3e74",
    secret: "arqfSojsVwWS2IsL0+1X/EvRSp+4kaU6o5CySAvWV4kZQKuQKdG4P+9Yg2MefgmsjNkJmx65qAk+mEXF2ctKtQ==",
}, ds);


const test = ds.dataset("test");
const selectQuery = test
    .select()
    .where(field => field("verified").isEqualTo(true))
// .fields("id", "title") // to select specific fields from record.  You can also pass an array of field names too
// .where(field("title").isDifferentFrom("test")) 
// .where(field("qty").isBetween(1,30))
// .where(field("qty").isEqualOrGreaterThan(15))
// .where(field("qty").isEqualOrLessThan(7))
// .where(field("qty").isEqualTo(100))
// .where(field("qty").isGreaterThan(57))
// .where(field("qty").isLessThan(100))
// .where(field("ibsn").isInArray(my_val))   // my_val=['978-1-56619-909-4','978-1-56619-303-4'];
// .where(field("auth_id").isNotInArray(my_val))   // my_val=[1,7];
// .where(field("title").isLike("Moby dick"))
// .where(field("qty").isNotNull())
// .where(field("qty").isNull())
// .where(field("qty").satisfiesRegexp('a-z0-9'))   
   selectQuery.subscribe(records => {
        // You will always get an array of created records, including their
        // generated IDs (even when inserting a single record)
   }, 
   error => {
       // If something goes wrong, the error information is accessible here
   });
