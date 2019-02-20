import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  expand = false;


  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  filterTags: String[] = [];
  filterUsers: String[] = [];
  filterProjects: String[] = [];

  recomendedTags: String[] = ['tag1', 'tag2', 'tag3', 'tag4'];

  constructor() {}

  ngOnInit() {}

  open(): void {
    this.expand = true;
  }

  addFilterTag(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.filterTags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  addFilterUser(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.filterUsers.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  addFilterProject(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.filterProjects.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeFilterTag(tag: String): void {
    const index = this.filterTags.indexOf(tag);

    if (index >= 0) {
      this.filterTags.splice(index, 1);
    }
  }

  removeUserTag(tag: String): void {
    const index = this.filterUsers.indexOf(tag);

    if (index >= 0) {
      this.filterUsers.splice(index, 1);
    }
  }

  removeProjectTag(project: String): void {
    const index = this.filterProjects.indexOf(project);

    if (index >= 0) {
      this.filterProjects.splice(index, 1);
    }
  }

  removeRecomendedTag(tag: String): void {
    const index = this.recomendedTags.indexOf(tag);

    if (index >= 0) {
      this.recomendedTags.splice(index, 1);
      this.filterTags.push(tag);
    }
  }

  search(): void {
    this.expand = false;
  }
}
