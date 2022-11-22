// chrome.action.disable();

// const url = 'https://newface.deta.dev/'
// console.log(url)



function getTime() {
    let today = new Date()
    let hours = today.getHours() // 시
    let minutes = today.getMinutes()  // 분
    let seconds = today.getSeconds()  // 초
    console.log(`${hours}:${minutes}:${seconds}`)
}

// setInterval(() => {
//     getTime()
// }, 1000);


chrome.contextMenus.create({
    title: `${seconds}`,
    contexts: ["all"],
    id: "parent",
});
chrome.contextMenus.create({
    title: "Child Item 1",
    contexts: ["all"],
    parentId: "parent",
    id: "child1",
});
chrome.contextMenus.create({
    title: "Child Item 2",
    contexts: ["all"],
    parentId: "parent",
    id: "child2",
});


setInterval(() => {
    getTime()
}, 1000);
