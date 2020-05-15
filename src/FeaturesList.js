import React from 'react';
import FeatureItem from './FeatureItem';

//PartsList = FeaturesList

export default function FeaturesList(props) {

  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = props.features[feature].map(item => {
      const itemHash = props.slug(JSON.stringify(item));

      return (
        <FeatureItem
          name={feature}
          item={item}
          hash={itemHash}
          update={props.update}
          USFormatting={props.USFormatting}
          selected={props.selected}
          slug={props.slug}
        />
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });
  return features
}