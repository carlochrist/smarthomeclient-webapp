import { Component, OnInit } from '@angular/core';
// /// <reference path="./myClass/index.d.ts" />
// import MyClass from './myClass';

declare var test: any;
declare var test2: any;
declare var halloWelt: any;

// declare var SmartHomeManagerWebServiceDescriptorService: any;

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styles: []
})

export class SettingsComponent implements OnInit {

  simpleJSFile: any;
  SmartHomeManagerWebServiceDescriptorServiceObj: any;
  responseString: string;


  constructor() {
    // this.SmartHomeManagerWebServiceDescriptorServiceObj = new SmartHomeManagerWebServiceDescriptorServiceObj();
    // this.responseString = this.smartHomeManagerWebServiceDescriptorServiceObj.getLocation().toString();
    // this.simpleJSFile = require('./assets/js/.js');
    // this.responseString = this.simpleJSFile.myFunction(1, 2).toString;
    // const my = new MyClass();
    // my.add(1, 3);
  }


  // wsprovider_connection_global_smarthome_thm_de__weatherStationTransferObject

  // methode
  // wsprovider_connection_global_smarthome_thm_de__halloWelt_op_onsuccess(client, responseXml)

  ngOnInit() {
  }

  f() {
    // test();
    halloWelt();
  }

}
