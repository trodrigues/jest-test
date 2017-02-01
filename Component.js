import React from 'react'

export default class Component extends React.Component {
  clickHandler (ev) {
    ev.preventDefault()
    debugger;
    console.log('clicked')
  }

  render() {
    debugger;
    return (
      <div>
        <button onClick={this.clickHandler}>hello</button>
      </div>
    )
  }
}