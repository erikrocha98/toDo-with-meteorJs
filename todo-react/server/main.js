import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../imports/api/tasksCollection.js";
import {Accounts} from 'meteor/accounts-base';
import "../imports/api/tasksPublications.js";
import "../imports/api/tasksMethods.js";

const insertTask = (taskText,user,isPersonal=false, description="",taskStatus="Cadastrada") =>{
  TasksCollection.insertAsync({ 
    text:taskText,
    userId: user._id,
    isPersonal,
    description,
    taskStatus,
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
      {text:"First Task", isPersonal:false, description:"Descrição tarefa 1",taskStatus:"Cadastrada"},
      {text:"Second Task", isPersonal:false, description:"Descrição tarefa 2",taskStatus:"Cadastrada"},
      {text:"Third Task", isPersonal:false, description:"Descrição tarefa 3",taskStatus:"Cadastrada"},
      {text:"Fourth Task", isPersonal:true, description:"Descrição tarefa 4",taskStatus:"Cadastrada"},
      {text:"Fifth Task", isPersonal:false, description:"Descrição tarefa 5",taskStatus:"Cadastrada"},
      {text:"Sixth Task", isPersonal:true, description:"Descrição tarefa 6",taskStatus:"Cadastrada"},
      {text:"Seventh Task", isPersonal:true, description:"Descrição tarefa 7",taskStatus:"Cadastrada"},
      
    ].forEach(task => insertTask(task.text, user, task.isPersonal, task.description, task.taskStatus));
  }
});