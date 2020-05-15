import React from 'react'

export default function SummaryOption(props) {
     return (
       <div className="summary__option" key={props.featureHash}>
         <div className="summary__option__label">{props.name} </div>
         <div className="summary__option__value">{props.option.name}</div>
         <div className="summary__option__cost">
           {props.USFormatting.format(props.option.cost)}
         </div>
       </div>
     );
   }
