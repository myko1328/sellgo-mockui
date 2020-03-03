import React, { Component } from 'react'

class ProductRating extends Component {
  state = { rating: 0 }

  handleChange = (e) => this.setState({ rating: e.target.value })

  render() {
    const { rating } = this.state

    return (
      <div>
        <input
          type='range'
          min={0}
          max={100}
          value={rating}
          onChange={this.handleChange}
        />
        <br />
        <div>{rating} tracked out of 100</div>
      </div>
    )
  }
}

export default ProductRating;
