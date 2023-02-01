import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit, OnDestroy {
  param: string | null = null;
  paramSubscriber: any;
  @ViewChild('myForm') formCom: NgForm;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.paramSubscriber = this.activatedRoute.paramMap.subscribe((param) => {
      this.param = param.get('id');
    });
  }
  ngOnDestroy(): void {
    this.paramSubscriber.unsubscribe();
  }

  navigateToHome() {
    this.route.navigate(['contact'], { relativeTo: this.activatedRoute });
  }
  navigateToContact() {
    this.route.navigate(['contact'], { queryParams: { program: 1 } });
  }
  onHelpFormSubmit() {
    console.log(this.formCom);
  }
  setDefaultValue() {
    console.log('set default value');
    this.formCom.setValue({
      Hobbies: 'Movies',
      address: 'Santra para Vill-ramnagar east, po-borai, ps-singur',
      email: 'santrahimereeradriripa@gmail.com',
      name: 'Manoj Santra',
      qualification: 'Graduate',
    });
  }
  setNameValue() {
    this.formCom.form.patchValue({ name: 'Utpal Sarkar' });
  }
}
