import { Box } from '@chakra-ui/react';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    study: 30,
    quiz: 10,
  },
  {
    name: 'Feb',
    study: 20,
    quiz: 15,
  },
  {
    name: 'Mar',
    study: 40,
    quiz: 20,
  },
  {
    name: 'April',
    study: 25,
    quiz: 10,
  },
  {
    name: 'May',
    study: 50,
    quiz: 30,
  },
  {
    name: 'June',
    study: 35,
    quiz: 25,
  },
];

const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 5;
    return (
      <g>
          <rect x={x} y={y} width={width} height={height} fill={fill} 
          rx={radius} ry={radius}/>
      </g>
    );
  };  


const BarChartUtils = () => {
  return (
    <ResponsiveContainer width="100%" height={305}>
        <BarChart
            data={data}
            barSize={40}
        >
        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 25 }} />
        <YAxis tickFormatter={(tick) => `${tick} hrs`} domain={[0, 'dataMax + 20']} interval={0} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3"/>
        <Bar dataKey="study" stackId="a" fill="#4364F7" background={{ fill: 'none' }} shape={<RoundedBar/>} />
        <Bar dataKey="quiz" stackId="a" fill="#C7D0FD" background={{ fill: 'none' }} shape={<RoundedBar/>} />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartUtils