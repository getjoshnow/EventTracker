import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestService } from './service.component';

describe('TestService', () => {
  let component: TestService;
  let fixture: ComponentFixture<TestService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
