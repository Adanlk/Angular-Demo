import { Component } from '@angular/core';
import { LoggerService } from './di/logger.service';
import { UserContextService } from './di/user-context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-demo';
  private userId = 1;
  constructor(logger: LoggerService,public userContext: UserContextService){
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }
}
