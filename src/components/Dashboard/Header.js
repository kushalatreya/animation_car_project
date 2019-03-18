import React, { Component } from "react";
import { HeadWrapper } from "../../components/StyledComponent";
import { ContextConsumer } from "../../context";

export default class Header extends Component {
  render() {
    return (
      <ContextConsumer>
        {contextValue => {
          const {
            id,
            title,
            img,
            company,
            price,
            info,
            inCart,
            year,
            location,
            sale
          } = contextValue.data;
          return (
            <React.Fragment>
              <div className="card bg-dark">
                <img
                  className=" mh-40 img-fluid d-block mw-100 "
                  src="https://www.gkluk.com/wp-content/uploads/2015/09/123.jpeg"
                  alt="hero_image"
                />
                <div className="card-img-overlay text-white">
                  <h5 className="card-title">Autonvuokraus Oulu,</h5>
                  <h2 className="card-text">
                    Renting Luxiry Car, Never Been Easier//
                  </h2>
                  <p className="card-text">
                    --Voted Best service company 2018{" "}
                    <i className="fas fa-award" />{" "}
                  </p>
                </div>
              </div>
              {/* d-block w-100 img-fluid */}
              <HeadWrapper>
                <section className="search-sec">
                  <div className="container">
                    <form action="#" method="post" noValidate="novalidate">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                              <input
                                type="text"
                                className="form-control search-slt inputValue"
                                placeholder="Search car by Name, Brand, Made"
                                name="text"
                                onKeyUp={e => {
                                  contextValue.onChangeHandaler(e);
                                }}
                              />
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                              <select
                                className="form-control search-slt"
                                id="exampleFormControlSelect1"
                                onChange={e =>
                                  contextValue.onSelectChangeHanldaler(e)
                                }
                              >
                                <option>Sort</option>
                                {contextValue.sortOption.map(item => (
                                  <option value={item}>{item}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                              <select
                                className="form-control search-slt"
                                id="exampleFormControlSelect1"
                              >
                                <option>Pick-up city</option>
                                {contextValue.city.map(item => (
                                  <option value={item}>{item}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                              <button
                                type="button"
                                className="btn btn-danger wrn-btn"
                                onClick={() => contextValue.SearchByKeyEnter()}
                              >
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </HeadWrapper>
            </React.Fragment>
          );
        }}
      </ContextConsumer>
    );
  }
}
