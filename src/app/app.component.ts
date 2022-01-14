import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { 
    let allSt = localStorage.getItem('all_types_list');
    if(!allSt){
      let allTypes = [
        {
          typeName : 'Student',
          typeID : '1',
        },
        {
          typeName : 'Teacher',
          typeID : '2',
        },
        {
          typeName : 'Subject',
          typeID : '3',
        }
      ]
      localStorage.setItem('all_types_list',JSON.stringify(allTypes));
      localStorage.setItem('last_id_type','3');
    }
  }
}
