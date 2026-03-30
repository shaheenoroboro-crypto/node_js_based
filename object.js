// var person ={name:"mohammedshaheen",age:"43", place:"malappuram"}

// for (x in person){
//     console.log(person[x])
// }

//console.log(person["name"])

/// object constructor

function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log('Name: '+name+   "Age: "+age+  "place :"+place)
    }
}
var mohammedshaheenpk=new person('shaheen ',25,'Malappuram')
var MohammmedAkhil= new  person('Akhil',25,'padappramba')

mohammedshaheenpk.display()
MohammmedAkhil.display()