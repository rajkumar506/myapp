import React from "react";
class List extends React.Component {
  constructor({ data }) {
    super(this);
  }
  render() {
    return (
      <div>
        <div>{data && data.map((item) => {})}</div>
      </div>
    );
  }
}
