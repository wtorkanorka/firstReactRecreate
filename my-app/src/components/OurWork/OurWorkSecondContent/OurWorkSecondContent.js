import React from 'react'

export default function OurWorkSecondContent(props) {
  let file = props.file.map(item => (
    <img src={item.image} alt="123" key={item.id} />
  ))

  return <>{file}</>
}
