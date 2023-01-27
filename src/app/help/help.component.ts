import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent {
  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  navigateToHome() {
    this.route.navigate(['contact'], { relativeTo: this.activatedRoute });
  }
}
