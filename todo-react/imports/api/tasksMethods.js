import {Meteor} from "meteor/meteor";
import { TasksCollection } from "./tasksCollection.js";


Meteor.methods({
    "tasks.insert"(doc){
        return TasksCollection.insertAsync(doc);
    },
    "tasks.toggledChecked"({_id, isChecked}){
        return TasksCollection.updateAsync(_id, {
            $set:{isChecked: !isChecked},
        });
    },
})