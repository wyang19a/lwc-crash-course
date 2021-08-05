import { LightningElement, api } from 'lwc'; // api decorator is for the public prop

export default class ToDoItem extends LightningElement {
  //public property accepts value from parent component
  @api todoId
  @api todoName
  @api done = false
}