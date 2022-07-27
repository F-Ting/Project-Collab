import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsAutocompleteComponent } from './tags-autocomplete.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TagsAutocompleteComponent', () => {
  let component: TagsAutocompleteComponent;
  let fixture: ComponentFixture<TagsAutocompleteComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsAutocompleteComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsAutocompleteComponent);
    component = fixture.componentInstance;
    component.group = formBuilder.group({
      tags: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
