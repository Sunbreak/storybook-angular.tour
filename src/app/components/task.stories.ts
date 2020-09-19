import {Meta, Story} from '@storybook/angular/types-6-0';
import {TaskComponent} from './task.component';

export default {
  title: 'Task',
  component: TaskComponent,
  argTypes: {
    onPinTask: {action: 'onPinTask'},
    onArchiveTask: {action: 'onArchiveTask'},
  },
} as Meta;

const Template: Story<TaskComponent> = (args: TaskComponent) => ({
  component: TaskComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'Task_INBOX',
    updated_at: new Date(2019, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  }
};

export const Archived = Template.bind({});
Archived.args = {
  ...Default.args.task,
  state: 'TASK_ARCHIVED',
};
