
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDashboardComponent } from './photos-dashboard.component';

describe('PhotosDashboardComponent', () => {
  let component: PhotosDashboardComponent;
  let fixture: ComponentFixture<PhotosDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
