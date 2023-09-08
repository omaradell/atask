import { Component } from '@angular/core';
interface Selection {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent {
  counterValue: number = 30;

  increment() {
    this.counterValue += 30;
  }

  decrement() {
    if (this.counterValue >= 30) {
      this.counterValue -= 30;
    }
  }

  duration: Selection[] = [
    { value: 'months-0', viewValue: 'شهر' },
    { value: 'weeks-1', viewValue: 'اسابيع' },
    { value: 'days-2', viewValue: 'ايام' },
  ];
  // timeSlots: { time: string; selected: boolean; enabled: boolean }[] = [
  //   { time: '09:00 AM - 10:00 AM', selected: false, enabled: true },
  //   { time: '10:00 AM - 11:00 AM', selected: false, enabled: true },
  //   // Add more time slots as needed
  // ];

  // selectedReservations: number = 0;

  // // Function to show the number of selected reservations
  // showSelectedReservations() {
  //   this.selectedReservations = this.timeSlots.filter(slot => slot.selected).length;
  // }
}
