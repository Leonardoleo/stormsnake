jfs.fileset("testleon")
 .delete()
 .where(field => field("size").isGreaterThan(1024000))
 .subscribe();
 