import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
      super(props);

    }
  render() {
    const { results } = this.props;
    return (
      <div className=''>
        <div className="page-header" style={{ textAlign: 'center'}}>
          <h1>Results:</h1>
        </div>
        {results.map((result, i) => (
          <div key={`${result.headline}-${i}`} className='col-lg-10 col-lg-offset-1'>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{result.headline.main}</h3>
              </div>
              <div className="panel-body">

              </div>
              <div className="panel-footer">

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
