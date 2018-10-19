
"use strict";

// y = 2 * x + -2 + np.random.randn(len(x))
// slope -> 2.0885658488137646
// intercept -> -2.4659301039845696
// rvalue=0.9845733579753783
// pvalue=0
// stderr=0.07014397223181168


/* This function must be called in the window.onload callback  */

function update_charts(chartid) {
    var ctx = document.getElementById(chartid).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [ 0.        ,  0.34482759,  0.68965517,  1.03448276,  1.37931034,
                      1.72413793,  2.06896552,  2.4137931 ,  2.75862069,  3.10344828,
                      3.44827586,  3.79310345,  4.13793103,  4.48275862,  4.82758621,
                      5.17241379,  5.51724138,  5.86206897,  6.20689655,  6.55172414,
                      6.89655172,  7.24137931,  7.5862069 ,  7.93103448,  8.27586207,
                      8.62068966,  8.96551724,  9.31034483,  9.65517241, 10.        ],
            datasets: [
                {
                    label: "Measured Points",
                    showLine: false,
                    pointBackgroundColor: "red",
                    data: [-3.10059522, -2.13467931, -1.74325569, -2.11337341, -0.91255656,
                           2.79634765,  3.61719669,  3.53975829,  3.58118068,  2.5155524 ,
                           5.55022428,  5.77577549,  6.21815352,  7.4816377 ,  7.88526192,
                           9.18755422,  8.99663847,  9.51566691, 10.44788437, 10.70209247,
                           14.28982449, 13.56864738, 13.05061484, 14.90326188, 14.24230553,
                           13.05326406, 15.14167514, 15.60756317, 19.30612241, 18.33723044]
                },
                {
                    label: "Regressed Points",
                    fill: false,
                    pointRadius: 0,
                    borderColor: "teal",
                    data: [-2.4659301 , -1.74573498, -1.02553986, -0.30534474,  0.41485038,
                           1.1350455 ,  1.85524062,  2.57543574,  3.29563086,  4.01582598,
                           4.7360211 ,  5.45621622,  6.17641134,  6.89660646,  7.61680158,
                           8.3369967 ,  9.05719182,  9.77738694, 10.49758206, 11.21777718,
                           11.9379723 , 12.65816742, 13.37836254, 14.09855766, 14.81875278,
                           15.5389479 , 16.25914302, 16.97933814, 17.69953326, 18.41972838]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero:true
            //         }
            //     }]
            // }
        }
    });
};
