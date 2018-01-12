import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import '../css/style.css';
import FetchWidget from './FetchWidget.jsx'

export default class Hello extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>Durable Goods Orders</li>
          <li>Interest Rates Spread</li>
          <li>Dow Jones Utility Average</li>
          <li>Manufacturing Jobs</li>
          <li>New Homes Sales</li>
          <li>Weekly Hours</li>
          <li>Jobless Claims</li>
          <li>Vendor Performance</li>
          <li>Building Permits</li>
          <li>S&P 500</li>
          <li>Money Supply</li>
          <li>Consumer Expectations</li>
        </ul>
        <FetchWidget subreddit='' url="https://api.nytimes.com/svc/news/v3/content/nyt/all.json" format=""/>
        <FetchWidget subreddit='gaming' url="http://www.reddit.com/r/" format=".json"/>
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
