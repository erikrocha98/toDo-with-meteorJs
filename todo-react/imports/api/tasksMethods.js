import {Meteor} from "meteor/meteor";
import { TasksCollection } from "./tasksCollection.js";


Meteor.methods({
    "tasks.insert"(doc){
            return TasksCollection.insertAsync({
                ...doc,
                userId:this.userId,
            });
    },
    "tasks.toggledChecked"({_id, isChecked}){
        return TasksCollection.updateAsync(_id, {
            $set:{isChecked: !isChecked},
        });
    },
    "tasks.delete"({_id}){
        if (!this.userId || task?.userId!==this.userId){
            throw new Meteor.Error("Não Autorizado");
        }
        return TasksCollection.removeAsync(_id);
    },
    "tasks.update"({_id, text,createdAt}){
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