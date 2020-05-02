const test = ds.dataset("test");

posts
 .select()
 .sorcAsc("total")
//.sortDesc("total")
 .subscribe(records => {
     // You've got sorted records here
 }, err=>{});