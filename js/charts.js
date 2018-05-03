var ctx = document.getElementById("chart1").getContext('2d');
var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Occupied", "Available"],
        datasets: [{
            label: '# of Votes',
            data: [12, 4],
            backgroundColor: [
                'hsl(204, 86%, 53%)',
                '#00d1b2'
            ],
            borderColor: [
                'hsl(204, 86%, 53%)',
                '#00d1b2'
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
                'hsl(204, 86%, 53%)',
                '#00d1b2'
            ],
            borderColor: [
                'hsl(204, 86%, 53%)',
                '#00d1b2'
            ],
            borderWidth: 0
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
                'hsl(204, 86%, 53%)',
                '#00d1b2'
            ],
            borderColor: [
                'hsl(204, 86%, 53%)',
                '#00d1b2'
            ],
            borderWidth: 0
        }]
    },
    options: {
    }

});