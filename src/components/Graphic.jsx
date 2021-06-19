import React, { useContext } from 'react'
import { Bar } from 'react-chartjs-2';
import { Context } from '../globalState/context';


export const Graphic = () => {

    const {state} = useContext(Context);
    const {complete, incomplete} = state;

    const data = {
    label: {
      display: false
    },
    labels: [
      'Completadas',
      'Sin completar'
    ],
    datasets: [
      {
        data: [complete, incomplete],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ]
      }
    ],
  };

  const options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

    return (
      <Bar data={data} options={options}/>
    )
}
