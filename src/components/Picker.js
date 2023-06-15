import React from 'react';
import "./Picker.css";

export default function Picker(props) {

  const {names, selectedIdx, onClick} = props;

  if (!names) return React.Fragment;

  const Button = (props) => {

    const {name, selected, index} = props;

    const styles = {
      color: selected ? 'white' : '#a4a099',
      backgroundColor: selected ? '#a4a099' : 'white'
    }
    return <button className="in-list-btn" style={styles} onClick={() => onClick(index)}>{name}</button>
  }

  return (
    <span className="container gap-y-3">
      {
        names.map((name, index) => <Button key={index} index={index} name={name}
                                           selected={index === selectedIdx}></Button>)
      }
    </span>
  );

}