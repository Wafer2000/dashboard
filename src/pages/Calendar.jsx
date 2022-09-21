import React, { useState } from "react";
import {
  Day,
  Week,
  Month,
  Agenda,
  Inject,
  Resize,
  WorkWeek,
  DragAndDrop,
  ViewDirective,
  ViewsDirective,
  ScheduleComponent,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { scheduleData } from "../data/dummy";
import { Header } from "../components";

const Calendar = () => {
  return (
    <div
      className="
        m-2
        p-2
        mt-24
        md:m-10
        md:p-10
        bg-white
        rounded-3xl"
    >
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2022, 8, 10)}
      >
        <Inject
          services={[ Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop ]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
