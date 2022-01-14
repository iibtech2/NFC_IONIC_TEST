import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }

  readAll(){
    let allSt = localStorage.getItem('all_types_list');
    return allSt ? JSON.parse(allSt) : [];
  }
  addNew(typeName){
    let newItem = {
      typeName : typeName,
      typeID : this.getAndSetLastID(),
    }
    let allSt = localStorage.getItem('all_types_list');
    let allItems = [];
    if(allSt){
      allItems = JSON.parse(allSt);
    }
    allItems.push(newItem);
    localStorage.setItem('all_types_list',JSON.stringify(allItems));
    // return allSt ? JSON.parse(allSt) : [];
  }

  getAndSetLastID(){
    let newID  = 1;
    let allSt = localStorage.getItem('last_id_type');
    if(allSt){
       newID = +allSt + 1;
    }
    localStorage.setItem('last_id_type',newID.toString());
    return newID;
  }

  deleteType(item){
    let allSt = localStorage.getItem('all_types_list');
    let allItems = [];
    if(allSt){
      allItems = JSON.parse(allSt);
    }
    let index = allItems.findIndex(d => d.typeID == item.typeID); //find index in your array
    allItems.splice(index, 1);
    localStorage.setItem('all_types_list',JSON.stringify(allItems));
  }
}
