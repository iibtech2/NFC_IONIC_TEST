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

      let allObject = [
        {
          objName : 'Aslam',
          objId : '1',
          objType: allTypes[0]
        },
        {
          objName : 'Akram',
          objId : '2',
          objType: allTypes[1]
        },
        {
          objName : 'Maths',
          objId : '3',
          objType: allTypes[2]
        }
      ]
      localStorage.setItem('all_object_list',JSON.stringify(allObject));
      localStorage.setItem('last_id_object','3');
    }
  }
}
