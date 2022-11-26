// // (CHAPTER 1)
// // 1
// var username
// //2
// var myname="Aeiyan khan";
// //3
// var message="Hello world";
// alert(message)
// //4
// var name='Aeiyan';
// var year='17 yearold';
// var course='web and app';
// alert(name)
// alert(year)
// alert(course)
// //5
// alert('pizza \npizz \npiz \npi \np')
// //6
// var  email='My email address is aeiyankhan2@gmail.com';
// alert(email)
// //7
// var book='Iam trying to learn from book A smarter way to learn JavaScript';
// alert(book)
// //8
// document.write('yah! I can write HTML content through javascript')
// //9
// alert('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”')
// //(CHAPTER 2)
// //1
// alert('Hi welcome')
// //2
// alert('error! please enter a valid password')
// //3
// alert('Welcome to js land... \nHappy coding!')
// //4
// alert('welcome to jsland...')
// alert('Happy coding')
// //5
// console.log('Hello... I can run js through my web  browser,s console')
// (Chapter 3)
// 1
// var age= prompt('Enter age')
// alert('Iam'+age+ 'year old')
//2
// alert('You have visited this site 14 times')
//3
// var birthyear=2006;
// document.write('My birth year is'+ birthyear)
// document.write("<br>"+"Data type of my decleared variable is"+ typeof(birthyear))
//4
// var visitor=prompt("Your name")
// var product=prompt("Your Product")
// var qty=prompt("enter quantity")
// document.write(visitor+"ordered"+ qty + product+"on XYZ Clothing store")
//(chapter4)
//1
// var a=10,b=12,c=14
//2
//legal variable
// var my_name
// var X
// var mynameis
// var my_name_is
// var $my_name
//illegal variable
// var you&a
// var 3my_name
// var ~name
// var @my
// var #_name
//3
// document.write("<h1>"+"Rules for naming js variable"+"</h1>")
// document.write("<br>"+"Variable names can only contain,numbers,and_. For example $my_1stVariable")
// document.write("<br>"+"Variables must begin with a letter,$ or_. For example $name, _name or name")
// document.write("<br>"+"Variable names are case sensative")
// document.write("<br>"+"Variable names should not be JS keywords")
//(Chapter5)
//1
// var num1=parseInt(prompt("enter number 1"))
// var num2=parseInt(prompt("enter number 2"))
// var sum=num1+num2
// document.write("sum of"+ num1 +"and"+num2+"is"+sum)
//2
// var num1=prompt("enter number 1");
// var sum=prompt("enter sign")
// var num2=prompt("enter number 2");
// if (sum=='-'){
//     var sub=num1-num2
//     document.write(sub)
// }
// else if (sum=="*"){
//     var mlp=num1*num2
//     document.write(mlp)
// }
// else if (sum=="/"){
//     var div=num1/num2
//     document.write(div)
// }
// else if (sum=="%"){
//     var mod=num1%num2
//     document.write(mod)
// }
// else{
//     document.write("invalid Operation")
// }
//3
// var num
// document.write("Value after variable declaration is"+  num)
// var num=5
// document.write("<br>"+"Initialvalue:"+num)
// var num=5+1
// document.write("<br>"+"Value after increment is:"+ num)
// var num=6+7
// document.write("<br>"+"Value after addition is:"+ num)
// var num=13-1
// document.write("<br>"+"Value after decrement is:"+ num)
// var num=12/3
// document.write("<br>"+"The remainder is :"+num)
//4
// var ticket="600"
// var ans=ticket*5
// document.write("Total cost to buy 5 tickets to a movie is"+ ans)
//5
// document.write("Table of 4")
// document.write("<br>"+"4 X 1 ="+ 4*1)
// document.write("<br>"+"4 X 2 ="+ 4*2)
// document.write("<br>"+"4 X 3 ="+ 4*3)
// document.write("<br>"+"4 X 4 ="+ 4*4)
// document.write("<br>"+"4 X 5 ="+ 4*5)
// document.write("<br>"+"4 X 6 ="+ 4*6)
// document.write("<br>"+"4 X 7 ="+ 4*7)
// document.write("<br>"+"4 X 8 ="+ 4*8)
// document.write("<br>"+"4 X 9 ="+ 4*9)
// document.write("<br>"+"4 X 10 ="+ 4*10)
//6
// document.write("<h1>"+"The temperature convertor"+"<h1>")
// var cel="25"
// var fah=cel*9/5+32
// document.write("25°C is"+fah)
// var fa="70"
// var cel=70-32/1.8
// document.write("<br>"+"70℉ is"+cel)
//7
// document.write("<h1>"+"Shopping cart"+"</h1>")
// var item1=650
// document.write("price of item1 is" + item1)
// var qty1=3
// document.write("<br>"+"quantity of item1 is" + qty1)
// var item2=100
// document.write("<br>"+"price of item2 is"+item2)
// var qty2=7
// document.write("<br>"+"quantity of item 2 is"+ qty2)
// var sc=100
// document.write("<br>"+"Shipping charges is"+sc)
// var ans=item1*qty1+item2*qty2+sc
// document.write("<br>"+"<br>"+"Total cost of your order"+ans)
//8
// var tl=prompt("enter total marks")
// var obt=prompt("enter obtained marks")
// document.write("<h1>"+"MARK SHEET"+"</h1>")
// document.write("Total marks:"+tl)
// document.write("<br>"+"Obtained marks"+obt)
// var per=obt/tl*100
// document.write("<br>"+"percentage"+per)
//9
// document.write("<h1>"+"Currency in PKR "+"</h1>")
// var usd=prompt("enter dollar")
// var riyal=prompt("Enter riyal")
// var pkr=(usd*104.80+riyal*28)
// document.write("Total currency in  PKR:"+pkr)
//10
// var a =(5*10/2)
// document.write(a)
//11
// document.write("<h1>"+"Age calculater"+"</h1>")
// var cy=prompt("Enter current year")
// var by=prompt("Enter birth year")
// document.write("Your age is:"+(cy-by))
//12
// var radius =prompt("Enter radius")
// var ans=(2*3.142*radius)
// var area=ans.toFixed(2)
// document.write("<h1>"+"The Geometrizer"+"</h1>")
// document.write("Radius of a circle:"+ radius)
// document.write("<br>"+"The circumference is"+ans)
// document.write("<br>"+"The area is:"+area)
//13
// var snack=prompt("enter your favorite snack")
// var cage=prompt("enter your current age")
// var mage=prompt("enter your maximum age")
// var day=prompt("Enter you eat snack per day")
// var ans=((mage-cage)*365)
// document.write("<h1>"+"The lifetime calculater"+"</h1>")
// document.write("<br>"+"favourite snack:"+snack)
// document.write("<br>"+"Current age:"+cage)
// document.write("<br>"+"Estimated maximum age:"+mage)
// document.write("<br>"+"Amount of snack per day:"+day)
// document.write("<br>"+"You will need"+"&nbsp"+ans+"&nbsp"+ snack+"&nbsp"+"to last you until the ripe old age of"+mage)
//chapter no 6-10
//1
// document.write("Result")
// var a=10
// console.log(a)
// // document.write("<br>"+"The value of a is:"+a)
//  var a=++a
//  console.log(a)
// // document.write("<br><br><br>"+"The value of ++a is :"+a)
// // document.write("<br>"+"Now the value of a is :"+a)
// var a=a++
// console.log(a)
// // document.write("<br>"+"The value of a++ is:"+a)
// // document.write("<br>"+"Now the value of a is:"+a)
// var a=--a
// console.log(a)
// // document.write("<br>"+"The value of --a is:"+a)
// // document.write("<br>"+"Now the value of a is :"+a)
//2
// var a = 2, b = 1;
// document.write("a is"+ a)
// document.write("<br>"+"b is"+ b)
// var result = --a - --b + ++b + b--
// document.write("<br>"+"Result is"+ result)
//3
// name=prompt("Enter your name")
// document.write("WELCOME"+name)
//5
// var  table=prompt("Enter  Table no")
// if(table==""||table==CharacterData){
//     document.write("5 X 1 ="+5*1)
//     document.write("<br>"+"5 X 2 ="+5*2)
//     document.write("<br>"+"5 X 3 ="+5*3)
//     document.write("<br>"+"5 X 4 ="+5*4)
//     document.write("<br>"+"5 X 5 ="+5*5)
//     document.write("<br>"+"5 X 6 ="+5*6)
//     document.write("<br>"+"5 X 7 ="+5*7)
//     document.write("<br>"+"5 X 8 ="+5*8)
//     document.write("<br>"+"5 X 9 ="+5*9)
//     document.write("<br>"+"5 X 10 ="+5*10)
// }
// else{
// document.write(table+"X 1 ="+table*1)
// document.write("<br>"+table+"X 2 ="+table*2)
// document.write("<br>"+table+"X 3 ="+table*3)
// document.write("<br>"+table+"X 4 ="+table*4)
// document.write("<br>"+table+"X 5 ="+table*5)
// document.write("<br>"+table+"X 6 ="+table*6)
// document.write("<br>"+table+"X 7 ="+table*7)
// document.write("<br>"+table+"X 8 ="+table*8)
// document.write("<br>"+table+"X 9 ="+table*9)
// document.write("<br>"+table+"X 10 ="+table*10)
// }
//6
// var eng=parseInt(prompt("Enter english number"))
// if(eng>=0 && eng<=100){
//     var urdu=parseInt(prompt("Enter Urdu marks"))
//     if(urdu>=0 && urdu<=100){
//         var math=parseInt(prompt("Enter Math marks"))
//         if(math>=0 && math<=100){
//             var tm=eng+urdu+math
//             var tper=tm/300*100
//             document.write("<table>")
//             document.write("<tr>")
//             document.write("<th>Subject</th>")
//             document.write("<th>Total marks</th>")
//             document.write("<th>Obtained marks</th>")
//             document.write("<th>percentage</th>")
//             document.write("</tr>")
//             document.write("<tr>")
//             document.write("<td>English</td>")
//             document.write("<td>100</td>")
//             document.write("<td>"+eng+"</td>")
//             document.write("<td>"+eng/100*100+"%"+"</td>")
//             document.write("</tr>")
//             document.write("<tr>")
//             document.write("<td>URDU</td>")
//             document.write("<td>100</td>")
//             document.write("<td>"+urdu+"</td>")
//             document.write("<td>"+urdu/100*100+"%"+"</td>")
//             document.write("</tr>")
//             document.write("<tr>")
//             document.write("<td>Math</td>")
//             document.write("<td>100</td>")
//             document.write("<td>"+math+"</td>")
//             document.write("<td>"+math/100*100+"%"+"</td>")
//             document.write("</tr>")
//             document.write("<tr>")
//             document.write("<td></td>")
//             document.write("<td>300</td>")
//             document.write("<td>"+tm+"</td>")
//             document.write("<td>"+tper.toFixed()+"%"+"</td>")
//             document.write("</tr>")
//             document.write("</table>")
            


//         }
//         else(document.write("You enter  incorrect marks of math"))

//     }
//     else(document.write("You enter  incorrect marks of urdu"))
// }
// else(document.write("You enter  incorrect marks of english"))
//Chapter no 9-11
//1
// var city = prompt("Enter a city: ")
// if(city.toLowerCase()=== "karachi"){
//     alert("Welcome to city of lights")
// }

// else {
//   alert("This not the city of lights")
// }
//2
// var gender=prompt("Enter your gender")
// if(gender.toLowerCase()=== "male"){
//     alert("Good morning sir")
// }
// else if(gender.toLowerCase()=== "female"){
//     alert("Good morning Ma'am")
// }
// else{alert("Incorrect operation")}

//3
// var color = prompt("Enter the color of traffic road signal: \n Red, Yellow or Green");
// if (color.toLowerCase()==="red"){
//     document.write(("Must Stop"));
// } 
// if (color.toLowerCase==="yellow"){
//     document.write(("Ready to Move"));
// } 
// if (color.toLowerCase=== "green"){
//     document.write(("Move Now"));
// } 
//4
// var fuel = +prompt("Enter remaining fuel in litre: ");
//  if(fuel<= 0.25){
//      alert("Please refill the fuel in your car")
//  }
//  else{
//     alert("Let's drive you have enough fuel")
//  }
//5
//a
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//     }

// //b
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }
// //c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }

// if (c === 13){ 
//     alert("condition 2 is true"); 
//     }

// if (++c < 14){ 
//     alert("condition 3 is true"); 
//     } 

// if(c === 14){ 
//     alert("condition 4 is true"); 
//     }

// //d
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     }

// //e
// if (true){ 
//     alert("True"); 
//     } 

// if (false){ 
//     alert("False"); 
//     }
// //f

// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// }
//6
// var obtainedMarks = +prompt("Enter your  Marks in three subjects: ");
// var totalMarks = +prompt("Enter total Marks: ");
// var percentage = (obtainedMarks / totalMarks) * 100;

// document.write("<h2>" + "Mark Sheet" + "</h2>");
// document.write("Total Marks: " + totalMarks + "</br>");
// document.write("Marks Obtained: " + obtainedMarks + "</br>");
// document.write("Percentage: " + percentage + "</br>");

// if (percentage >= 80 && percentage < 100){
//     document.write("Grade: A1" + "<br>");
//     document.write("Remarks: Excellent" + "<br>");
// }

// else if (percentage >= 70 && percentage < 80){
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks: Good" + "<br>");
// }

// else if (percentage >= 60 && percentage < 70){
//     document.write("Grade: B" + "<br>");
//     document.write("Remarks: You need to improve" + "<br>");
// }

// else if (percentage < 60){
//     document.write("Grade: Fail" + "<br>");
//     document.write("Remarks: Sorry" + "<br>");
// }

// else{
//     document.write("Invalid Input" + "<br>");
// }
//7
// var snum = 6;
// var guess = +prompt("Guess any number from 1 - 10")

// if(guess === snum){
//     alert("Bingo! Correct answer")
// }
// else if(guess === snum+1 || guess === snum-1){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Try Again")
// }
//8
// var num = +prompt("Enter any number: ");
// if(num % 3 === 0){
//     alert("number is divisible by 3")
// }
// else{
//     alert("number do not divisible by 3")
// }
//9
// var num = +prompt("Enter number to check number is even or odd");
// if (num % 3 === 0){
//     alert(num + " is odd number");
// }
// else{
//     alert(num + " is even number");
// }
//10
// var temperature = +prompt("Enter your city temperature: ");
// if (temperature > 40){
//     alert("It is too hot outside");
// }
// else if (temperature > 30){
//     alert("The weather today is Normal");
// }
// else if(temperature > 20){
//     alert("Today's Weather is cool");
// }
// else{
//     alert("OMG! Today's weather is so Cool");
// }
//11
// var firstNumber = +prompt("Enter First Number: ");
// var secondNumber = +prompt("Enter Second Number: ");
// var operator = prompt("Choose your operator: \n( + , - , * , / , % )");
// document.write("<h3>" + "Calculator" + "</h3>");
// document.write("First Number: " + firstNumber + "</br>");
// document.write("Second Number: " + secondNumber + "</br>");
// if (operator === "+"){
//     document.write("Result: " + firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
// }
// else if (operator === "-"){
//     document.write("Result: " + firstNumber + " - " + secondNumber + " = " + (firstNumber - secondNumber));
// }
// else if (operator === "*"){
//     document.write("Result: " + firstNumber + " x " + secondNumber + " = " + (firstNumber * secondNumber));
// }
// else if (operator === "/"){
//     document.write("Result: " + firstNumber + " / " + secondNumber + " = " + (firstNumber / secondNumber));
// }
// else if (operator === "%"){
//     document.write("Result: " + firstNumber + " % " + secondNumber + " remainder is: " + (firstNumber % secondNumber));
// }
// else{
//     document.write("Wrong Input");
// }
//chapter12-13
//1
// var  check=prompt("Enter any Letter,number,special character")
// var value = check.charCodeAt(0);
// if (value >= 48 && value <= 57){
//     alert(check + " is number");
// }
// else if (value >= 65 && value <= 90 ){
//     alert(check + " is Uppercase Letter");
// }
// else if (value >= 97 && value <= 122 ){
//     alert(check+ " is Lowercase Letter");
// }
// else{
//     alert(check+"is a special character");
// }
//2
// var firstnum=+prompt("Enter number 1")
// var lastnum=+prompt("Enter number 2")
// if(firstnum>lastnum){
//     alert(firstnum+"is larger")
// }
// else if(firstnum<lastnum){
//     alert(lastnum+"is larger")
// }
// else if(firstnum==lastnum){
//     alert("Both number are equal")
// }

// else{alert("Incorrect Operation")}
//3
// var num = +prompt("Enter a number");

// if (num > 0){
//     alert(num + " is Positive");
// }

// else if (num < 0){
//     alert(num + " is Negative");
// }
// else if (num == 0){
//     alert(num + " is zero");
// }
//4
// var character = prompt("Enter character to check vowel or not");

// if (character.toLowerCase() === "a" || character.toLowerCase() === "e" || character.toLowerCase() === "i" || character.toLowerCase() === "o" || character.toLowerCase() === "u"){
//     alert(character + " is vowel");
// }
// else{
//     alert(character + " is consontant");
// }
//5
// var password = "0345";
// var check = prompt("Enter your password: ");
// if (check === password){
//     alert("Correct! password");
// }
// else if(check==""){
//     alert("Please enter your password")
// }
// else{
//     alert("Incorrect Password");
// }
//6
// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }
//7
// var time = +prompt("Enter any hour as 24 format");
// if(time >= 0 && time < 12){
//     alert("Good Morning!")
//  }
// else if(time >= 12 && time < 17){
//     alert("Good Afternoon!")
//  }
// else if(time >= 17 && time < 21){
//     alert("Good Evening!")
//  }
// else if(time >= 21 && time < 23.9){
//     alert("Good Night!")
//  }
//Chapter14-16
//1
// array=[]
//3
// a=["Ayan","khan"]
//4
// a=[1,2,3]
//5
// var arr =[]

//  for(var i=0;i<5;i++){   
// var data = prompt("enter value")
//    if(data==""){
//    console.log("no enter data")
//    break
//   }
//     else{
//    arr.push(data)
//    document.write(arr)

// }
//  }
//6
// a=[23,"aeiyan",45,"Smit"]
//7
// document.write("<h1>Qualification</h1>"+"<br>")
// var edu=["1)SSC", "2)HSC", "3)BCS","4)BS","5)BCOM","6)MS","7)M.Phil","8)PhD"]
// for(var i=0;i<edu.length;i++){
//     document.write(edu[i]+"<br>")
// }
//8
// var studentNames = ["Aeiyan", "khan", "ali"];
// var studentMarks = [300, 375, 489];

// document.write("numbers of " + studentNames[0] + " is " + studentMarks[0] + ". Percentage: " + ((studentMarks[0] / 500) * 100) + "<br>");
// document.write("numbers of" + studentNames[1] + " is " + studentMarks[1] + ". Percentage: " + ((studentMarks[1] / 500) * 100) + "<br>");
// document.write("numbers of" + studentNames[2] + " is " + studentMarks[2] + ". Percentage: " + ((studentMarks[1] / 500) * 100) + "<br>");
//9
// var colorNames = [];
// console.log(colorNames);

// var addStartColor = prompt("Add color in begining: ");
// colorNames.unshift(addStartColor)
// console.log(colorNames);

// var addLastColor = prompt("Add color in last: ");
// colorNames.push(addLastColor)
// console.log(colorNames);

// var addStartColor = prompt("Add color in begining 1: ");
// colorNames.unshift(addStartColor)
// var addStartColor2 = prompt("Add color in begining 2: ");
// colorNames.unshift(addStartColor2)
// console.log(colorNames);



// colorNames.shift()
// console.log(colorNames);


// colorNames.pop()
// console.log(colorNames);


// var index = prompt("Enter index number: ");
// var newcolor = prompt("Enter color: ");

// colorNames.splice(index,newcolor);
// console.log(colorNames);


// var pos = prompt("Enter index number: ");
// var del = prompt("How many color wants to delete: ");

// colorNames.splice(index,del);
// console.log(colorNames);
//10
// var studentMarks = [320, 230, 480, 123];
// document.write("Score of Students: " + studentMarks + "<br>");
// document.write("Ordered Score of Students: " + studentMarks.sort());
//11
// city=["Karachi","Quetta","Islamabad","hyderabad","peshawar"]
// document.write("Cities List<br>"+city)
// var slectcity=[]
// slectcity=city.slice(2,4)
// document.write("<br>Cities List<br>"+slectcity)
//12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array:" + "<br>" + arr + "<br>" + "<br>");
// var joinarr = arr.join(" ");
// document.write("String:" + "<br>" + joinarr  );
//13
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("Devices:" + "<br>" + devices + "<br/>" );
// for(i=0;i<devices.length;i++){
//     var out = devices.shift();
// console.log("Out:"+ out);
// i=i-1
// }
//14 :
// var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
// document.write("Devices:" + "<br>" + devices + "<br/>" );
// for(i=0;i<devices.length;i++){
//     var out = devices.pop();
// console.log("Out:"+ out);
// i=i-1
// }
// //15 :
// var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// for(i=0;i<phoneManufacturers.length;i++){
// document.write("<Select>");
// document.write("<option>" + phoneManufacturers[i] + "</option>");
// document.write("</Select>");
// }