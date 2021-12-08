obj()
async function obj() {
    try {
        var data = await fetch("https://restcountries.com/v3.1/all");
        var jdata = await data.json();

        var asia = jdata.filter(n => {
            return n.region == "Asia";
        })
        console.log(asia);
        var h1 = document.createElement("h1");
        h1.innerText = "countries from Asia continent /region ";
        document.body.appendChild(h1);

        asia.forEach(element => {
            var p1 = document.createElement("p");
            p1.innerText = element.name.common;
            document.body.appendChild(p1);
        });

        var h1 = document.createElement("h1");
        h1.innerText = "countries with a population of less than 2 lakhs";
        document.body.appendChild(h1);

        var popul = jdata.filter(n => {
            return n.population < 200000;
        })
        popul.forEach(element => {
            var p2 = document.createElement("p");
            p2.innerText = element.name.common;
            document.body.appendChild(p2);
        });

        var h1 = document.createElement("h1");
        h1.innerText = "name, capital, flag using forEach function";
        document.body.appendChild(h1);

        jdata.forEach(i => {
            var p3 = document.createElement("p");
            p3.innerText = "name:" + i.name.common + " " + "capital:" + i.capital + " ";
            document.body.appendChild(p3);
            var p4 = document.createElement("p");
            p4.innerText = "capital:" + i.capital;
            document.body.appendChild(p4);
            var p5 = document.createElement("p");
            p5.innerText = "capital:" + i.flags.png;
            document.body.appendChild(p5);
            var hr =document.createElement("hr");
            document.body.appendChild(hr);
        })

              
            arrp=[];
            jdata.forEach(function(n){
                arrp.push(n.population);
            })
            console.log(arrp);
            
            var totp= arrp.reduce(function(start,stop){
                return start+stop;

            })
            console.log(totp);
            
            var h1 = document.createElement("h1");
            h1.innerText = "total population of countries: " + totp;
            document.body.appendChild(h1);
            var hr =document.createElement("hr");
            document.body.appendChild(hr);


            
            var h1 = document.createElement("h1");
            h1.innerText = "country which uses US Dollars";
            document.body.appendChild(h1);

            var usdol = jdata.filter(function(us){
                return us.currencies == "USD";
            })
            console.log(usdol);
            var p6 = document.createElement("p");
            p6.innerText = usdol;
            document.body.appendChild(p6);

       
    } catch (error) {
        console.log(error);
    }
    console.log(jdata);
}