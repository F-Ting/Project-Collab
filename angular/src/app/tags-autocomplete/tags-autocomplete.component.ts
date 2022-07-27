import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from '../search/search.service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-tags-autocomplete',
  templateUrl: './tags-autocomplete.component.html',
  styleUrls: ['./tags-autocomplete.component.css']
})
export class TagsAutocompleteComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  public separatorKeysCodes: number[] = [ENTER, COMMA];

  @Input() group: FormGroup;
  @Input() tags: string[] = [];
  @Output() tagsChanged: EventEmitter<string[]> = new EventEmitter();

  tagAutocompleteController = new FormControl();
  filteredTags: Observable<string[]>;
  allTags: string[] = [];

  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private searchService: SearchService) {
    this.filteredTags = this.tagAutocompleteController.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  ngOnInit() {
    const tagInput = this.group.get('tags').value;
    // TODO: Create a new endpoint to search for tags containing a substring of the input?
    // TODO: Make this more generic so it can be used for user tags too?
    this.searchService.getRecommendedTags().subscribe(tags => {
      this.allTags = tags;
    });

    if (tagInput) {
      this.tags = tagInput.slice(0);
    }
   }

  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (this.matAutocomplete.isOpen) {
      return;
    }

    const input = event.input;
    const value = event.value;

    // Avoid duplicate tags
    if (this.tags.indexOf(value) === -1) {
      // Add our tag
      if ((value || '').trim()) {
        this.tags.push(value.trim());
        this.tagsChanged.emit(this.tags);
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.tagAutocompleteController.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.tagsChanged.emit(this.tags);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.viewValue;

    if (this.tags.indexOf(value) === -1) {
      this.tags.push(event.option.viewValue);
      this.tagsChanged.emit(this.tags);
    }

    this.tagInput.nativeElement.value = '';
    this.tagAutocompleteController.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}