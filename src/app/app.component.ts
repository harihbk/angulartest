import { Component , ViewChild , ElementRef } from '@angular/core';
import { PDFAnnotate } from "../assets/pdf"


const ppdf = ((window)as any).pdfjsLib;
var jspdf = (window as any).jsPDF;

//declare function PDFAnnotate(a:any,b:any,c:any):any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  @ViewChild('pdfcanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  canvaspdf: any;
  pdf: any;
  selectedColor : any;


  ngOnInit() {

     this.pdf =  new PDFAnnotate("pdf-container", "./assets/testpdf.pdf", {
      onPageUpdated(page:any, oldData:any, newData:any) {
        console.log(page, oldData, newData);
      },
      ready() {
        console.log("Plugin initialized successfully");
      },
      scale: 1.5,
      pageImageCompression: "MEDIUM", // FAST, MEDIUM, SLOW(Helps to control the new PDF file size)
    });



  }

  ngAfterViewInit() {





  }



   enableSelector(event:any) {
    event.preventDefault();
  //  changeActiveTool(event);
  this.pdf.enableSelector();
}

 enablePencil() {
  this.pdf.enablePencil();
}

 enableAddText(event:any) {
    event.preventDefault();
  //  changeActiveTool(event);
  this.pdf.enableAddText();
}

 enableAddArrow(event:any) {
    event.preventDefault();
  //  changeActiveTool(event);
  this.pdf.enableAddArrow();
}

 addImage(event:any) {
    event.preventDefault();
    this.pdf.addImageToCanvas()
}

 enableRectangle() {
   this.pdf.setColor('rgba(255, 0, 0, 0.3)');
   this.pdf.setBorderColor('blue');
   this.pdf.enableRectangle();
}

 deleteSelectedObject() {
  this.pdf.deleteSelectedObject();
}

clearPage() {
  this.pdf.clearActivePage();
}


changecolor(color:any){
this.pdf.setColor(color);
}

brushsize(ev:any){
  let num = ev.target.value || 2

  this.pdf.setBrushSize(num);
}
testevent(event : any) {
  this.selectedColor = event.target.value
  this.changecolor(event.target.value);
}

  onclick(){


  }
}
