const userData = [
    2000, 2200, 2300, 2100, 2500, 3000, 3200, 3300, 2800, 2600, 3400, 3700,
    3600, 3800, 4000, 3900, 4200, 4600, 4700, 4800, 4300, 4100, 4900, 5000,
    5200, 5300
];

const sortedData = [...userData].sort((a, b) => a - b);

const lowestThree = sortedData.slice(0, 3);
const highestThree = sortedData.slice(-3);

const barColors = userData.map(value => {
    if (highestThree.includes(value)) {
        return 'rgba(0, 255, 0, 0.6)';
    } else if (lowestThree.includes(value)) {
        return 'rgba(255, 0, 0, 0.6)';
    } else {
        return 'rgba(26, 30, 225, 0.6)';
    }
});

const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: [
            'Januar 2023', 'Februar 2023', 'März 2023', 'April 2023', 'Mai 2023', 'Juni 2023', 'Juli 2023', 'August 2023', 'September 2023', 'Oktober 2023', 'November 2023', 'Dezember 2023',
            'Januar 2024', 'Februar 2024', 'März 2024', 'April 2024', 'Mai 2024', 'Juni 2024', 'Juli 2024', 'August 2024', 'September 2024', 'Oktober 2024', 'November 2024', 'Dezember 2024',
            'Januar 2025', 'Februar 2025', ''
        ],
        datasets: [{
            label: 'Anzahl der Benutzer',
            data: userData,
            backgroundColor: barColors,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Anzahl der Benutzer'
                },
                beginAtZero: true,
                grid: {
                    display: false
                }
            },
            x: {
                title: {
                    display: false,
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: 'none'
            },
            annotation: {
                annotations: {
                    avgLine: {
                        type: 'line',
                        yMin: 3673,
                        yMax: 3673,
                        borderColor: 'black',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        label: {
                            content: 'Durchschnitt: 3.673',
                            enabled: true,
                            position: 'end',
                            backgroundColor: 'red'
                        }
                    }
                }
            }
        }
    },
});