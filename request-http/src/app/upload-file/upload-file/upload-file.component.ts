import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModelComponent } from 'src/app/shared/alert-model/alert-model.component';
import { UploadServiceService } from './upload-service.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  files!: Set<File>;

  progress = 0;

  bsModalRef!: BsModalRef

  constructor(
    private service: UploadServiceService,
    private bsModalService:BsModalService
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
            this.handleError();
          }else if(event.type === HttpEventType.UploadProgress){
            const percentualUpload = Math.round((event.loaded * 100) / event.total);
            this.progress = percentualUpload;
          }
        } 
        );
    }
  }

  handleError() {
    this.bsModalRef = this.bsModalService.show(AlertModelComponent);
    this.bsModalRef.content.tipo = 'success';
    this.bsModalRef.content.message = 'Arquivo enviado!';
  }

  handleErrorDownload() {
    this.bsModalRef = this.bsModalService.show(AlertModelComponent);
    this.bsModalRef.content.tipo = 'success';
    this.bsModalRef.content.message = 'Download Concluido!';
  }

  downloadPdf(){
    this.service.download('/api/downloadPdf').subscribe(
      (res:any) => {
        const file = new Blob([res],{
          type: res.type
        });

        //SUPORTE IE
        const nav = (window.navigator as any);
        if(window.navigator && nav.msSaveOrOpenBlob){
          nav.msSaveOrOpenBlob(file);
        }
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = '0EGIlePNyg_Iv9fdRiUpVqzN.pdf';
        link.click();

        //SUPORTE FIREFOX
        link.dispatchEvent(new MouseEvent('click',{
          bubbles: true,
          cancelable:true,
          view:window
        }));

        setTimeout(()=>{
          window.URL.revokeObjectURL(blob);
        link.remove();
        },100);
      }
    );
  }

  downloadExcel(){
    this.service.download('/api/downloadPdf').subscribe(
      (res:any) => {
        const file = new Blob([res],{
          type: res.type
        });

        //SUPORTE IE
        const nav = (window.navigator as any);
        if(window.navigator && nav.msSaveOrOpenBlob){
          nav.msSaveOrOpenBlob(file);
        }
        const blob = window.URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = blob;
        link.download = '0EGIlePNyg_Iv9fdRiUpVqzN.pdf';
        link.click();

        //SUPORTE FIREFOX
        link.dispatchEvent(new MouseEvent('click',{
          bubbles: true,
          cancelable:true,
          view:window
        }));

        setTimeout(()=>{
          window.URL.revokeObjectURL(blob);
        link.remove();
        },100);

        
      }
    );
  }
}
