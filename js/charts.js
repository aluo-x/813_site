var ctx = document.getElementById("chart1").getContext('2d');
var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Occupied", "Available"],
        datasets: [{
            label: '# of Votes',
            data: [12, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }
});
var ctx2 = document.getElementById("chart2").getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ["Fostered", "Un-Fostered"],
        datasets: [{
            label: '# of Votes',
            data: [13, 12],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }

});
var ctx3 = document.getElementById("chart3").getContext('2d');
var chart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ["Dogs", "Cats"],
        datasets: [{
            label: '# of Votes',
            data: [11, 14],
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)',
                'rgba(12, 241, 32, 0.2)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(12, 241, 32, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
    }

});