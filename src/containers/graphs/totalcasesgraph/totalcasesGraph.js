import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

class TotalCasesGraph extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Data: {},
      hideIt: false,
    };
  }

  componentDidMount() {
      axios.get("https://api.covid19india.org/data.json").then((res) => {
        let date = [];
        let confirmedcases = [];
        res.data.cases_time_series.forEach((element) => {
          date.push(element.date);
          confirmedcases.push(element.totalconfirmed);
        });
        this.setState({
          Data: {
            labels: date,
            datasets: [
              {
                data: confirmedcases,
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(255, 102, 102,0.6)",
                borderColor: "red",
                borderWidth: 2,
              },
            ],
          },
        });
      });
    }

    componentDidUpdate(prevProps) {
      if (this.props.searchTerm !== prevProps.searchTerm || this.props.graphType !== prevProps.graphType) {
        if(this.props.searchTerm !== '') {
          axios.get("https://api.covid19india.org/states_daily.json").then((res) => {
            let stateCodes = {
              'Andhra Pradesh':'AP',
              'Arunachal Pradesh':'AR',
              'Assam':'AS',
              'Bihar':'BR',
              'Chhattisgarh':'CT',
              'Goa':'GA',
              'Gujarat':'GJ',
              'Haryana':'HR',
              'Himachal Pradesh':'HP',
              'Jammu And Kashmir':'JK',
              'Jharkhand':'JH',
              'Karnataka':'KA',
              'Kerala':'KL',
              'Madhya Pradesh':'MP',
              'Maharashtra':'MH',
              'Manipur':'MN',
              'Meghalaya':'ML',
              'Mizoram':'MZ',
              'Nagaland':'NL',
              'Odisha':'OR',
              'Punjab':'PB',
              'Rajasthan':'RJ',
              'Sikkim':'SK',
              'Tamil Nadu':'TN',
              'Telangana':'TG',
              'Tripura':'TR',
              'Uttarakhand':'UT',
              'Uttar Pradesh':'UP',
              'West Bengal':'WB',
              'Andaman And Nicobar Islands':'AN',
              'Chandigarh':'CH',
              'Dadra And Nagar Haveli':'DN',
              'Daman And Diu':'DD',
              'Delhi':'DL',
              'Lakshadweep':'LD',
              'Puducherry':'PY',
            }
            let date = [];
            let confirmedcases = [];
            let stateCode = stateCodes[this.props.searchTerm];
            if(!stateCode) {
              this.setState({hideIt: true});
            }
            else {
              this.setState({hideIt: false});
              stateCode = stateCode.toLowerCase();
              if(this.props.graphType === "daily") {
                for(let i = 0; i < res.data.states_daily.length; i+=3) {
                    confirmedcases.push(res.data.states_daily[i][stateCode]);
                    date.push(res.data.states_daily[i].date);
                }
              }
              else {
                let caseSum = 0;
                for(let i = 0; i < res.data.states_daily.length; i+=3) {
                  caseSum += +res.data.states_daily[i][stateCode];
                  confirmedcases.push(caseSum);
                  date.push(res.data.states_daily[i].date);
                }
              }
            }
            this.setState({
              Data: {
                labels: date,
                datasets: [
                  {
                    data: confirmedcases,
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "rgba(255, 102, 102,0.6)",
                    borderColor: "red",
                    borderWidth: 2,
                  },
                ],
              },
            });
          });
        }
      }
    }

  render() {
    if(this.state.hideIt === true) {
      return (
        <h3>No graphs to show.</h3>
      );
    }
    return (
      <div className="totalcasegraph">
        <Line
          width={100}
          height={300}
          data={this.state.Data}
          options={{
            scales: {
              xAxes: [
                {
                  display: false,
                },
              ],
            },

            maintainAspectRatio: false,
            title: {
              text: "Total Cases",
              fontSize: 25,
              fontColor: "black",
              display: true,
            },
            legend: {
              display: false,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
export default TotalCasesGraph;
