import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit, OnDestroy {
  param: string | null = null;
  paramSubscriber: any;
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
}
