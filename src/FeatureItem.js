import React from 'react';

//Part = FeatureItem

export default function FeatureItem(props) {
     return (
          <div key={props.hash} className="feature__item">
               <input
                    type="radio"
                    id={props.hash}
                    className="feature__option"
                    name={props.slug(props.name)}
                    checked={props.item.name === props.selected[props.name].name}
                    onChange={e => props.update(props.name, props.item)}
               />
               <label htmlFor={props.hash} className="feature__label">
                    {props.item.name} 
                    ({props.USFormatting.format(props.item.cost)})
               </label>
          </div>
     )
}


// export default function Card(props) {
//      return (
//          <div className='Card'>
//              <button
//                  type='button'
//                  onClick={() => props.onClickDelete(props.id)}
//              >
//                  Delete
//              </button>
//              <h3>{props.title}</h3>
//              <p>{props.content}</p>
//          </div>
//      )
//  }