class Particle {
  constructor(x, y, size, color, weight, speedFactor) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
    this.directionX = 0;
    this.directionY = 0;
    this.vertices = this.generateVertices();
    this.inCanvas = true;
    this.speedFactor = speedFactor;
  }

  generateVertices() {
    const vertices = [];
    const numVertices = Math.floor(Math.random() * 5) + 3;
    for (let i = 0; i < numVertices; i++) {
      const angle = (i / numVertices) * Math.PI * 2;
      const radius = this.size * (Math.random() * 0.5 + 0.5);
      vertices.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      });
    }
    return vertices;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(this.x + this.vertices[0].x, this.y + this.vertices[0].y);
    for (let i = 1; i < this.vertices.length; i++) {
      ctx.lineTo(this.x + this.vertices[i].x, this.y + this.vertices[i].y);
    }
    ctx.closePath();
    ctx.fill();
  }

  update(ctx, mouse, canvas) {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      if (distance < 50) distance = 50;
      let forceDirectionX = dx / distance;
      let forceDirectionY = dy / distance;
      let maxDistance = mouse.radius;
      let force = (maxDistance - distance) / maxDistance + 0.5;
      let directionX = forceDirectionX * force * this.weight * 5 * this.speedFactor;
      let directionY = forceDirectionY * force * this.weight * 5 * this.speedFactor;
      this.x -= directionX;
      this.y -= directionY;

      this.directionX = (Math.random() - 0.5) * 2 * this.speedFactor;
      this.directionY = (Math.random() - 0.5) * 2 * this.speedFactor;
    } else {
      this.directionX *= 0.95 * this.speedFactor;
      this.directionY *= 0.95 * this.speedFactor;
    }

    this.x += this.directionX;
    this.y += this.directionY;

    if (this.x < -7.4 || this.x > (canvas.width + 7.4) || this.y < -7.4 || this.y > (canvas.height + 7.4)) {
      this.inCanvas = false;
    }

    this.draw(ctx);
  }
}

export default Particle;
