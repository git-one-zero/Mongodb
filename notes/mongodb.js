//basic structure of mongodb -
// Database-->Collection-->Document-->Data

// basic commands for mongodb
//create db :
//use dbName
//use flipkart

//create collection
// db.createCollection("mobile");
//db is used to point to the current directory(database)
//to insert data;
//1.insertOne({}):to insert single document
db.mobile.insertOne({name:"iphone 18pro",price:18000,color:"purple"});
//2.insertMany([{},{}]):to insert many multiple documents
db.mobile.insertMany([
    {name:"iphone 18 pro" ,price:18000,color:"purple"};
    {name:"iphone 18 pro" ,price:18000,color:"purple"};
    {name:"iphone 18 pro" ,price:18000,color:"purple"};

]);
db.jspiders.insertOne({name:"pqr",age:23})//implicit createcollection
// capped collection
db.createCollection("jspider",{capped:true,max:3,size:10000});//10000bytes
db.jspiders.insertMany([
    {name:"abc",age:21},
    {name:"xyz",age:22},
    {name:"mno",age:26}
]);
