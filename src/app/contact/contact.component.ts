import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactService } from './contact.service';
import { IContactData } from './contactData.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  queryVal: string | null = null;
  queryObservable: any;
  contactsData: IContactData[] = [];
  totalMarks = 100;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private contactService: ContactService
  ) {}
  ngOnInit(): void {
    this.queryObservable = this.activatedRouter.queryParamMap.subscribe(
      (params) => (this.queryVal = params.get('edit'))
    );
    this.contactsData = this.contactService.contacts;
  }
  ngOnDestroy(): void {
    this.queryObservable.unsubscribe();
  }
}
