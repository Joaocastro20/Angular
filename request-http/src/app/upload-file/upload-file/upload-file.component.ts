import { Component, OnInit } from '@angular/core';
import { UploadServiceService } from './upload-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files!: Set<File>;

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
    console.log(this.files)
  }

  onUpload(){
    if(this.files && this.files.size >= 0){
      this.service.upload(this.files,'/api/upload').subscribe(
        response => console.log('upload success!')
        );
    }
  }
}
