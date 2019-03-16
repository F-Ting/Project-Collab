import { Component, OnInit, Input } from '@angular/core';
import { TagsService } from './tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input() projectId = null;
  error: boolean = false;
  tags: Array<any> = [];
  colour: 'primary';


  constructor(private tagsService: TagsService) { }

  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagsService.getForProject(this.projectId).subscribe(
      (response: Array<any>) => {
        this.tags = response.map(tag => ({ tag: tag.tag, colour: this.colour }));
      },
      error => {
        this.error = true;
      }
    );
  }
}
