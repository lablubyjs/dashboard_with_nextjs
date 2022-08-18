import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'
import { Doughnut, Line } from 'react-chartjs-2'
Chart.register(CategoryScale)

import styles from '@/styles/Home.module.css'

//data for bar chart
const lineData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Sales/ month',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
}

//doughnut chart data set

const doughnutData = {
  labels: ['Organic', 'Social Media', 'Websites'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

export const Content: React.FC = () => {
  return (
    <div className={styles.contentcontainer}>
      <div className={styles.contentwrapper}>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Companies</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Customers</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Users</h2>
          </div>
        </div>
        <div className={styles.tabs}>
          <div className={styles.categories}>
            <h2>Projects</h2>
          </div>
        </div>
      </div>
      {/* chart started  */}
      <div className={styles.charts}>
        <div className={styles.bar}>
          <h2>Sales</h2>
          <Line data={lineData} width={400} height={400} />
        </div>
        <div className={styles.circle}>
          <h2>Customers Arrived</h2>
          <Doughnut data={doughnutData} width={400} height={400} />
        </div>
      </div>
    </div>
  )
}
