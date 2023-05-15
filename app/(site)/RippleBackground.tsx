"use client";

import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

interface Particle {
  pos: p5Types.Vector;
  vel: p5Types.Vector;
  acc: p5Types.Vector;
  applyForce: (force: p5Types.Vector) => void;
  update: () => void;
  show: (p5: p5Types) => void;
}

export const RippleBackground = () => {
  let particles: Particle[] = [];

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
    for (let i = 0; i < p5.width; i += 20) {
      for (let j = 0; j < p5.height; j += 20) {
        particles.push(newParticle(i, j, p5));
      }
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    for (let particle of particles) {
      particle.update();
      particle.show(p5);
    }
  };

  const mousePressed = (p5: p5Types) => {
    for (let particle of particles) {
      let d = p5.dist(p5.mouseX, p5.mouseY, particle.pos.x, particle.pos.y);
      let force = p5.createVector(
        p5.mouseX - particle.pos.x,
        p5.mouseY - particle.pos.y
      );
      force.div(d);
      force.mult(50);
      particle.applyForce(force);
    }
  };

  const newParticle = (x: number, y: number, p5: p5Types): Particle => {
    let pos = p5.createVector(x, y);
    let vel = p5.createVector();
    let acc = p5.createVector();

    const applyForce = (force: p5Types.Vector) => {
      acc.add(force);
    };

    const update = () => {
      vel.add(acc);
      pos.add(vel);
      acc.mult(0);
      vel.mult(0.99);
    };

    const show = (p5: p5Types) => {
      p5.fill(255, 255, 255, 100); // The last parameter is the alpha value (0-255). Lower values make the color more transparent.
      p5.noStroke();
      p5.ellipse(pos.x, pos.y, 2);
    };

    return { pos, vel, acc, applyForce, update, show };
  };

  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed} />;
};
