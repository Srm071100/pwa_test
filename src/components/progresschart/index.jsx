import React from 'react';
import { Gauge,RingProgress } from '@ant-design/plots';

const DemoGauge = () => {
  const config = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };
  return <Gauge {...config} />;
};

const DemoRingProgress = () => {
  const config = {
    autoFit: false,
    percent: 0.6,
    color: ['#F4664A', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: {
          color: '#363636',
          fontSize: '12px',
          lineHeight: '14px',
        },
        formatter: () => '进度',
      },
    },
  };
  return <RingProgress {...config} />;
};

const DemoProgress = () => {
    return (
        <div style={{width:"100%"}}>
            <div style={{width:"50%",float:"left"}}>
                <DemoRingProgress />
            </div>
            <div style={{width:"50%",float:"left"}}>
                <DemoGauge />
            </div>
        </div>
      );
};
export default DemoProgress;
