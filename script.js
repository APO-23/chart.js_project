const ctx = document.getElementById('lineChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [
      {
        label: 'Текст в PDF',
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7
      },
      {
        label: 'Видео в MP3',
        data: [2, 29, 5, 5, 12, 3, 10],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 7
      }
    ]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1000,
      easing: 'easeOutQuart'
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        titleFont: {
          weight: 'bold'
        }
      },
      title: {
        display: true,
        text: 'Количество использований по дням недели',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});