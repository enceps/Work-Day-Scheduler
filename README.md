# Work-Day-Scheduler
Calendar Application
Live URL: https://enceps.github.io/Work-Day-Scheduler/
![image](https://user-images.githubusercontent.com/104939604/182269693-7836fb9a-6a9c-40d2-8b74-7b2523baca3a.png)
Applications aims to complete the following:
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


Applications uses JQuery to store data inputs from each textarea after clicking the save button. Then displays them in the appropriate area after
comparing the time and changing background colour based off past/present/future using a simple 'if' statement
