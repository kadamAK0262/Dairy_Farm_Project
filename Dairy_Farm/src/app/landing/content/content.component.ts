import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

}

interface BreakpointMap {
  [key: string]: number;
}

const containerMaxWidths: BreakpointMap = {
  'sm': 540,
  'md': 720,
  'lg': 960,
  'xl': 1140,
};

const gridBreakpoints: BreakpointMap = {
  'sm': 576,
  'md': 768,
  'lg': 992,
  'xl': 1200,
};

function makeContainer(): void {
  // Implement the make-container logic here
  // You can just leave this function empty since it's not defined in the provided code
}

// function breakpointInfix(name: string, breakpoints: BreakpointMap): string {
//   // Implement the breakpoint-infix logic here
//   // You can just return an empty string since it's not defined in the provided code
// }

function mediaBreakpointUp(breakpoint: string, breakpoints: BreakpointMap): void {
  // Implement the media-breakpoint-up logic here
  // You can just leave this function empty since it's not defined in the provided code
}



