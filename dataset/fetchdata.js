sdk.dataset("test")
.select()
.related("test", test => test.fields(""))
.subscribe(res => {
    console.log(res);
});