import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsComponent } from './tags.component';
import { MatChipsModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let fixture: ComponentFixture<TagsComponent>;
  const dummyTags = ['test'];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TagsComponent],
      imports: [
        MatChipsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a mat-chip element', () => {
    expect(document.getElementsByTagName('mat-chip')).toBeTruthy();
  });

  it('should contain a tag', () => {
    component.tags = dummyTags;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const chip = fixture.debugElement.query(By.css('.mat-chip'));
      expect(chip.nativeElement.innerText).toEqual(dummyTags[0]);
    });
  });

});
