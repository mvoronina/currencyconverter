function calculations() {

    //get values from the table
    var convertFrom = document.getElementById("convertFrom").value;
    var convertTo = document.getElementById("convertTo").value;

    var amountInput = parseFloat(document.getElementById("amountInput").value);
    var amountResult = parseFloat(amountResult);
    var conversionRatio = parseFloat(conversionRatio);

    //calculate converting form EURO
    if (convertFrom ==="euro"&& convertTo ==="euro")
    {
        conversionRatio =1;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "euro" && convertTo ==="us")
    {
        conversionRatio =1.13;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom ==="euro" && convertTo ==="uk")
    {
        conversionRatio = 0.87;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "euro" && convertTo ==="yen")
    {
        conversionRatio = 125.41;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "euro" && convertTo ==="cad")
    {
        conversionRatio =1.50;
        amountResult = amountInput*conversionRatio;
    }



    //calculate converting from US
    if (convertFrom === "us" && convertTo === "us")
    {
        conversionRatio =1;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "us" && convertTo === "euro")
    {
        conversionRatio = 0.88;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "us" && convertTo === "uk")
    {
        conversionRatio = 0.87;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "us" && convertTo === "yen")
    {
        conversionRatio = 110.59;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "us" && convertTo === "cad")
    {
        conversionRatio = 1.32;
        amountResult = amountInput*conversionRatio;
    }


   //calculate converting from UK
    if (convertFrom === "uk" && convertTo === "uk")
    {
        conversionRatio = 1;
        amountResult = amountInput*conversionRatio;
    }
   else if (convertFrom === "uk" && convertTo === "euro")
    {
        conversionRatio = 1.15;
        amountResult = amountInput *conversionRatio;
    }
   else if (convertFrom === "uk" && convertTo === "us")
    {
        conversionRatio = 1.31;
        amountResult = amountInput *conversionRatio;
    }
   else if (convertFrom === "uk" && convertTo === "yen")
    {
        conversionRatio = 144.46;
        amountResult = amountInput *conversionRatio;
    }
   else if (convertFrom === "uk" && convertTo === "cad")
    {
        conversionRatio = 1.73;
        amountResult = amountInput *conversionRatio;
    }

   //calculate converting from YEN
    if (convertFrom === "yen" && convertTo === "yen")
    {
        conversionRatio = 1;
        amountResult =amountInput*conversionRatio;
    }
   else if (convertFrom === "yen" && convertTo === "euro")
    {
        conversionRatio = 0.0080;
        amountResult =amountInput *conversionRatio;
    }
   else if (convertFrom === "yen" && convertTo === "us")
    {
        conversionRatio = 0.0090;
        amountResult =amountInput *conversionRatio;
    }
   else if (convertFrom === "yen" && convertTo === "uk")
    {
        conversionRatio = 0.0069;
        amountResult =amountInput *conversionRatio;
    }
   else if (convertFrom === "yen" && convertTo === "cad")
    {
        conversionRatio = 0.012;
        amountResult =amountInput *conversionRatio;
    }

   //calculate converting from CAD
    if (convertFrom === "cad" && convertTo ==="cad")
    {
        conversionRatio = 1;
        amountResult =amountInput;
    }
   else if (convertFrom === "cad" && convertTo ==="euro")
    {

        conversionRatio = 0.67;
        amountResult =amountInput*conversionRatio;
    }
   else if (convertFrom === "cad" && convertTo ==="us")
    {
        conversionRatio = 0.76;
        amountResult =amountInput *conversionRatio;
    }
   else if (convertFrom === "cad" && convertTo ==="uk")
    {
        conversionRatio = 0.58;
        amountResult =amountInput *conversionRatio;
    }
   else if (convertFrom === "cad" && convertTo ==="yen") {
       conversionRatio = 83.69;
        amountResult = amountInput * conversionRatio;
    }

    amountResult=(amountResult).toFixed(2);

if (convertTo==="choose" || convertFrom ==="choose"){
    document.getElementById("result").innerHTML = "";
}
else
    document.getElementById("result").innerHTML = formatDigits(amountResult)
        +" "+capitalize(convertTo)+
    " (" +conversionRatio+ ":1)";
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function formatDigits(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

