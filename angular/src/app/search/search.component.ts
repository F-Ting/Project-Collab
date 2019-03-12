import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { SearchService } from './search.service';
import { Project } from '../models/project';
import { User } from '../models/user';

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

  recomendedTags: string[];

  searchTags: string[];
  filteredSearchTags: Observable<string[]>;

  searchUsers: string[];
  filteredSearchUsers: Observable<string[]>;

  searchProjects: string[];
  filteredSearchProjects: Observable<string[]>;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    // Fill search tags users and projects from backend
    this.filteredSearchTags = this.formGroup.get('searchTagsControl').valueChanges.pipe(
        startWith(''), map(value => this._filterTags(value)));

    this.searchService.getUsers().subscribe((users) => {
      this.searchUsers = users.map((user: User) => user.username);
      this.filteredSearchUsers = this.formGroup.get('searchUsersControl').valueChanges.pipe(
          startWith(''), map(value => this._filterUsers(value)));
    });

    this.searchService.getProjects().subscribe((projects) => {
      this.searchProjects = projects.map((project: Project) => project.name);
      this.filteredSearchProjects = this.formGroup.get('searchProjectsControl').valueChanges.pipe(
          startWith(''), map(value => this._filterProjects(value)));
    });
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

  addFilterUser(user: string): void {
    // Add our fruit
    if ((user || '').trim() && !this.filterUsers.includes(user.trim())) {
      this.filterUsers.push(user.trim());
    }
  }

  addFilterUserChipEvent(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    this.addFilterUser(value);

    // Reset the input value
    if (input) {
      input.value = '';
      this.formGroup.get('searchUsersControl').setValue('');
    }
  }

  addFilterProject(project: string): void {
    // Add our fruit
    if ((project || '').trim() && !this.filterProjects.includes(project.trim())) {
      this.filterProjects.push(project.trim());
    }
  }

  addFilterProjectChipEvent(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    this.addFilterProject(value);

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
