setTimeout(() => {
    let input = prompt("fill number");
    if (input === null) {
        alert("Invalid input.");
        console.log("Invalid input.");
    } else if (input % 2 === 0) {
        alert("even");
        console.log("even");
        document.getElementsByTagName("p")[0].innerHTML = "even";
    } else {
        alert("Invalid input.");
        console.log("Invalid input.");
    }
}, 400);