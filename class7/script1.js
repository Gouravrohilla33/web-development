let obj={
    username:'saksham',
    email:'saksham@gmail.com',
    date:'05-03-2024',
    profile:function(){
       return(`username is: ${obj.username} <br> email is:${obj.email} <br> date is :${obj.date}<br>`);
    }

}
// document.write(`username is: ${obj.username} <br> email is:${obj.email} <br> date is :${obj.date}`);
document.write(`profile is=><br> ${obj.profile()}`);

let obj2={
    makeby:'tata',
    model:'tanmpu',
    year:2024,
    car:function(){
       return(`makeby is: ${obj2.makeby} <br> model is:${obj2.model} <br> year is :${obj2.year}<br>`);
    }

}

document.write(`car is=><br> ${obj2.car()}`);
