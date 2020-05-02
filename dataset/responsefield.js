const test = ds.dataset("test");

test.select()
 .fields("title",) // You can also pass an array of field names
 .subscribe(records => {}, err=>{}); // You will get array of {id, title} please keep in mind "id" is always returned