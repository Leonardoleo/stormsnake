const orders = ds.dataset("test");

test.select()
 .limit(2)
 .offset(5)
 .subscribe(records =>{}, err=>{}) // Will return an array of 2 records, starting from position 5