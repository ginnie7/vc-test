import React, { Component } from 'react';
import EdiText from 'react-editext';

export default class Editable extends Component {
  onSave = val => {
    console.log('Edited Value -> ', val);
  };
  render() {
    return (
      <div className="container" style={{ padding: '0 10px' }}>
        <EdiText
          type="textarea"
          inputProps={{
            className: 'textarea',
            placeholder: 'Type your content here',
            style: {
              outline: 'none',
              minWidth: 'auto'
            },
            rows: 10
          }}
          value="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
          onSave={this.onSave}
        />
      </div>
    );
  }
}
