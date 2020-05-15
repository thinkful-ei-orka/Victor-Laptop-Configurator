import React from 'react'
import Summary from './Summary';

export default function FullSummary(props) {

     const total = Object.keys(props.selected).reduce(
          (acc, curr) => acc + props.selected[curr].cost, 
          0
     );

     return (
          <section className="main__summary">
               <h2>Your cart</h2>
               <Summary
                    selected={props.selected}
                    USFormatting={props.USFormatting}
               />
               <div className="summary__total">
                    <div className="summary__total__label">
                         Total
                    </div>
                    <div className="summary__total__value">
                         {props.USFormatting.format(total)}
                    </div>
               </div>
          </section>
     )
}
