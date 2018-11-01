import { Component, OnInit } from '@angular/core';
import { SessionsService } from './sessions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TrainingApp';
  myFirstVariable = 'Hello World';
  count = 0;

  sessions = [
  ];

  constructor(private sessionsService: SessionsService) {
  }

  ngOnInit(): void {
    this.sessions = this.sessionsService.getSessions();
  }

  gotClicked(mfv: string): void {
    this.count += 1;
  }

  getColor(): string {
    return this.count % 2 ? 'blue' : 'red';
  }
}
