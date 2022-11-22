const chartToggle = document.getElementById("chartCheckbox");

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

}