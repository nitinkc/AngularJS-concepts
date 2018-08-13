import { Component } from "@angular/core";

//Creating a component
// By adding a Component Decorator.
@Component({
    //The html tag by which this component will be used later
    // should me a unique selector, so that the html name space is not used accidently
    selector : 'app-success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent{

    concept: String = "String interpolation";
    int_value: number = 10;

    getValuesFromAMethod(){
        return 'Value returned from a method'
    }
    
}