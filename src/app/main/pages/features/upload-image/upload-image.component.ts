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

  
  onFileSelected(files: FileList | null): void {
    // if (files && files.length > 0) {
    //   this.selectedFile = files.item(0);
    // }
  }

  uploadFile(): void {
    // if (!this.presignedUrl || !this.selectedFile) {
    //   console.error('Presigned URL or file is missing.');
    //   return;
    // }

    // const formData = new FormData();
    // formData.append('file', this.selectedFile);

    // this.http.put(this.presignedUrl, formData).subscribe(response => {
    //   console.log('Upload successful', response);
    //   // Handle success
    // }, error => {
    //   console.error('Upload error', error);
    //   // Handle error
    // });
  }

}
