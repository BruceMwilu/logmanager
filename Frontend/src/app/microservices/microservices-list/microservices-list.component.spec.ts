import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroservicesListComponent } from './microservices-list.component';

describe('MicroservicesListComponent', () => {
  let component: MicroservicesListComponent;
  let fixture: ComponentFixture<MicroservicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroservicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroservicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
