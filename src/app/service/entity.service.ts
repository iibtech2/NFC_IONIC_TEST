import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor() { }

  addNew(entItem){
    let newItem = {
      objId : this.getAndSetLastID(),
      objType : entItem.eType,
      objName: entItem.eName
    }
    let allSt = localStorage.getItem('all_object_list');
    let allItems = [];
    if(allSt){
      allItems = JSON.parse(allSt);
    }
    allItems.push(newItem);
    localStorage.setItem('all_object_list',JSON.stringify(allItems));
    // return allSt ? JSON.parse(allSt) : [];
  }
  getAndSetLastID(){
    let newID  = 1;
    let allSt = localStorage.getItem('last_id_object');
    if(allSt){
       newID = +allSt + 1;
    }
    localStorage.setItem('last_id_object',newID.toString());
    return newID;
  }

  readAll(){
    let allSt = localStorage.getItem('all_object_list');
    return allSt ? JSON.parse(allSt) : [];
  }

  deleteType(item){
    let allSt = localStorage.getItem('all_object_list');
    let allItems = [];
    if(allSt){
      allItems = JSON.parse(allSt);
    }
    let index = allItems.findIndex(d => d.objId == item.objId); //find index in your array
    allItems.splice(index, 1);
    localStorage.setItem('all_object_list',JSON.stringify(allItems));
  }
}
