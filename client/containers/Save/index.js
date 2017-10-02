import React, { Component } from 'react';
import moment from 'moment';
class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      articles: [],
    }
  }
  componentDidMount() {
    fetch('/api/saved')
    .then(results => results.json())
    .then(articles => {
      this.setState({ articles, loading: false});
    })
    .catch((err) => {
      console.log('Error retrieving articles', err);
    })
  }
  deleteArticle(id) {
    fetch('/api/saved', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
    .then(response => response.json())
    .then(articles => {
      console.log('What are the new articles?',articles);
      this.setState({ articles })
    })
    .catch(err => console.warn('Could not delte article', err))
  }
  render() {
    console.log(' WHAT IS OUR STATE?', this.state);
    if (this.state.loading) {
      return (
        <div style={{ color: '#444'}}>Loading Articles</div>
      )
    }
    return (
      <div className='container' style={{ height: 200}}>
        {this.state.articles.map((result, i) => (
          <div key={`${result.headline}-${i}`} className='col-lg-10 col-lg-offset-1'>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">{result.headline}</h3>
              </div>
              <div className="panel-body">
                <li>
                  Publish Date: {moment(result.pub_date).format('YYYY-MM-DD h:mm A')}
                </li>
                <li>
                  Url Link: <a href={result.web_url} target='_blank'>{result.web_url}</a>
                </li>
              </div>
              <div className="panel-footer" style={{ height: 40, padding: 0}}>
                <div className='pull-right'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    style={{ color: '#444'}}
                    onClick={() => this.deleteArticle(result._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Save;
