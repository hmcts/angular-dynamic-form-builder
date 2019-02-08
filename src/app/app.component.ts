import {Component, OnInit} from '@angular/core';
import {formObj} from '../mock/form-builder.mock';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageItems: any; // todo add the type
  pageValues: any;
  pageId: string;
  isPageValid = false;
  MockPageId = 'organisation-name';
  pageParam: any;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  onContinue(formGroupData): void {
    if (formGroupData.invalid ) {
      this.isPageValid = true;
    } else {
      this.isPageValid = false;
      const { value } = formGroupData;
      const nextUrl = value.nextUrl;
      // delete value.nextUrl; // removing nextUrl so ti doesn't overwrite the one from the server payload.
      console.log('data', value, value.nextUrl)
      this.router.navigate(['./register', value.nextUrl]);
      this.pageItems = formObj[`${value.nextUrl}`]['meta'];
    }
  }
  ngOnInit(): void {
    this.pageItems = formObj[`${this.MockPageId}`]['meta'];
    this.pageValues = [];

    this.route.params.subscribe(params => {
      console.log('params', params)
      this.pageParam = +params['id']; // (+) converts string 'id' to a number

      console.log('pageParam', this.pageParam);
      // In a real app: dispatch action to load the details here.
    });

  }

}
