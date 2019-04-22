import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';



@Component({
  selector: 'app-preview-test',
  templateUrl: './preview-test.component.html',
  styleUrls: ['./preview-test.component.css']
})
export class PreviewTestComponent implements OnInit {
  data: any;
  userName:any = localStorage.getItem('name');
  one:any = localStorage.getItem('one');
  two:any = localStorage.getItem('two');
  three:any = localStorage.getItem('three');


  // userName: string = localStorage.getItem()
  constructor(private myService: MyserviceService,
    private _router: Router, private _activatedRoute: ActivatedRoute) {
      
    }

  ngOnInit() {
    const payload: any = {};
    payload.userName = this.userName;
    console.log('user anmae is = ',this.userName);
    this.myService.answerGet(payload)
    .subscribe(
      
    );
  }

submit() {
  this._router.navigate(['../dash'], { relativeTo: this._activatedRoute });
}

}
