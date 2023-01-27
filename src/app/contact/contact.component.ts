import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  queryVal: string | null = null;
  queryObservable: any;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.queryObservable = this.activatedRouter.queryParamMap.subscribe(
      (params) => (this.queryVal = params.get('edit'))
    );
  }
  ngOnDestroy(): void {
    this.queryObservable.unsubscribe();
  }
}
