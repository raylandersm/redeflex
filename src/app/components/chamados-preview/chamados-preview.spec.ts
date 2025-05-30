import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosPreview } from './chamados-preview';

describe('ChamadosPreview', () => {
  let component: ChamadosPreview;
  let fixture: ComponentFixture<ChamadosPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChamadosPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadosPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
