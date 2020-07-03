import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public title: Title, private http: HttpClient){
    this.http.get("https://us-central1-angular-ssr-u.cloudfunctions.net/api/").subscribe( (data: any) => {
      console.log(data);
    }),
    error => console.log(error);
    this.title.setTitle("Hello");
  }
}
