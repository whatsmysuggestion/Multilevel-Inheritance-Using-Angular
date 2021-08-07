import { Component, OnInit } from '@angular/core';
import { ThirdComponent } from '../third/third.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent extends ThirdComponent {
	
	sum()
	{
		return(this.geta()+this.getb());
	}

  
}
