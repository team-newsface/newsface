const ranking_one = document.getElementById("one")
const ranking_two = document.getElementById("two")
const ranking_three = document.getElementById("three")
const ranking_four = document.getElementById("four")
const ranking_five = document.getElementById("five")
const ranking_six = document.getElementById("six")
const ranking_seven = document.getElementById("seven")
const ranking_eight = document.getElementById("eight")
const ranking_nine = document.getElementById("nine")
const ranking_ten = document.getElementById("ten")

const url = `https://newface.deta.dev`
console.log(url)


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        setInterval(() => {
            // for (let index = 0; index <= 9; index++) {
            //     console.log((index + 1) + data.rankings[index])
            // }
            ranking_one.innerText = `${data.rankings[0]}`;
            ranking_one.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[0]}`)
            });
            ranking_two.innerText = `${data.rankings[1]}`;
            ranking_two.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[1]}`)
            });
            ranking_three.innerText = `${data.rankings[2]}`;
            ranking_three.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[2]}`)
            });
            ranking_four.innerText = `${data.rankings[3]}`;
            ranking_four.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[3]}`)
            });
            ranking_five.innerText = `${data.rankings[4]}`;
            ranking_five.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[4]}`)
            });
            ranking_six.innerText = `${data.rankings[5]}`;
            ranking_six.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[5]}`)
            });
            ranking_seven.innerText = `${data.rankings[6]}`;
            ranking_seven.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[6]}`)
            });
            ranking_eight.innerText = `${data.rankings[7]}`;
            ranking_eight.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[7]}`)
            });
            ranking_nine.innerText = `${data.rankings[8]}`;
            ranking_nine.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[8]}`)
            });
            ranking_ten.innerText = `${data.rankings[9]}`;
            ranking_ten.addEventListener('click', function () {
                window.open('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=' + `${data.rankings[9]}`)
            });
        }, 1000);


        // function clickToSearchTrend(trending_num) {
        //     window.open(`https://search.naver.com/search.naver?query=${data.rankings[trending_num]}`)
        //     console.log("발동")
        // }
        // ranking_two.addEventListener('click', clickToSearchTrend(1))
    });
