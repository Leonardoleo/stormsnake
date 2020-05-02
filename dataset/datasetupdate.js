import { jexiaClient, UMSModule, dataOperations } from "jexia-sdk-js/node";
// to use .where and .outputs
import { field } from "jexia-sdk-js/node";

const ds = dataOperations();
const ums = new UMSModule();

jexiaClient().init({
    projectID: "90455dd3-42ba-4f10-8c9e-7a5799e383be",
}, ds, ums);

async function main() {
    const user = await ums.signIn({
        email: 'leo89_my@hotmail.com',
        password: 'secretpassword'
    });

    const test = ds.dataset("test");
    const updateQuery = test 
      .update([{ id:"90455dd3-42ba-4f10-8c9e-7a5799e383be", verified: true }]) // To update 1 record with specific ID
      // .where(field => field("total").isBetween(0,50).and(field("name").isLike('%avg'))); //To update update batch of records
     
    updateQuery.subscribe(records => {
        // You will always get an array of created records, including their
        // generated IDs (even when inserting a single record)
    },
    error => {
        // If something goes wrong, the error information is accessible here
    });
    
    }
    main()