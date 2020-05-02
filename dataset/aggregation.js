const posts = ds.dataset("test");

posts.select()
   .fields({ fn: "sum", field: "total", alias: "sum_total"})
   .subscribe(result => {
}, err=>{});
