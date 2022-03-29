import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChannelComponent } from './event-channel.component';

describe('EventChannelComponent', () => {
  let component: EventChannelComponent;
  let fixture: ComponentFixture<EventChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
