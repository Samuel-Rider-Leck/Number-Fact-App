import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from '@angular/common/http';

interface Fact {
  fact: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private  httpClient:HttpClient) {}
  
  //API section
  fact : string = "Number Facts will show up here!";
  
  getFact = () => {
    this.httpClient.get("http://numbersapi.com/"+this.count.toString(), {responseType: 'text'})
      .subscribe(data => this.fact = data);
  }
  
  //Counter Section
  count = 0;
  items = Array(3).fill(0).map((x,i)=>2-i);
  digits = Array(3).fill(0);
  
  onClickUp = digit => {
    this.count += 10 ** digit;
    this.updateDigits();
    this.getFact();
  }
  
  onClickDown = digit => {
    this.count -= 10 ** digit;
    if (this.count<0)
      this.count = 0;
    this.updateDigits();
    this.getFact();
  }
  
  private updateDigits = () => {
    for(var num = 0; num<3; num++){
      //putting individual digits from count into digits array
      this.digits[num] = Math.floor(this.count / (10 ** num) % 10);
    }
  } 
  
}
