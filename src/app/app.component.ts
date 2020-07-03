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
    this.http.get("https://os-sagarvd-me.github.io/api-sample/index.json").subscribe( (data: any) => {
      console.log(data);
    })
    this.title.setTitle("Hello");
  }
}
