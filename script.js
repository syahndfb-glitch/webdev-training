let score=75;
if (score >= 90)
{
    console.log("A grade");
    document.getElementById("ifelse").innerHTML =
        "Grade: A Grade";

}
    else if (score >=70)
{ 
    console.log ("B Grade");
    document.getElementById("ifelse").innerHTML =
        "Grade: B Grade";
}
    else
{
    console.log ("Try Again");
    document.getElementById("ifelse").innerHTML =
        "Grade: Try again";
}



// Block-Scoped, reassignable
    let name1 = "Alice";

// Block-Scoped, constant
    const age = 25;

    // Avoid -Function Scoped
    var old = "legacy";

    console.log(name1);
    console.log(age);
    console.log(old);

    document.getElementById("demo").innerHTML = 
        
        "Name: " + name1 + 
        "<br> Age: " + age +
        "<br> Old: " + old;





for (let i=0; i < 5; i++)
{
    console.log(i);
    document.getElementById("countloop").innerHTML +=
    "Count:" +i + "<br>";
}

//while loop
let j = 0;

while (j<3)
{
    console.log(j);
    document.getElementById("whileloop").innerHTML +=
    "Count:" +j + "<br>";
    j++;
}

function greet(name)
{
    return "hello, " + name;
}
    document.getElementById("greeting").innerHTML = greet("world");


    let fruits = ["Apple", "Orange", "Banana"];

    fruits.push("Mango")

    document.getElementById("fruit1").innerHTML =
    "Fruit Length: " + fruits.length + "<br>" + "fruit:" + fruits + "<br>" + "fruit:"+ fruits [3-2];


    const person =
    {
        name: "Alice",
        age: 28,
        isStudent: true,

        greet: function()
        {
            return "Hi, I am " + this.name;
        }
    };

    document.getElementById("personInfo").innerHTML =
        "Name: " + person.name + "<br>" +
        "Age " + person.age + "<br>" +
        "Student " + person.isStudent + "<br>" +
        person.greet();

        const btn = document.getElementById("myButton");
        btn.addEventListener("click", 
            function(event) {
            event("Button clicked!");
        }
    );
// Arrow function shorthand
btn.addEventListener("click", (event),(e)

te
  