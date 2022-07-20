import React from 'react';
import { render } from 'react-dom';
// Import Highcharts
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

// Load Highcharts modules
import HighchartsData from 'highcharts/modules/data';
import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsData(Highcharts);
HighchartsExporting(Highcharts);

const chartOptions = {
  chart: {
    type: 'spline',
  },
  title: {
    text: 'Live Data (CSV)',
  },

  subtitle: {
    text: 'Data input from a remote CSV file',
  },

  data: {
    csvURL:
      'https://raw.githubusercontent.com/YassmineAbdelhak/testi/main/saless.csv',
  },
};

class App extends React.Component {
  render() {
    return (
      <div>
        <HighchartsReact options={chartOptions} highcharts={Highcharts} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
