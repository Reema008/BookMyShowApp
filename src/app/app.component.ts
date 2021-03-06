import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

//import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
contentArray:any
theatre:any
smovie:any
stheatre:any
phone:any={}
tickets:any={}
  constructor(private http: HttpClient) { }

 ngOnInit(){
  this.getList()
 }
 
getList(){
 
  this.http.get('http://localhost:4180/api/movies')
  .subscribe((res) => {
    this.contentArray = res;
  }, error => {
    console.log(error);
  });
}

postList(id,namem){
 this.smovie=namem;
 this.stheatre="";
  this.http.post('http://localhost:4180/api/theatres', id)
  .subscribe((res) => {
    this.theatre = res;
  }, error => {
    console.log(error);
  });
}

bookingDetails(namet){
  this.stheatre=namet;
}

booked(){
  console.log(this.phone);
  console.log(this.tickets);
  if((this.stheatre==null)||(this.phone.phonenumber==null)||(this.tickets.ticketsnumber==null))
  alert("Fill all the fields");
  else
  alert("Booking Successful");
}
}
