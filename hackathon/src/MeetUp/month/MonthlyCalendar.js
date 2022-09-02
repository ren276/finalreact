import React, {Component} from 'react';
import {DayPilot, DayPilotMonth} from "@daypilot/daypilot-lite-react";
import "./MonthStyles.css";
import "./icons/style.css";

class MonthlyCalendar extends Component {

  constructor(props) {
    super(props);

    this.calendarRef = React.createRef();

    this.state = {
      eventHeight: 30,
      headerHeight: 30,
      cellHeaderHeight: 25,
      onBeforeEventRender: args => {
        args.data.borderColor = "darker";
        if (args.data.backColor) {
          args.data.barColor = DayPilot.ColorUtil.darker(args.data.backColor, -1);
        }
      },
      contextMenu: new DayPilot.Menu({
        items: [
          {
            text: "Delete",
            onClick: args => {
              const e = args.source;
              this.calendar.events.remove(e);
            }
          },
          {
            text: "-"
          },
          {
            text: "Blue",
            icon: "icon icon-blue",
            color: "#3d85c6",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Green",
            icon: "icon icon-green",
            color: "#6aa84f",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Yellow",
            icon: "icon icon-yellow",
            color: "#ecb823",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Red",
            icon: "icon icon-red",
            color: "#d5663e",
            onClick: args => this.updateColor(args.source, args.item.color)
          },
          {
            text: "Auto",
            color: null,
            onClick: args => this.updateColor(args.source, args.item.color)
          },

        ]
      }),
      onTimeRangeSelected: async args => {
        const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");

        this.calendar.clearSelection();
        if (!modal.result) {
          return;
        }
        this.calendar.events.add({
          start: args.start,
          end: args.end,
          id: DayPilot.guid(),
          text: modal.result
        });
      },
    };
  }

  componentDidMount() {

    // load event data
    this.setState({
      startDate: "2022-09-01",
      events: [
        {
          id: 1,
          text: "Community Meet for Book || Delhi || 12 PM",
          start: "2022-09-02",
          end: "2022-09-03",
          backColor: "#d5663e",
        },
        {
          id: 2,
          text: "Donation Meet For NGO || Naraina || 1 PM",
          start: "2022-09-21",
          end: "2022-09-22",
          backColor: "#ecb823",
        },
        {
          id: 3,
          text: "Event 3",
          start: "2022-11-08",
          end: "2022-11-08",
          backColor: "#6aa84f",
        },
        {
          id: 4,
          text: "Event 4",
          start: "2022-11-15",
          end: "2022-11-16",
          backColor: "#3d85c6",
        },
        {
          id: 5,
          text: "Event 5",
          start: "2022-11-15",
          end: "2022-11-16"
        },
      ]
    });

  }

  updateColor(e, color) {
    e.data.backColor = color;
    this.calendar.events.update(e);
  }


  get calendar() {
    return this.calendarRef.current.control;
  }

  render() {
    return (
      <div>
        <DayPilotMonth
          {...this.state}
          ref={this.calendarRef}
        />
      </div>
    );
  }
}

export default MonthlyCalendar;
