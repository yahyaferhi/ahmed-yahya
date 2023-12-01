function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
 
   if (predicate(element, index)) {
     
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}
var userData=[{
    username:"ahmed",
    password:"123456",
    role:"user"
},
{
    username:"yhya",
    password:"654321",
    role:"user"
},
{
    username:"hechmi",
    password:"147258369",
    role:"user"
},
{   username:"hama",
    password:"1920",
    role:"user"



}]
function login(username, password,role) {
    var user = userData.filter(function (user) {
        return user.username === username && user.password === password && user.role===role
    });

    return user.length > 0 

}

$("#loginBtn").on("click", function () {
    var username = $("#username").val()
    var password = $("#password").val()
    var role=$ ("#role").val()


if (login(username,password,role)) {
    
    window.location.href="../user-interface/user.html";
    }
           

           
            else {
                        alert('Invalid username or password  or role Please try again')
                      
                       
                        $("#password").val("")
                     }
            
                    })
                    






