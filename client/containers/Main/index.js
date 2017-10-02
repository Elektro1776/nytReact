import React, { Component } from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import Form from '../../components/Form';
import Results from '../Results';
import Save from '../Save';
import Header from '../../components/Header';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      page: 5,
      begin_date: '',
      end_date: '',
      results: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleRecordChange = this.handleRecordChange.bind(this);
    this.handleStartYearChange = this.handleStartYearChange.bind(this);
    this.handleEndYearChange = this.handleEndYearChange.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.scrollIntoView = this.scrollIntoView.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { searchTerm, begin_date, end_date, page  } = this.state;
    let start_date = begin_date;
    let final_date = end_date;
    if (begin_date === '' ) {
      start_date = moment().format('YYYYMMDD');
    }
    if (end_date === '') {
      final_date = moment().add(1, 'y').format('YYYYMMDD');
    }
    const searchQuery = {
      q:searchTerm,
      begin_date: moment(start_date, 'YYYY').format('YYYYMMDD'),
      end_date: moment(final_date, 'YYYY').format('YYYYMMDD'),
      // page: page,
    }
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(searchQuery),
    })
    .then((results) => results.json())
    .then((response) => {
      const data = JSON.parse(response.body);
      const articles = data.response.docs;
      const numOfArticlesToDisplay = articles.slice(0, page);
      this.setState({ results: numOfArticlesToDisplay });
      this.scrollIntoView();
    })
    .catch((err) => {
      console.log(' ERROR GETTINGS RESULTS', err);
    })
  }
  saveArticle(article) {
    const { headline, web_url, pub_date } = article;
    const savedArticle = {
      headline: headline.main,
      web_url,
      pub_date
    };
    fetch('/api/saved', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(savedArticle),
    })
    .then((response) => console.log('SAVED THE ARTICLE', response))
    .catch((err) => console.warn('Error Saving article', err))
  }
  handleSearchChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  handleRecordChange(e) {
    this.setState({ page: e.target.value });
  }
  handleStartYearChange(e) {
    console.log(' WHAT IS HAPPEING ON CHANGE', typeof e.target.value);
    this.setState({ begin_date: parseInt(e.target.value, 10) });
  }
  handleEndYearChange(e) {
    this.setState({ end_date: e.target.value });
  }
  scrollIntoView() {
    // const formContainer = ReactDom.findDOMNode(this._formContainer);
    window.scrollTo(0,780)

  }

  render() {
    const { searchTerm, page, begin_date, end_date} = this.state;
    return (
      <div className='container'>
        <div
          id='formContainer'
          ref={container => this._formContainer = container}
          className='row'
        >
          <div className='jumbotron col-lg-10 col-lg-offset-1'>
            <Form
              handleSubmit={this.handleSubmit}
              handleSearchChange={this.handleSearchChange}
              handleRecordChange={this.handleRecordChange}
              handleStartYearChange={this.handleStartYearChange}
              handleEndYearChange={this.handleEndYearChange}
              searchTerm={searchTerm}
              records={page}
              startYear={begin_date}
              endYear={end_date}
            />
          </div>
        </div>
        <div
          id='results'
          className='row'
          ref={component => this._resultsNode = component}
        >
          <Results
            saveArticle={this.saveArticle}
            results={this.state.results}
          />
        </div>
      </div>
    );
  }
}

export default Main;
