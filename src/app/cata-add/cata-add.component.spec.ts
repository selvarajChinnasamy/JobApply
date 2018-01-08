import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CataAddComponent } from './cata-add.component';

describe('CataAddComponent', () => {
  let component: CataAddComponent;
  let fixture: ComponentFixture<CataAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CataAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CataAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
