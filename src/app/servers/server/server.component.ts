import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {

  serverName:String = '';
  serverCreateStatus:String = 'There is no server';
  serverIp:String = '';

  constructor() { 
    
  }

  ngOnInit(): void {
  
  }

  getServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateServer(): void {
    this.serverCreateStatus = 'Server is created. Server name is '+ this.serverName +' and server IP is '+ this.serverIp;
  }
}
