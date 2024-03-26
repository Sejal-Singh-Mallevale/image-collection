import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ImageListComponent } from './image-list/image-list.component';

const routes: Routes = [
  {
    path: 'upload-image',
    component: UploadImageComponent
  },
  {
    path: 'image-list',
    component: ImageListComponent
  }
];

@NgModule({
  declarations: [
    UploadImageComponent,
    NavbarComponent,
    ImageListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UploadImageComponent,
    NavbarComponent,
    ImageListComponent
  ]
})
export class FeaturesModule { }
