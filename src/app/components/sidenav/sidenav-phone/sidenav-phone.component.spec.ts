import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPhoneComponent } from './sidenav-phone.component';

describe('SidenavPhoneComponent', () => {
  let component: SidenavPhoneComponent;
  let fixture: ComponentFixture<SidenavPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavPhoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
