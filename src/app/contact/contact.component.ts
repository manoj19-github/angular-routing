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
  filteredContactsData: IContactData[] = [];
  totalMarks = 500;
  _filterText: string = '';
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private contactService: ContactService
  ) {}

  get filterText(): string {
    return this._filterText;
  }
  set filterText(value: string) {
    this._filterText = value;
  }
  ngOnInit(): void {
    this.queryObservable = this.activatedRouter.queryParamMap.subscribe(
      (params) => (this.queryVal = params.get('edit'))
    );
    this.contactsData = this.contactService.contacts;
    this.filteredContactsData = this.contactsData;
    // this.filterContactData(this._filterText);
  }
  ngOnDestroy(): void {
    this.queryObservable.unsubscribe();
  }
  filterContactData(filterTerm: string): IContactData[] {
    if (filterTerm.trim() === '') {
      this.filteredContactsData = this.contactsData;
      return this.filteredContactsData;
    }
    this.filteredContactsData = this.contactsData.filter(
      (self) => self.gender.toLowerCase() === filterTerm.toLowerCase()
    );
    return this.filteredContactsData;
  }
  addNewContact(): void {
    this.contactsData.push({
      gender: 'female',
      first_name: 'Manoj',
      last_name: 'Santra',
      marks: 345,
      email: 'santramanoj1997@gmail.com',
      id: 51,
    });
    this.filterContactData(this.filterText);
  }
}
