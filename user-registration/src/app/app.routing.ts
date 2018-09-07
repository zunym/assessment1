import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router'
import { NoteComponent } from './components/note.component';
const appRoutes = [
    {
        path: 'add',
        component: NoteComponent,
    },
    {
        path: '',
        redirectTo: '/add',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NoteComponent,
    }
];


@NgModule({
    declarations: [
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
    providers: []
  })
  export class RoutingModule { }