import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTableeComponent } from './player-tablee.component';

describe('PlayerTableeComponent', () => {
  let component: PlayerTableeComponent;
  let fixture: ComponentFixture<PlayerTableeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerTableeComponent]
    });
    fixture = TestBed.createComponent(PlayerTableeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
