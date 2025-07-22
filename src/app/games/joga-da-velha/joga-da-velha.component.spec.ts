import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogaDaVelhaComponent } from './joga-da-velha.component';

describe('JogaDaVelhaComponent', () => {
  let component: JogaDaVelhaComponent;
  let fixture: ComponentFixture<JogaDaVelhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogaDaVelhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JogaDaVelhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
