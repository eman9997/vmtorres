
import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.scss']
})
export class ConfettiComponent implements AfterViewInit {
  @ViewChild('confetti') canvas: ElementRef<HTMLCanvasElement> | undefined;
  private ctx: CanvasRenderingContext2D | undefined;

  private particles: any[];
  private W: number = window.innerWidth;
  private H: number = window.innerHeight;
  private mp: number = 150; // max particles

  constructor() {
    this.particles = [];
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    this.ctx = this.canvas!.nativeElement.getContext('2d')!;
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
    this.initParticles();
    // setInterval(() => this.draw(), 23);
    this.animate();
  }

  private animate(): void {
    this.draw();
    requestAnimationFrame(this.animate.bind(this));
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateDimensions();
  }

  private updateDimensions() {
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.canvas!.nativeElement.width = this.W;
    this.canvas!.nativeElement.height = this.H;
  }

  private initParticles() {
    // particles
    var types = ['circle', 'circle', 'triangle', 'triangle', 'line'];
    var colors = [
      [238, 96, 169],
      [68, 213, 217],
      [245, 187, 152],
      [144, 148, 188],
      [235, 234, 77]
    ];
    var angles = [
      [4,0,4,4],
      [2,2,0,4],
      [0,4,2,2],
      [0,4,4,4]
    ];
    for (var i = 0; i < this.mp; i++) {
      this.particles.push({
        x: Math.random() * this.W!,
        y: Math.random() * this.H!,
        r: Math.random() * 4 + 1,
        d: Math.random() * this.mp,
        l: Math.floor(Math.random()*65+-30),
        a: angles[Math.floor(Math.random()*angles.length)],
        c: colors[Math.floor(Math.random()*colors.length)],
        t: types[Math.floor(Math.random()*types.length)]
      });
    }
  }

  draw() {
    this.ctx!.clearRect(0, 0, this.W, this.H);
    for (var i = 0; i < this.mp; i++) {
      var p = this.particles[i];
      var op = (p.r <= 3) ? 0.4 : 0.8;
      
      if (p.t == 'circle'){
        this.ctx!.fillStyle = "rgba(" + p.c + ", "+ op +")";
        this.ctx!.beginPath();
        this.ctx!.moveTo(p.x, p.y);
        this.ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        this.ctx!.fill();
      } else if (p.t == 'triangle'){
        this.ctx!.fillStyle = "rgba(" + p.c + ", "+ op +")";
        this.ctx!.beginPath();
        this.ctx!.moveTo(p.x, p.y);
        this.ctx!.lineTo(p.x + (p.r*p.a[0]), p.y + (p.r*p.a[1]));
        this.ctx!.lineTo(p.x + (p.r*p.a[2]), p.y + (p.r*p.a[3]));
        this.ctx!.closePath();
        this.ctx!.fill(); 
      } else if (p.t == 'line') {
        this.ctx!.strokeStyle = "rgba(" + p.c + "," + op +")";
        this.ctx!.beginPath();
        this.ctx!.moveTo(p.x, p.y);
        this.ctx!.lineTo(p.x + p.l, p.y + (p.r * 5));
        this.ctx!.lineWidth = 2;
        this.ctx!.stroke();
      } 
  
    }
    this.update();
  }

  update() {
    for (var i = 0; i < this.mp; i++) {
      var p = this.particles[i];
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(0) * 2;
      
      if (p.x > this.W + 5 || p.x < -5 || p.y > this.H) {
        this.particles[i] = {
          x: Math.random() * this.W,
          y: -10,
          r: p.r,
          d: p.d,
          l: p.l,
          a: p.a,
          c: p.c,
          t: p.t
        };
      }
    }
  }


}



