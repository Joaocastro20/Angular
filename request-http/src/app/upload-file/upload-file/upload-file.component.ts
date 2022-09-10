import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange(evento:any){
    const selectFiles = <FileList>evento.srcElement.files;
    // document.getElementById('customFileLabel').innerHTML = selectFiles[0].name;
  }
}
