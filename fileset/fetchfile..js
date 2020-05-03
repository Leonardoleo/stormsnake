jfs.fileset("testleon")
 .select()
 .fields("name", "url")
 .where(field => field("size").isGreaterThan(1024000))
 .subscribe();

 // Array of files that fit to the condition will be returned
 // files === [{ name: "file1.jpj, url: "https://..."}, {...}, ...]