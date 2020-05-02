import { field } from "jexia-sdk-js/node";

// Below are some examples using filters:
 where(field("title").isDifferentFrom("test")) 
.where(field("total").isBetween(1,30))
.where(field("total").isEqualOrGreaterThan(15))
.where(field("total").isEqualOrLessThan(7))
.where(field("total").isEqualTo(100))
.where(field("total").isGreaterThan(57))
.where(field("total").isLessThan(100))
.where(field("id").isInArray(["uuid1","uuid2"]))
.where(field("id").isNotInArray(["uuid1","uuid2"]))
.where(field("title").isLike("%oby"))
.where(field("title").isNotNull())
.where(field("title").isNull())
.where(field("title").satisfiesRegexp('[A-Z][0-9]*')) 

const istest = field("username").isEqualTo("test");

// In order to use conditions, 
// they need to be added to a query through the '.where' method.
ds.dataset("posts")
.select()
.where(isTest)
.subscribe(records => {}) // posts to Test);


