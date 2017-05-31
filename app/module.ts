import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {CustomPipeComponent}  from './custompipe.component';
import  WelcomePipe   from './welcome.pipe';
import * as filter from './orderBy.pipe';
import { UserService } from './user.service';
import { childComponent } from './component/child.comp';
import { childSiblingComponent } from './component/child.sibling';
import { SharedService } from './component/shared.service';

@NgModule({
  imports:      [BrowserModule,
                 FormsModule],
  declarations: [WelcomePipe,
				 CustomPipeComponent,
				 filter.OrderByName,
				 filter.searchByName,
				 childComponent,
				 childSiblingComponent],
  providers:	[UserService,SharedService],
  bootstrap:    [CustomPipeComponent]
})
export class AppModule { }
