import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideNavMenuComponent } from './app-side-nav-menu.component';

describe('AppSideNavMenuComponent', () => {
  let component: AppSideNavMenuComponent;
  let fixture: ComponentFixture<AppSideNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSideNavMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
