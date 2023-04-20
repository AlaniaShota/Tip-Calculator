function tipCalculator() {
  let billAmount = document.getElementById("billAmount").value;
  let serviceQuality = document.getElementById("serviceQuality").value;
  let numPeople = document.getElementById("totalPeople").value;

  //If two inputs are empty(იმ შემთხვევაში თუ ორი ინფუტი იქნება ცარიელი)
  if (billAmount === "" || serviceQuality == 0) {
    alert("Please fill in all fields");
  }

  //If only one person do job(იმ შემთხვევაში თუ ერთი ადამიანი ესმხარურებოდა მომხმარებელს)
  if (numPeople === "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //If negative data was entered(იმ შემთხვევაში თუ ნეგატიური ციფრები იქნა შეყვანილი)

  let total = (billAmount * serviceQuality) / numPeople;
  total = Math.round(total * 100) / 100;
  total = total.toFixed(2);
  document.getElementById("total-tip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate-btn").onclick = () => tipCalculator();
