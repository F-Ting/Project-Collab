import { Component, OnInit, Input } from '@angular/core';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input() tags: Array<String> = [];
  error: boolean = false;
  colour: 'primary';

  constructor(private tagsService: TagsService) { }

  ngOnInit() { }
}
