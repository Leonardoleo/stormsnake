import { jexiaClient, dataOperations,UMSModule } from "jexia-sdk-js/node";
const ds = dataOperations();
const ums = new UMSModule();

jexiaClient().init({
    projectID: "90455dd3-42ba-4f10-8c9e-7a5799e383be",
}, ds, ums);

async function main() {
  const user= await ums.signIn ({
    email: 'leo89_my@hotmail.com',
    password: 'secret-password'
  });

  let test_data = [{
    "title":"Test1",
    "total":10,
    "verified":false
  }, {
    "title":"Test2",
    "total":100,
    "verified":false
  }]
  const orders = ds.dataset("test");
  const insertQuery = orders.insert(orders_data);
  insertQuery.subscribe(records => {
     // You will always get an array of created records, including their
     // generated IDs (even when inserting a single record) 
  },
  error => {
    // If something goes wrong, the error information is accessible here
  });
}
main()