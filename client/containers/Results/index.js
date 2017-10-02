import React, { Component } from 'react';
import moment from 'moment';
class Results extends Component {
    constructor(props) {
      super(props);

    }
  render() {
    const { results } = { ...this.props};
    return (
      <div className=''>
        <div className="page-header" style={{ textAlign: 'center', backgroundColor: '#212f57'}}>
          <h1 style={{ color: '#fff'}}>Results</h1>
        </div>
        {results.map((result, i) => {
          return (
          <div key={`${result.headline}-${i}`} className='col-lg-10 col-lg-offset-1'>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{result.headline.main}</h3>
              </div>
              <div className="panel-body">
                <li>
                  Publish Date: {moment(result.pub_date).format('YYYY-MM-DD h:mm A')}
                </li>
                <li>
                  Url link: <a href={result.web_url} target='_blank'>{result.web_url}</a>
                </li>
              </div>
              <div className="panel-footer" style={{ height: 40, padding: 0}}>
                <div className='pull-right'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    style={{ color: '#444'}}
                    onClick={() => this.props.saveArticle(result)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      )}
      </div>
    );
  }
}

export default Results;
