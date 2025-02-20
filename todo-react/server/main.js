import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../imports/api/tasksCollection.js";
import "../imports/api/tasksPublications.js"
import "../imports/api/tasksMethods.js"

const insertTask = (taskText) =>
  TasksCollection.insertAsync({ text: taskText });

Meteor.startup(async () => {
  
  if ((await TasksCollection.find().countAsync()) === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach(insertTask);
  }
});