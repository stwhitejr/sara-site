import React, {Component} from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Day extends Component {
  state = {
    expanded: false
  }
  componentDidMount() {
    // Default expand the current day
    if (new Date().getDay() === this.props.data.weekIndex) {
      this.setState({expanded: true})
    }
  }
  handleClick = () => this.setState({expanded: !this.state.expanded})
  getIcon = () => this.state.expanded ? 'minus-square' : 'plus-square';
  render() {
    return (
      <div className="Day">
        <div className="Day-inner">
          <div className="Day-preview" onClick={this.handleClick}>
            <FontAwesomeIcon icon={this.getIcon()} /> <span className="u-P-L--2">{this.props.data.day}</span>
          </div>
          {this.state.expanded && this.props.data.events.map(event => (
            <div key={event.title + event.startDate} className="Day-event">
              <span className="Day-eventTime">{event.startDate}</span>
              <div className="Day-eventTitle">
                {event.title}
                <div className="u-P-T--2">
                  <a href={event.url} target="_blank" className="Day-eventLink">{event.urlText || event.url}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

class Schedule extends Component {
  state = {
    days: [
      {
        day: 'Monday',
        weekIndex: 1,
        events: [
          {
            title: 'Yoga @ Chakra Power Yoga Hanover',
            url: 'http://www.chakrapoweryoga.com',
            startDate: '4:00 PM'
          },
          {
            title: 'Yoga @ Chakra Power Yoga Hanover',
            url: 'http://www.chakrapoweryoga.com',
            startDate: '6:30 PM'
          }
        ]
      },
      {
        day: 'Tuesday',
        weekIndex: 2,
        events: [
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '4:30 PM'
          },
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '5:45 PM'
          },
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '7:00 PM'
          }
        ]
      },
      {
        day: 'Wednesday',
        weekIndex: 3,
        events: [
          {
            title: 'Yoga @ Open Doors Dorchester',
            url: 'https://www.opendoorsyogastudios.com/dorchester',
            urlText: 'Open Doors',
            startDate: '6:00 AM'
          },
          {
            title: 'Yoga @ Blend Nutrition',
            url: 'https://www.facebook.com/pages/category/Product-Service/Blend-Nutrition-454053478357513/',
            urlText: 'Blend Nutrition',
            startDate: '6:30 PM'
          },
        ]
      },
      {
        day: 'Thursday',
        weekIndex: 4,
        events: [
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '5:00 AM'
          },
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '6:00 AM'
          },
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '9:30 AM'
          },
          {
            title: 'Yoga @ Chakra Power Yoga Hanover',
            url: 'http://www.chakrapoweryoga.com',
            startDate: '4:00 PM'
          },
          {
            title: 'Yoga @ Chakra Power Yoga Braintree',
            url: 'http://www.chakrapoweryoga.com',
            startDate: '7:15 PM'
          },
        ]
      },
      {
        day: 'Friday',
        weekIndex: 5,
        events: [
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '9:30 AM'
          },
          {
            title: 'Yoga @ Open Doors Dorchester',
            url: 'https://www.opendoorsyogastudios.com/dorchester',
            urlText: 'Open Doors',
            startDate: '12:00 PM'
          },
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '4:30 PM'
          },
          {
            title: 'Crossfit @ Work Play Crossfit',
            url: 'http://www.workplaycrossfit.com',
            startDate: '5:45 PM'
          }
        ]
      },
      {
        day: 'Saturday',
        weekIndex: 6,
        events: [
          {
            title: 'Yoga @ Chakra Power Yoga Braintree',
            url: 'http://www.chakrapoweryoga.com',
            startDate: '9:30 AM'
          },
          {
            title: 'Yoga @ The Center for Movement Weymouth',
            url: 'http://www.thecenterformovementweymouth.com',
            startDate: '10:30 AM'
          },
        ]
      }
    ]
  }
  handleClickPrev = e => {}
  handleClickNext = e => {}
  render() {
    return (
       <section className="Schedule u-P--10" id="schedule">
        <div className="Schedule-app u-M-T--5">
          <h1>Schedule</h1>
          <div className="u-Flex">
            <div className="u-Col u-M-R--5 u-NoMobileMargin">
              {this.state.days.slice(0, 3).map(day => (<Day key={day.day} data={day} />))}
            </div>
            <div className="u-Col">
              {this.state.days.slice(3).map(day => (<Day key={day.day} data={day} />))}
            </div>
          </div>
        </div>
        {/*
        <div className="u-Flex u-JustifyContentSpaceBetween">
          <button className="Schedule-button" disabled={!this.state.hasPrevMonth} onClick={this.handleClickPrev}>Previous Month</button>
          <button className="Schedule-button" disabled={!this.state.hasNextMonth} onClick={this.handleClickNext}>Next Month</button>
        </div>*/}
      </section>
    )
  }
};

export default Schedule;