const click = document.querySelector("#click");

let enabled = true;

click.addEventListener("click", function () {
    if (enabled == true) {
        // alert("비활성화");
        enabled = false;
    } else {
        // alert("활성화")
        enabled = true;
    }
});
