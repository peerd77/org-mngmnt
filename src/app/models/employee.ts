import { Person } from './person';
import { Enums } from './enums';

export class Employee extends Person {
    position: Enums.EmployeePosition;
}
