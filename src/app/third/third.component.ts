import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent{

	geta()
	{
		return 10;
	}
	getb()
	{
		return 20;
	}
}
