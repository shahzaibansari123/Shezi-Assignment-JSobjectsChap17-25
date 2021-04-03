// Chapter 17-20 ARRAYS AND LOOPS

// Question 01

// var multidimensional = [[],[],[]];

// Question 02

// var multidimensional = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multidimensional[0]+"<br>");
// document.write(multidimensional[1]+"<br>");
// document.write(multidimensional[2]+"<br>");

// Question 03

// for (var i=1;i<=10;i++){
//     document.write(i+"<br>");
// }

// Question 04

// var n1=prompt("enter number: ");
// var n2=prompt("enter number: ");
//  for (var i=1;i<=n2;i++){
//      document.write(n1+"x"+i+"="+(i*n1)+"<br>");
//  }

// Question 05

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0;i<fruits.length;i++){
//     document.write("Element at "+i+" is "+fruits[i]+"<br>");
// }

// Question 06

// var lst = []
// for (var i=1; i<=20;i++){
//     lst.push(i);    
// }
// document.write("Counting: "+lst);
// document.write("<br>");
// document.write("Reverse: "+lst.reverse());
// document.write("<br>");
// var evenn = [];
// var odd = [];
// var series = [];
// for (var j=0;j<lst.length;j++){
//     if (j%2==0){
//         evenn.push(j);
//         series.push(j+"k");
//     }else{
//         odd.push(j);
//     }
// }       
// document.write("Even: "+evenn);
// document.write("<br>");
// document.write("Odd: "+odd);
// document.write("<br>");
// document.write("Series: "+series);

// Question 07

// var items = ["cake","apple pie","cookie","chips","patties"];
// var search  = prompt();
// var found = false;
// for (var i=0; i<items.length;i++){
//     if (search==items[i]){
//         found = true;
//         document.write(search + " is avalaible");
//     }
// }
// if (found==false){
//     document.write(search + " is not avalaible");
// }

// Question 08

//  var arr = [24, 53, 78, 91, 12];
//  document.write("Array Items: "+arr+"<br>")
//  arr.sort();
//  arr.reverse();
//  document.write("Largest number is: "+arr[0]);

// Question 09

// var arr = [24, 53, 78, 91, 12];
// document.write("Array Items: "+arr+"<br>")
// arr.sort();
// document.write("Smallest number is: "+arr[0]);

// Question 10

// var num = 5;
// for (var i=1;i<=20;i++){
//     document.write(i*num+",");
// }


// Chapter 21-25 STRING METHODS

// Question 01

// var firstName = prompt("enter first name: "); //Shahzaib
// var lastName = prompt("enter last name: "); //Ansari
// var fullName = (firstName + " " + lastName);  
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// Question 02

// var favPhone = prompt("Favourite phone: "); //Samsung galaxy S6 edge Plus
// var l = favPhone.length;
// document.write("My Favorite phone is: " + favPhone + "<br>" + "String length is: " + l);

// Question 03

// var word = "Pakistani"
// var i = word.indexOf("n");
// document.write("String: " + word + "<br>" + "Index of 'n' is: " + i);

// Question 04

// var word = "Hello World"
// var i = word.lastIndexOf("l");
// document.write("String: " + word + "<br>" + "Last index of 'l' is: " + i);

// Question 05

// var word = "Pakistani"
// var ch = word.charAt(3);
// document.write("String: " + word + "<br>" + "Character at Index 3: " + ch);

// Question 06

// var firstName = prompt("enter first name: "); //Shahzaib
// var lastName = prompt("enter last name: "); //Ansari
// var fullName = firstName.concat(lastName);
// document.write(" Hello ! " + fullName + "<br>" + " Have a nice day. ");

// Question 07

// var word = "Hyderabad";
// var r = word.replace("Hyder","Islam");
// document.write("String: " + word + "<br>" + "After replacement: " + r);

// Question 08

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var newMessage = message.replaceAll('and','&');
// document.write(newMessage);

// Question 09

// var value1="472";
// var value2=Number(value1);
// document.write("Value: " + value1 + "<br>");
// document.write("Type: " + typeof(value1) + "<br>");
// document.write("Value: " + value2 + "<br>")
// document.write("Type: " + typeof(value2) + "<br>");

// Question 10

// var word = prompt("Enter the word: (convert into uppercase):");
// document.write("User Input: "+ word + "<br>");
// var upperCase= word.toUpperCase();
// document.write("Upper Case: "+upperCase+"<br>");

// Question 11

// var title="javascript"
// document.write(title[0].toUpperCase() + title.slice(1,title.length).toLowerCase());

// Question 12

// var num1=35.36;
// var num2=Number(num1.toString().replace('.', ''))
// var number=num2.toString();
// document.write(typeof(num1)+" : " + num1 + "<br>");
// document.write(typeof(number)+" : " + number + "<br>");

// Question 13

// var userName = prompt("Enter your Input: ");
// var message;
// var arr=[];
// for(var i=0;i<userName.length;i++)
// {
//     arr[i]=userName.charCodeAt(i);
//     if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//     {
//             message="Correct User Name";
//     }
//     while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
//     {
//         alert("Please enter a valid username");                                                                                                                   
//         userName=prompt("Enter your Input: ");
//         for(var i=0;i<userName.length;i++)
//         {
//             arr[i]=userName.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 break;
//             }
//         }
//     }
// }
// alert(message);

// Question 14

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery What do you want to order Sir/Ma'am");
// var find = order.toLowerCase();
// var available = items.includes(find);
// if(available == true){
//     alert(find + " is available at index " + items.indexOf(find) + " in our bakery");
// }
// else{
//     alert("We are sorry. " + find + " is not in our bakery");
// }

// Question 15

// var password = prompt("Password: ");
// var pwd = password.charCodeAt(0);
// if (((pwd >=65 && pwd <=90) || (pwd >=97 && pwd<=122)) && (password.length>6)){
//     document.write("Correct Password");
// }else{
//     document.write("Incorrect Password");
// }

// Question 16

// var university = 'University of Karachi';
// array=university.split("");
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i]+"<br>");
// }

// Question 17

// var word=prompt("Please Enter A Word: ");
// lastchar=word.charAt(word.length-1);
// document.write("User Input: "+word+"<br>");
// document.write("Last Character Of Input: "+lastchar);

// Question 18

// var text="The quick brown fox jumps over the lazy dog";
// document.write("Text: " + text + "<br>");
// text=text.toLowerCase()
// textarr=text.split(" ")
// var a=0;
// var word="the";
// for (let i = 0; i < textarr.length; i++) {
//     if (textarr[i]===word) {
//         a=a+1;
//     }  
// }
// document.write("There are "+a+" occurrence(s) of word:"+word)