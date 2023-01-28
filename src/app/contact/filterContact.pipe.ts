import { Pipe, PipeTransform } from '@angular/core';
import { IContactData } from './contactData.interface';

@Pipe({
  name: 'filterContacts',
})
export class FilterContactPipe implements PipeTransform {
  transform(contacts: IContactData[], filterText: string): IContactData[] {
    if (contacts.length === 0 || filterText === '') return contacts;
    return contacts.filter(
      (self) => self.gender.toLowerCase() === filterText.toLowerCase()
    );
  }
}
