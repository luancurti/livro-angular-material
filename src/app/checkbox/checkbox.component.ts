import { Component, OnInit, ViewChild } from '@angular/core';

import { MatCheckbox } from '@angular/material';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  isIndeterminate = false;
  isChecked = false;
  isDisabled = false;
  alignment = 'start';
  useAlternativeColor = false;
  tasks: Task[] = [
    {
      name: 'Reminders',
      completed: false,
      subtasks: [
        { name: 'Cook Dinner', completed: false },
        { name: 'Read the Material Design Spec', completed: false },
        { name: 'Upgrade Application to Angular', completed: false }
      ]
    },
    {
      name: 'Groceries',
      completed: false,
      subtasks: [
        { name: 'Organic Eggs', completed: false },
        { name: 'Protein Powder', completed: false },
        { name: 'Almond Meal Flour', completed: false }
      ]
    }
  ];
  todos = false;
  tarefas: any[] = [
    { name: 'Organic Eggs', completed: false },
    { name: 'Protein Powder', completed: false },
    { name: 'Almond Meal Flour', completed: false }
  ];
  @ViewChild('myCheck') myCheck: MatCheckbox;

  ngOnInit() {
    console.log(this.myCheck._inputElement.nativeElement.isIndeterminate);
  }

  determina(tudo: any) {
    console.log(tudo);
  }

  estadoIndeterminado(checked: boolean) {
    console.log(`indeterminate é: ${checked}`);
  }

  estadoMudado(event: boolean) {
    console.log(`checked é: ${event}`);
  }

  printResult() {
    if (this.isIndeterminate) {
      return 'Maybe!';
    }
    return this.isChecked ? 'Yes!' : 'No!';
  }

  checkboxColor() {
    return this.useAlternativeColor ? 'primary' : 'accent';
  }

  allComplete(task: Task): boolean {
    const subtasks = task.subtasks;

    if (!subtasks) {
      return false;
    }

    return subtasks.every(t => t.completed) ? true
        : subtasks.every(t => !t.completed) ? false
        : task.completed;
  }

  someComplete(tasks: Task[]): boolean {
    // console.log('entrou no some completed') ;
    // console.log(tasks);
    const numComplete = tasks.filter(t => t.completed).length;
    return numComplete > 0 && numComplete < tasks.length;
  }

  setAllCompleted(tasks: Task[], completed: boolean) {
    // console.log('entrou no set all completed');
    tasks.forEach(t => t.completed = completed);
  }

  allCheck(completado: boolean) {
    console.log('all check');
    this.tarefas.forEach(t => t.completed = completado);
  }

  verificaTodos(completado: boolean) {
    if (completado) {
      this.tarefas.every(t => t.completed === true) ? this.todos = true : this.todos = false;
    }
  }
}
