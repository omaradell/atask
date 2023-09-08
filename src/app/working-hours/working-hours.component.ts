import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css'],
})
export class WorkingHoursComponent implements OnInit {
  days: Array<{
    name: string;
    isWorking: boolean;
    startTime: string;
    endTime: string;
  }> = [];

  constructor() {}

  ngOnInit() {
    this.days.push({
      name: 'الاحد',
      isWorking: true,
      startTime: '',
      endTime: '',
    });
    this.days.push({
      name: 'الإثنين',
      isWorking: true,
      startTime: '',
      endTime: '',
    });
    this.days.push({
      name: 'الثلاثاء',
      isWorking: true,
      startTime: '',
      endTime: '',
    });
    this.days.push({
      name: 'الأربعاء',
      isWorking: true,
      startTime: '',
      endTime: '',
    });
    this.days.push({
      name: 'الخميس',
      isWorking: true,
      startTime: '',
      endTime: '',
    });
  }

  toggleWorkingDay(index: number) {
    this.days[index].isWorking = !this.days[index].isWorking;
  }

  onStartTimeChange(index: number, value: string) {
    this.days[index].startTime = value;
  }

  onEndTimeChange(index: number, value: string) {
    this.days[index].endTime = value;
  }

  saveWorkingHours() {
    console.log(this.days);
  }
}
// days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// workingHours: { [key: string]: number } = {};

// // Function to increment working hours for a specific day
// incrementHours(day: string) {
//   if (!this.workingHours[day]) {
//     this.workingHours[day] = 1;
//   } else {
//     this.workingHours[day]++;
//   }
// }
// }
