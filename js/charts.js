var ctx = document.getElementById("chart1").getContext('2d');
var chart1 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Available","Occupied"],
        datasets: [{
            label: '# of Votes',
            data: [4, 12],
            backgroundColor: [
                '#00d1b2',
                'hsl(204, 86%, 53%)',
            ],
            borderColor: [
                '#00d1b2',
                'hsl(204, 86%, 53%)',
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
                '#00d1b2',
                'hsl(204, 86%, 53%)',
            ],
            borderColor: [
                '#00d1b2',
                'hsl(204, 86%, 53%)',
            ],
            borderWidth: 0
        }]
    },
    options: {
    }

});
var ctx3 = document.getElementById("chart3").getContext('2d');
var chart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Dogs", "Cats","Birds","Other"],
        datasets: [{
            label:"Count",
            data: [11, 14,7,3],
            backgroundColor: [
                'hsl(204, 86%, 53%)',
                'hsl(204, 86%, 53%)',
                'hsl(204, 86%, 53%)',
                'hsl(204, 86%, 53%)',

            ],
            borderColor: [
                'hsl(204, 86%, 53%)',
                'hsl(204, 86%, 53%)',
                'hsl(204, 86%, 53%)',
                'hsl(204, 86%, 53%)',

            ],
            borderWidth: 0
        }]
    },
    options : {
        scales : {
            xAxes : [ {
                gridLines : {
                    display : false
                }
            } ],
            yAxes : [ {
                gridLines : {
                    display : false
                },
                ticks: {
                    min:0
                }
            } ]
        },
        legend:{
            display:false
        }
    }
});