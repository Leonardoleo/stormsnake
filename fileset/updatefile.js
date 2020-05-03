jfs.fileset("testleon")
 .update({ "isDefaultImage": false })
 .where(field => field("name").isEqualTo("companyLogo.png"))
 .subscribe();