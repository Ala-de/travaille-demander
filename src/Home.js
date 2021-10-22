import React from 'react'
import Wave from 'react-wavify'
import Particles from 'react-particles-js';
export default function home() {
    return (
        <div>
             
        <Wave fill='#f79902'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 3
        }}
  />
  <Particles 
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'path/to/svg.svg'
                    }
                }}/>
        </div>
    )
}
