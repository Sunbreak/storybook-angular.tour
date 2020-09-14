import {Story} from '@storybook/angular/types-6-0';
import {moduleMetadata} from '@storybook/angular';
import {TaskListComponent} from './task-list.component';
import {TaskComponent} from './task.component';
import {CommonModule} from '@angular/common';
import {Default, Pinned} from './task.stories';

export default {
  title: 'TaskList',
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent, TaskComponent],
      imports: [CommonModule],
    })
  ],
  args: {
    loading: false,
    onPinTask: {action: 'onPinTask'},
    onArchiveTask: {action: 'onArchiveTask'},
  }
};

const Template: Story<TaskListComponent> = (args: TaskListComponent) => ({
  component: TaskListComponent,
  template: `
    <div style="padding: 3rem">
      <app-task-list [tasks]="tasks" [loading]="loading" (onPinTask)="onPinTask($event)" (onArchiveTask)="onArchiveTask($event)"></app-task-list>
    </div>
  `,
  props: args,
});

export const WithDefaultTasks = Template.bind({});
WithDefaultTasks.args = {
  tasks: [
    {...Default.args.task, id: '1', title: 'Task 1'},
    {...Default.args.task, id: '2', title: 'Task 2'},
    {...Default.args.task, id: '3', title: 'Task 3'},
    {...Default.args.task, id: '4', title: 'Task 4'},
    {...Default.args.task, id: '5', title: 'Task 5'},
    {...Default.args.task, id: '6', title: 'Task 6'},
  ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    ...WithDefaultTasks.args.tasks.slice(0, 5),
    {...Pinned.args.task, id: '6', title: 'Task 6 (pinned)'},
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  tasks: [],
};

