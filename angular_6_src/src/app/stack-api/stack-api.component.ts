import { Component, OnInit} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stack-api',
  templateUrl: './stack-api.component.html',
  styleUrls: ['./stack-api.component.css']
})
export class StackApiComponent implements OnInit {
  sort_select = ['activity', 'votes', 'creation', 'relevance'];
  order_select = ['ascending', 'descending'];
  included_tag_list = [];
  excluded_tag_list = [];
  obtained_data = null;
  FormData = {
      tagged: [],
      nottagged: [],
      intitle: '',
      fromdate: null,
      todate: null,
      sort: '',
      order: '',
      number_of_results: null,
      max: null,
      min: null,
  };
  constructor(private dataService: DataService, public datepipe: DatePipe, public router: Router) { }
  ngOnInit() {
    this.FormData.number_of_results = 10;
    this.FormData.sort = 'votes';
    this.FormData.order = 'ascending';
  }
  removeTag(tag, list) {
    var index = list.indexOf(tag);
    list.splice(index, 1);
  }
  onAddTags(tag) {
    this.included_tag_list.push(tag);
  }
  onAddExTags(tag) {
    this.excluded_tag_list.push(tag);
  }
  refresh_page() {
    window.location.reload();
  }
  FormSubmit() {
    this.FormData.fromdate = this.datepipe.transform(this.FormData.fromdate, 'dd/MM/yyyy');
    this.FormData.todate = this.datepipe.transform(this.FormData.todate, 'dd/MM/yyyy');
    this.dataService.GetQuestions({'data': this.FormData}).subscribe(message => {
      console.log(message);
     if (message.status !== 400) {
        alert(message.message);
        this.obtained_data = message.data;
        console.log(this.obtained_data);
      } else {
        alert('Sorry something went wrong');
      }
    }, error => {
       if (error.status === 429) {
        alert(error.error.message + ' Try after sometime' );
      }
    });
  }
}
