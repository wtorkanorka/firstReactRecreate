import React from 'react'

export default function OurWorkButton(props) {
  let content = props.file.map(item => (
    <button key={item.id}>{item.job}</button>
  ))
  return <>{content}</>
}
