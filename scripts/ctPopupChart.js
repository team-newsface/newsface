const ctx = document.getElementById('ctChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['긍정', '부정', '중립'],
        datasets: [{
            label: '# 퍼센트',
            data: [70, 25, 5,],
            borderWidth: 0,
            backgroundColor: [
                'rgb(99, 189, 108)',
                'rgb(225, 77, 42)',
                'rgb(172, 172, 172)'
            ]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        cutout: '90%',
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },
            x: {
                beginAtZero: true,
                display: false,
            }
        }
    }
});