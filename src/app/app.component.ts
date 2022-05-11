import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue:{
        showError: true,
        displayDefaultIndicatorType: false
      }
    }
  ]
})
export class AppComponent {
  stepOne: FormGroup;
  title = 'matStepperPro';
  complated=false;
  openCompleted=false;

  /**
   *
   */
  constructor(builder: FormBuilder) {
    this.stepOne=builder.group(
      {
        isNotEmpty:[
          '',
          Validators.compose(
            [Validators.required]
          )
        ]
      }
    );
  }

  complateStep(){
    this.complated=true;
  }
  goBack(stepper: MatStepper){
    stepper.previous();
}

goForward(stepper: MatStepper){
    stepper.next();
}
}
