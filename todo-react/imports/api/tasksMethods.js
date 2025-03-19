import {Meteor} from "meteor/meteor";
import { TasksCollection } from "./tasksCollection.js";


Meteor.methods({
    "tasks.insert"(doc){
            return TasksCollection.insertAsync({
                text:{
                    text: doc.text.text.trim(),
                    isPersonal:doc.text.isPersonal,
                },
                userId:this.userId,
            });
    },
    "tasks.toggledChecked"({_id, isChecked}){
        return TasksCollection.updateAsync(_id, {
            $set:{isChecked: !isChecked},
        });
    },
    "tasks.delete":async function({_id}){
        const task = await TasksCollection.findOneAsync(_id);
        if (!this.userId || task?.userId!==this.userId){
            throw new Meteor.Error("Não Autorizado");
        }
        return TasksCollection.removeAsync(_id);
    },
    "tasks.update": async function ({_id, text,createdAt}){
        const task = await TasksCollection.findOneAsync(_id);
        if (!this.userId || task?.userId!==this.userId){
            throw new Meteor.Error("Não Autorizado");
        }
        return TasksCollection.updateAsync(_id, {
            $set:{
                text,
                createdAt
            }
        });
    }
})