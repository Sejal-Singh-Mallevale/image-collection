import { Component, OnInit } from '@angular/core';
import { CognitoService } from 'src/app/main/core/services/cognito.service.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit{

  constructor(private cognitoService: CognitoService) {}
  ngOnInit(): void {
  }
  SignOut(){
    this.cognitoService?.SignOut();
  }

}
