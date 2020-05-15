import React from 'react';
import SummaryOption from './SummaryOption';

//CartList=SummaryList?
export default function SummaryList(props) {
     const summary = Object.keys(props.selected).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          const selectedOption = props.selected[feature];

          return (
               //option
               <SummaryOption
                    name={feature}
                    option={selectedOption}
                    hash={featureHash}
                    USFormatting={props.USFormatting}
               />
          );

     });
     return summary
}