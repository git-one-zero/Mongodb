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

/*
mongodb methods-->

what is database ?
what is a collection :group of documents,storing the data in the form of key value pair,exist inside the db ,no limit for the data 
but we can limit by using caped collection.
what is a document:collection or group of keyvalue pairs(fields):1 field=1 keyvalue pair
{key : value }
max size of document is 16mb
exist inside collection
objectId:generated automatically by mongodb during document creation
id represented as string 
it is a 12 byte hexadecimal string
first 4 bytes are for timestamp in millisec(each byte is 2 )
second 5 bytes are for random values
last 3 bytes are for increment
acts as a primary key of collection
we can overwrite the object id but it is highly not reccomended
operators:
special characters used to perform operations to operands 
1.query operator:<-->$lt,>-->$gt,<=-->$lte,>=-->$gte,!=-->$ne,==-->$eq,in-->$in,nin(not in)-->$nin
used for single operation
2.logical operators
$and
$or
$not
$nor

 */

// 1.find all employees whose salary is greater than 2500
db.emp.find({sal:{$gt:2500}})
//2.find all the employees whose salary is less than 1250
db.emp.find({sal:{$lt:1250}})
//3.find all the employees whose salary is greater than or equal to 3000
db.emp.find({sal:{$gte:3000}})
//4.find all the employees whose salary is less than or equal to 1500
db.emp.find({sal:{$lte:1500}})
//5.find all the employees whose job is equal to manager
db.emp.find({job:"manager"})
//6.finde all the employees whose job is not equal to salesman.
db.emp.find({job:{$ne:"salesman"}})
//7.find all the employees who works in department 10,20 or 30.
db.emp.find({deptno:{$in:[10,20,30]}})
//8.find all the employees who do not work in the department 10 or 20
db.emp.find(deptno:{$nin:[10,20]})
//9.find all the employees whose job is either clerk or analyst
db.emp.find({job:{$nin:["clerk","analyst"]}})
//10.find all employees whose salary is greater than 2000 and whose department number is 20
db.emp.find({sal:{$gt:2000},{dep:{$in:20}}}) //internally and 
//11.find all the employees earning more than 5000 but less than 3000

// syntax db.cn.find({$and:[{condition1},{condition2},condition3]})
//find all the employees whose salary is greater than 2000 and whose department number is 20
db.emp.find({$and:[{sal:{$gt:2000}},{deptno:20}]})
//find all the employees whose salary is greater than 2000 or whose department is 20
db.emp.find({$sal:[{sal:{$gt:2000}},{deptno:20}]})
//find al the employess except whose salary is greater than 2000 or whose department number is 20
db.emp.find({$nor:[{sal:{$gt:2000}},{deptno:20}]})


//1.find employees whose salary is greater than 2000 and whose department is either 30 or 20
db.emp.find({$and:[{sal:{$gt:2000}},{$or:[{deptno:20},{deptno:30}]}]})

//2.find the employees whose salary is less than 2000 and whose job is either clerk or salesman
db.emp.find({$and:[{sal:{$lt:2000}},{$or:[{job:"clerk"},{job:"salesman"}]}]})
//3.find employes who are in department 20 and whose salary is not equal to 2000
db.emp.find({and:[{deptno:20},{sal:{$ne:2000}}]})
//4.find employees whose salary is greater than or equal to 2000 and less than or equal to 3000.
db.emp.find({$and:[{sal:{$gte:2000}},{sal:{$lte:3000}}]})
//5.find employees whose department is either 10,20 or 30 but whoose job is not manager.
db.emp.find({$and:[{job:{$ne:"manager"}},{$or:[{deptno:10},{deptno:20},{deptno:30}]}]})
//6.find employees whose salary is greater than 1500 or whose ddepartment is 10
db.emp.find({$or:[{sal:{$gt:1500}},{dept:10}]})
//7.find employees whose salary is not between 1000 and 3000
db.emp.find({$nor:[{sal:{$gt:1000}},{sal:{$lt:3000}}]})
//8.find employees who are not in department 10 or 20 and whose salary is greater than 1000
db.emp.find({$and:[{sal:{$gt:1000}},{$nor:[{deptno:10},{deptno:20}]}]})
//9.find employees whose salary is greater than 2000 and whose job is either manager or analyst
db.emp.find({$and:[{sal:{$gt:2000}},{$or:[{job:"manager"},{job:"analyst"}]}]})


