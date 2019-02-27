import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { MatGridListModule, MatCardModule, MatButtonModule, MatIconModule,MatListModule, MatSidenavModule,
  MatToolbarModule} from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent,ProjectFormComponent ],
      imports: [
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        HttpClientTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
