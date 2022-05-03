import { Component, OnInit } from '@angular/core';
import { Upload } from 'src/app/models/upload';

@Component({
  selector: 'app-vuploads',
  templateUrl: './vuploads.page.html',
  styleUrls: ['./vuploads.page.scss'],
})
export class VuploadsPage implements OnInit {

  upForm: Upload = new Upload();

  constructor() { }

  ngOnInit() {
  }

}
