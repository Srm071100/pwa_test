import React from 'react';
import DemoPieNormal from './pie';
import DemoPieDonut from './donut';

const DemoPie = () => {
  return (
    <div style={{width:"100%"}}>
        <div style={{width:"50%",float:"left"}}>
            <DemoPieNormal />
        </div>
        <div style={{width:"50%",float:"left"}}>
            <DemoPieDonut />
        </div>
    </div>
  );
};

export default DemoPie;