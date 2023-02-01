import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  reactiveForm: FormGroup;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(null),
      phone: new FormControl(null),
      qualification: new FormControl(null),
      hobbies: new FormControl(null),
    });
    console.log(this.reactiveForm.get('email'));
  }
  noSpaceAllowed(control: FormControl) {
    if (control.value !== null && control.value.trim().indexOf(' ') !== -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
  onFormSubmit(): void {
    console.log(this.reactiveForm);
  }
}
