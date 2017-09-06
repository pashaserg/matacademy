import { Task } from './app.component';

export class TaskDataService{

    private TaskData: Task[] = JSON.parse(localStorage.getItem("LocalTasks"));

    getTasksData(): Task[] {
        return this.TaskData;
    }

    addTaskData(task: string){
        if(task==null || task==undefined || task.trim()=="")
            return;
        this.tasks.push(new Task(task));        
        localStorage.serialTasks = JSON.stringify(this.tasks);
        
        localStorage.setItem("LocalTasks", localStorage.serialTasks);
    }
}