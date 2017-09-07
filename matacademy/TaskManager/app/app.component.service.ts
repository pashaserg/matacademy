import { Task } from './app.component';

export class DataService{

    private tasks: Task[] = JSON.parse(localStorage.getItem("LocalTasks"));
    temp_task:Task;


getData(): Task[]{
    return this.tasks;
}

addData(task: string): void {
    
   if(task==null || task.trim()=="")
       return;
   //debugger;
   if(this.tasks==null)
    this.tasks = [];
   this.tasks.push(new Task(task));

   this.saveChangesAtLocalStorage();   
} 

deleteData(task:Task): void{
    
    this.tasks.splice(this.tasks.indexOf(task),1);

    this.saveChangesAtLocalStorage();  
}

doneData(task:Task): void{
    
    var t = this.tasks[this.tasks.indexOf(task)];
    
    if(t.done==true)
        t.done=false;
    else t.done = true;

    this.saveChangesAtLocalStorage();    
}

ShowEditData(task:Task):void{
    document.getElementById("editinput").setAttribute("value", task._task);
    document.getElementById("editdiv").removeAttribute("hidden");
    this.temp_task=task;
}



editData(task:Task): void{
     document.getElementById('editinput').getAttribute('value');
     var text = document.getElementById("editinput");         
     var inp = text.value;
     console.log(task);
    this.temp_task._task=inp;

    this.saveChangesAtLocalStorage();
    
    this.cancelEditData();
}

cancelEditData(): void{
    document.getElementById("editdiv").setAttribute("hidden","true");
    
}

saveChangesAtLocalStorage(): void{
    var serialObj = JSON.stringify(this.tasks);
    localStorage.setItem("LocalTasks", serialObj);
}
};
