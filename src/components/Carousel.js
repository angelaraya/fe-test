import React from 'react'
export default function Carousel(props) {

  const { paths, alts, index } = props;

  if (!paths) return React.Fragment;

  return (
    <img src={paths[index]} alt={alts[index]} className="h-[28rem] w-[42rem] object-contain"/>
  );
}