function ageInDays() {
    var Age = prompt("Enter your year of birth")
    var ageInDayss = (2022 - Age) * 365;
    var h1 = document.createElement("h1");
    var text = document.createTextNode("You are " + ageInDayss + " days old. ");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(text);
    document.getElementById("Result").appendChild(h1);

}

function reset() {
    document.getElementById("Result").remove();
}