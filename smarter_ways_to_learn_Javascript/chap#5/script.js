// Question# 01
var num = 5;
var num2 = 8;
document.write(`Sum of ${num} and ${num2} is ${num+num2} </br>`);

// Question# 02
// repeat task1 for Sub , mul , and modulus
document.write(`Sum of ${num} and ${num2} is ${num-num2} </br>`);
document.write(`Sum of ${num} and ${num2} is ${num/num2} </br>`);
document.write(`Sum of ${num} and ${num2} is ${num*num2} </br>`);
document.write(`Sum of ${num} and ${num2} is ${num%num2} </br></br>`);

// Question# 03
// part (a)
var declarNum = initialize_num;

// part (b)
document.write(`value after decleration is ${declarNum} </br>`);

// part (c)
var initialize_num = 40;

// part (d)
document.write(`Initial Value is ${initialize_num} </br>`);

// part (e)
var increment_num = 5;

// part (f)
document.write(`Value After Increament ${++increment_num} </br>`);

// part (g)
var new_incre_num = increment_num;

// part (h)
document.write(`Value After Addition ${new_incre_num+7} </br>`);

// part (I)
var decrement_num = 13;

// part (J)
document.write(`Value After Deceament ${--decrement_num} </br>`);

// part (K)
var remainder_number = 0;

// part (l)
document.write(`the Remainder value is ${remainder_number/3} </br> </br>`);


// ---------Question# 4--------
var costOf1 = 600;
document.write(`Total cost to Buy 5 tickets to a movie is <b>${costOf1*5} PKR</b></br></br>`);

// ---------Question# 5--------
var table = 4;
document.write(`<h3> Table Of ${table} </h3>`);
document.write(`${table} X 1 = ${table*1} </br>`);
document.write(`${table} X 2 = ${table*2} </br>`);
document.write(`${table} X 3 = ${table*3} </br>`);
document.write(`${table} X 4 = ${table*4} </br>`);
document.write(`${table} X 5 = ${table*5} </br>`);
document.write(`${table} X 6 = ${table*6} </br>`);
document.write(`${table} X 7 = ${table*7} </br>`);
document.write(`${table} X 8 = ${table*8} </br>`);
document.write(`${table} X 9 = ${table*9} </br>`);
document.write(`${table} X 10 = ${table*10} </br> </br>`);



// ---------Question# 6-------
document.write(`<h2>Celsius Temperature Calculation </h2>`);

var fahr_temp = 70;
var cels_calc = (fahr_temp - 32) * (5 / 9);
document.write(
  `${fahr_temp}<sup>0</sup>F is ${cels_calc}<sup>0</sup>C  </br></br>`
);

document.write(`<h2>Fahrenheit Temperature Calculation </h2>`);

var cels_temp = 25;
var fahr_calc = cels_temp * (9 / 5) + 32;
document.write(`${cels_temp}<sup>0</sup>C is ${fahr_calc}<sup>0</sup>F </br>`);



// ---------Question# 7-------
document.write(`<h2>Shoping Cart</h2>`)
var price_of_item1 = 650;
var price_of_item2 = 100;
var  quantity_of_item1 = 3;
var  quantity_of_item2 = 7;
var shipping = 100;
document.write(`
    Price of item 1${price_of_item1} </br>
    Price of item 2${price_of_item2} </br>
    Ordered quantity of item 1${quantity_of_item1} </br>
    Ordered quantity of item 1${quantity_of_item2} </br>
    Shipping charges ${shipping} </br></br>
    Total cost Of Your Order is ${
        (price_of_item1*quantity_of_item1) + (price_of_item2*quantity_of_item2)
        +shipping
    }
    </br></br>
`);

// ---------Question# 8-------
document.write(`<h2>Marks Sheet</h2>`);
var total_marks = 980;
var obtained_mark = 804;
var percentage =  100;

document.write(`Total marks = ${total_marks} </br>
    Marks Obtained = ${obtained_mark}</br>
    Percentage = ${obtained_mark/total_marks*percentage}
    `);

 // ------------Question# 9------
document.write(`<h2>Currency in PKR</h2>`);
var us_dollar = 10;
var saudi_riyal = 28;
var exchange_rate = us_dollar * 104.80 + saudi_riyal * 28;
document.write(`Total currency in PKR : ${exchange_rate}`);
 // ------------Question# 11------
 document.write(`<h2>question 10</h2>`);
 var number = 66;
document.write((66+56)*2/4);
     
     // ------------Question# 11------
 document.write(`<h2>age Calculator</h2>`);
 var currrent_year = 2016 ;
 var birth_year = 1992;
document.write(`Current year : ${currrent_year} </br>
    Birth Year : ${birth_year} </br>
    Your Age Is ${currrent_year-birth_year}`
 );
     // ------------Question# 12------
     document.write(`<h2>The Geometrizer</h2>`);
     var radius = 20;
     var pai = 3.142;
     document.write(`Radius Of A Circle is : ${radius} </br>`);
     document.write(`Circumference of a Circle : ${2*pai*radius} </br>`);
     document.write(`The Area is : ${pai*radius **2} </br>`);

     // ------------Question# 13------
     document.write(`<h2>The Life Time Supply Calculator</h2>`);
     var fvrt_snack ='chocolate';
     var current_age = 18;
     var max_age = 28;
     var amount_per_day = 3;
     var Snack_quantity = 100;
     document.write(`Favourite Snack : ${fvrt_snack} </br>
                    Current Age : ${current_age} </br>
                    Estimated Maximum age : ${max_age}</br>
                    Amount Per Day : ${amount_per_day} </br>
 `)
    document.write(`You Will Need ${Snack_quantity} Until You reep age ${max_age}`);
