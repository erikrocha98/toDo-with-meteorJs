import { Meteor } from "meteor/meteor";
import {TasksCollection} from "./tasksCollection.js";

Meteor.publish("tasks", () => {
  return TasksCollection.find();
});