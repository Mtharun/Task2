// rest countries
let url = new XMLHttpRequest();
console.log(url);
url.open("GET","https://restcountries.com/v3.1/all");
url.send();
url.onload = function(){
    const data = JSON.parse(url.response);
    console.log(data);
    console.log(url.status);
    for (let i=0;i< data.length;i++){
        console.log(`
            CountryName : ${data[i].name.common}
            Flag : ${data[i].flags.png}
            region : ${data[i].region}
            subregion : ${data[i].subregion}
            population : ${data[i].population}
            `
        );
    }
}
console.log("********************");
//compare two json  
let obj1={
    name:"Person1",
    age:5
};

let obj2={
    age:5,
    name:"Person1"
};

JSON.stringify(obj1)===JSON.stringify(obj2);
console.log(_.isEqual(obj1, obj2));
console.log("********************");