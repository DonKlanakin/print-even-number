setTimeout(() => {
    let input = prompt("fill number");
    if (!input) {
        // check if falsy
    } else if (input % 2 === 0) {
        alert("even");
        console.log("even");
        document.getElementsByTagName("p")[0].innerHTML = "even";
    }
}, 400);