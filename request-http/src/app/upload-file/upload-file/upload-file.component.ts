import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from './upload-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files!: Set<File>;

  progress = 0;

  constructor(
    private service: UploadServiceService
  ) { }

  ngOnInit(): void {
  }

  onChange(evento:any){
    const selectFiles = <FileList>evento.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectFiles[0].name;
    this.files = new Set();
    this.files.add(selectFiles[0]);
    this.progress = 0;
  }

  onUpload(){
    if(this.files && this.files.size >= 0){
      this.service.upload(this.files,'/api/upload').subscribe(
        (event:any) => {
          if(event.type === HttpEventType.Response){
            console.log('upload success!');
          }else if(event.type === HttpEventType.UploadProgress){
            const percentualUpload = Math.round((event.loaded * 100) / event.total);
            this.progress = percentualUpload;
          }
        } 
        );
    }
  }
}
