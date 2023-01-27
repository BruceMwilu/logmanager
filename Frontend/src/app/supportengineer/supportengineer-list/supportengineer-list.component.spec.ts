import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportengineerListComponent } from './supportengineer-list.component';

describe('SupportengineerListComponent', () => {
  let component: SupportengineerListComponent;
  let fixture: ComponentFixture<SupportengineerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportengineerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportengineerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
