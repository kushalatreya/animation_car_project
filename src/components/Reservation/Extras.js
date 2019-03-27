import React, { Component } from "react";

export default class Extras extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Baby Seat
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck2"
          />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Winter Tire
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Navigation
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck4"
          />
          <label className="form-check-label" htmlFor="defaultCheck4">
            Baby Seat
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck5"
          />
          <label className="form-check-label" htmlFor="defaultCheck5">
            Baby Seat
          </label>
        </div>
      </React.Fragment>
    );
  }
}
