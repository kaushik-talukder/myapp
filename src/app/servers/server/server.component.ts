import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent implements OnInit {

  serverName:String = '';
  serverCreateStatus:String = 'There is no server';
  serverIp:String = '';

  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  
  }

  getServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateServer(): void {
    this.serverCreateStatus = 'Server is created. Server name is '+ this.serverName +' and server IP is '+ this.serverIp;
  }
  onReload(){
    console.log('adsa');
    this.router.navigate(['servers']);
  }
}
