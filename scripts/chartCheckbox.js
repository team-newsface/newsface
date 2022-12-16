const chartToggle = document.getElementById("chartCheckbox");
const offText = document.getElementById("offText");
const ctnContainer = document.getElementById("ctnContainer")

let onOff = localStorage["onOff"]
if (onOff == null) {
    onOff = ""
}
chartToggle.checked = onOff

chartToggle.onclick = () => {
    localStorage["onOff"] = chartToggle.checked // save by string
}

if (onOff == "false") {
    chartToggle.checked = false;
    ctnContainer.style.display = "none"
    offText.style.display = "flex"
} else {
    ctnContainer.style.display = "block"
    offText.style.display = "none"
}

