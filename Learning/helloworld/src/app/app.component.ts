import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'helloworld';

  ngOnInit(): void {

    $('#bu').on('click', function () {
      $('.aa').css('color', 'red');
    });


  }


}
