import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AbwsService } from '../abws.service';

@Component({
  selector: 'app-th',
  templateUrl: './th.component.html',
  styleUrls: ['./th.component.scss'],
  providers: [AbwsService]
})
export class ThComponent implements OnInit {
  topicName;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private abws: AbwsService
  ) { }

  ngOnInit() {
    const topicName = this.route.snapshot.paramMap.get('topic');
    this.topicName = topicName;
    this.abws.connect();
  }

}
