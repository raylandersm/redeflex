import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuServico } from './menu-servico';

describe('MenuServico', () => {
  let component: MenuServico;
  let fixture: ComponentFixture<MenuServico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuServico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuServico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
