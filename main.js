function sprawdzLiczbe(n){
    if(n >= 100 && n <= 200){
        let str = "Liczba "+n+" znajduje się w przedziale pomiędzy 100 i 200";
        return str;
    }   else    {
        let str = "Liczba "+n+" nie znajduje się w przedziale pomiędzy 100 i 200";
        return str;
    }
}
console.log(sprawdzLiczbe(90));
console.log(sprawdzLiczbe(100));
console.log(sprawdzLiczbe(199));
console.log(sprawdzLiczbe(200));
console.log(sprawdzLiczbe(222));