import React from 'react'

import { ResponsiveRadar } from '@nivo/radar';
const Diagramme = ({pupilGrades}) => {
    console.log(pupilGrades);
    
const keys = ['grade'];
  return (
    <ResponsiveRadar
        data={pupilGrades}
        keys={keys}
        indexBy="id"
        maxValue={100}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={8}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        isInteractive={true}
      />
  )
}

export default Diagramme