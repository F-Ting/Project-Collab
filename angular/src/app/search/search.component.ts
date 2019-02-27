import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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

  filterTags: string[] = [];
  filterUsers: string[] = [];
  filterProjects: string[] = [];

  formGroup: FormGroup = new FormGroup({
    searchTagsControl: new FormControl(),
    searchUsersControl: new FormControl(),
    searchProjectsControl: new FormControl()
  });

  recomendedTags: string[] = ['tag1', 'tag2', 'tag3', 'tag4'];

  searchTags: string[] = ['tag1', 'tag2', 'tag3', 'tag4'];
  filteredSearchTags: Observable<string[]>;

  searchUsers: string[] = ['user1', 'user2', 'user3', 'user3'];
  filteredSearchUsers: Observable<string[]>;

  searchProjects: string[] = ['proj1', 'aproj2', 'bproj3'];
  filteredSearchProjects: Observable<string[]>;

  constructor() {}

  ngOnInit() {
    // Fill search tags users and projects from backend
    this.filteredSearchTags = this.formGroup.get('searchTagsControl').valueChanges.pipe(
        startWith(''), map(value => this._filterTags(value)));
    this.filteredSearchUsers = this.formGroup.get('searchUsersControl').valueChanges.pipe(
        startWith(''), map(value => this._filterUsers(value)));
    this.filteredSearchProjects = this.formGroup.get('searchProjectsControl').valueChanges.pipe(
        startWith(''), map(value => this._filterProjects(value)));
  }

  private _filterTags(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }

  private _filterUsers(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchUsers.filter(tag => tag.toLowerCase().includes(filterValue));
  }

  private _filterProjects(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.searchProjects.filter(tag => tag.toLowerCase().includes(filterValue));
  }

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
      this.formGroup.get('searchTagsControl').setValue('');
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
      this.formGroup.get('searchUsersControl').setValue('');
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
      this.formGroup.get('searchProjectsControl').setValue('');
    }
  }

  removeFilterTag(tag: string): void {
    const index = this.filterTags.indexOf(tag);

    if (index >= 0) {
      this.filterTags.splice(index, 1);
    }
  }

  removeUserTag(tag: string): void {
    const index = this.filterUsers.indexOf(tag);

    if (index >= 0) {
      this.filterUsers.splice(index, 1);
    }
  }

  removeProjectTag(project: string): void {
    const index = this.filterProjects.indexOf(project);

    if (index >= 0) {
      this.filterProjects.splice(index, 1);
    }
  }

  removeRecomendedTag(tag: string): void {
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
