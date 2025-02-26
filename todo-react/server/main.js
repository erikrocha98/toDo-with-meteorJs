import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../imports/api/tasksCollection.js";
import {Accounts} from 'meteor/accounts-base';
import "../imports/api/tasksPublications.js";
import "../imports/api/tasksMethods.js";

const insertTask = (taskText) =>
  TasksCollection.insertAsync({ text: taskText });


const SEED_USERNAME= 'erik';
const SEED_PASSWORD= '207098';

Meteor.startup(async () => {

  if(!(await Accounts.findUserByUsername(SEED_USERNAME))){
    await Accounts.createUser({
      username: SEED_USERNAME,
      password:SEED_PASSWORD
    });
  }
  
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