
// in js value and variable does not  on double quotation like "name":'prince'.this is your choice?
// in json does not allow comment thats why i write here value and variable always on double quotation like "name":"prince"
// there are different types of data types in json like String,number,array,object and null

var person=`
[
    {
        "Name":"Prince Raj",  
        "Roll":"1010",
        "Course":"B.Tech"
    },
    {
        "Name":"Ashutosh",
        "Roll":"10200",
        "Course":"B.Tech"
    },
    {
        "Name":"Raj Jha",
        "Roll":"1010",
        "Course":"B.Tech"
    },
    {
        "Name":"Raj Jha", 
        "Roll":1010,
        "Course":"B.Tech",
        "friends":["Aditya","Ashutosh","Jatin","Sagar"],
        "isProgrammer":"True",
        "skills":{
            "Programmming":"PHP",
            "Experience":"2 Years"
        },
        "anotherSkills":null
    }
]
`;
console.log(person);
var conobj= JSON.parse(person); //convert json string into javascript object
console.log(conobj);

var myobj={
    name:'Prince',
    roll:1010,
    course:'B.Tech',
}
console.log(myobj);
var convJson= JSON.stringify(myobj); // convert objects into json string
console.log(convJson);

