import { Component , OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hello';


  ngOnInit(): void {

    $('#modalButton').on('click', function() {
    });

    var btn = document.getElementById("button");

    btn?.addEventListener("click", function() {
      alert("Hello world");
    });

  }
}
