import { CanDeactivateFn } from '@angular/router';
import { TodoComponent } from '../todo/todo/todo.component';

export const canLeaveGuard: CanDeactivateFn<TodoComponent> = (component, currentRoute, currentState, nextState) => {

  if (component.todo.content.trim() || component.todo.name.trim()) {
    return confirm(`êtes vous sur de vouloir sortir ?`);
  }
  return true;
};
