import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../imports/api/tasksCollection.js";
import {Accounts} from 'meteor/accounts-base';
import "../imports/api/tasksPublications.js";
import "../imports/api/tasksMethods.js";

const insertTask = (taskText,user) =>{
  TasksCollection.insertAsync({ 
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
   });
}


const SEED_USERNAME= "erik";
const SEED_PASSWORD= "impala";


Meteor.startup(async () => {
  let user = await Accounts.findUserByUsername(SEED_USERNAME);
  console.log("Usuário encontrado no banco:", user);

  if (!user) {
    const userId = await Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });

    console.log("Usuário criado com ID:", userId);
    user = await Accounts.findUserByUsername(SEED_USERNAME);
    console.log("Usuário após criação:", user);
  }

    // Buscar o usuário novamente após a criação
    user = await Accounts.findUserByUsername(SEED_USERNAME);
    console.log(Accounts.findUserByUsername("erik"));


  if ((await TasksCollection.find().countAsync()) === 0) {
    [
      "First Task",
      "Second Task",
      "Third Task",
      "Fourth Task",
      "Fifth Task",
      "Sixth Task",
      "Seventh Task",
    ].forEach((taskText) => insertTask(taskText, user));
  }
});