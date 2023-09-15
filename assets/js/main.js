function calcTrink() {
  const bill = Number(document.querySelector("#bill").value);
  const person = Number(document.querySelector("#person").value);
  const service = Number(document.querySelector("#service").value);

  document.querySelector("#trinkGeld").innerHTML =
    "Das Trinkgeld beträgt: " + (bill * service - bill).toFixed(2) + "€";

  document.querySelector("#gesamtBetrag").innerHTML =
    "Der Gesamtbetrag beträgt: " + (bill * service).toFixed(2) + "€";

  document.querySelector("#preisPerson").innerHTML =
    "Der Preis pro Person beträgt: " +
    ((bill * service) / person).toFixed(2) +
    "€";
}
