import { Component } from '@angular/core';

export class Task{
_task: string;
done: boolean;

constructor(task: string) {

   this._task = task;
   this.done = false;
}
}

@Component({
    selector: 'task-list-app',
    templateUrl: '/app/app.component.html'
})
export class AppComponent{
    tasks: Task[]= JSON.parse(localStorage.getItem("LocalTasks"));
    temp_task:Task;
    addTask(task: string): void {
        
       if(task==null || task==undefined || task.trim()=="")
           return;
       //debugger;
       if(this.tasks==null)
        this.tasks = [];
       this.tasks.push(new Task(task));

       var serialObj = JSON.stringify(this.tasks);
       localStorage.setItem("LocalTasks", serialObj);
    }

    deleteTask(task:Task): void{
        
        this.tasks.splice(this.tasks.indexOf(task),1);

        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
        
    }

    doneTask(task:Task): void{
        
        var t = this.tasks[this.tasks.indexOf(task)];
        
        if(t.done==true)
            t.done=false;
        else t.done = true;
       //t.done==false?t.done=true:t.done=false;

       var serialObj = JSON.stringify(this.tasks);
       localStorage.setItem("LocalTasks", serialObj);
    }

    ShowEditTask(task:Task):void{
        document.getElementById("editinput").setAttribute("value", task._task);
        document.getElementById("editdiv").removeAttribute("hidden");
        this.temp_task=task;
    }



    editTask(task:Task): void{
         document.getElementById('editinput').getAttribute('value');
         var text = document.getElementById("editinput");         
         var inp = text.value;
         console.log(task);
        this.temp_task._task=inp;

        var serialObj = JSON.stringify(this.tasks);
        localStorage.setItem("LocalTasks", serialObj);
        this.cancelEdit();
    }

    cancelEdit(): void{
        document.getElementById("editdiv").setAttribute("hidden","true");
        
    }
}