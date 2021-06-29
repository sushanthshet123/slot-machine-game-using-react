import React from 'react';


const Slot = (props) => {
    //   let x = "😄";
    //   let y = "😄"z
    //   let z = "🎅";
    //  OR
    // let x = props.x;
    // let y = props.y;
    // let z = props.z;
    //   OR
    //also we can use destructuring object method
    //   OR
    let {x,y,z} = props;
    
    
      if (x === y && y === z) {
        return (
          <div>
            <h1>
              {x} {y} {z}
            </h1>
            <h1>this is matching</h1>
            <hr />
          </div>
        );
      } else {
        return (
          <div>
            <h1>
              {x} {y} {z}
            </h1>
            <h1>this is not matching</h1>
            <hr />
          </div>
        );
      }
    };

    export default Slot;