$(function() {
  $(".sparkley:first").sparkleh();
});

$.fn.sparkleh = function(options) {
  return this.each(function(k, v) {
      var $this = $(v).css("position", "relative");
      var settings = $.extend({
          width: 80,
          height: 80,
          color: "rainbow",
          count: 100,
          overlap: 10,
          speed: 1
      }, options);
      var sparkle = new Sparkle($this, settings);
      sparkle.over();
  });
}

function Sparkle($parent, options) {
  this.options = options;
  this.init($parent);
}

Sparkle.prototype = {
  "init": function($parent) {
      var _this = this;
      this.$canvas =
          $("<canvas>")
              .addClass("sparkle-canvas")
              .css({
                  position: "absolute",
                  top: "-" + _this.options.overlap + "px",
                  left: "-" + _this.options.overlap + "px",
                  "pointer-events": "none"
              })
              .appendTo($parent);

      this.canvas = this.$canvas[0];
      this.context = this.canvas.getContext("2d");

      this.sprite = new Image();
      this.sprites = [0, 6, 0, 20];
      
      // Ensure the image is loaded before initializing the animation
      this.sprite.onload = () => {
          this.canvas.width = this.options.width + (this.options.overlap * 2);
          this.canvas.height = this.options.height + (this.options.overlap * 2);
          this.particles = this.createSparkles(this.canvas.width, this.canvas.height);
          this.anim = null;
          this.fade = false;
          this.over();
      };

      // Set the data URI as the source of the sprite
      this.sprite.src = "./image.png";
  },

  "createSparkles": function(w, h) {
      var holder = [];
      for (var i = 0; i < this.options.count; i++) {
          var color = this.options.color;
          if (this.options.color == "rainbow") {
              color = '#' + ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
          } else if ($.type(this.options.color) === "array") {
              color = this.options.color[Math.floor(Math.random() * this.options.color.length)];
          }

          holder[i] = {
              position: { x: Math.floor(Math.random() * w), y: Math.floor(Math.random() * h) },
              style: this.sprites[Math.floor(Math.random() * 4)],
              delta: { x: Math.floor(Math.random() * 1000) - 900, y: Math.floor(Math.random() * 1000) - 700 },
              size: parseFloat((Math.random() * 2).toFixed(2)),
              color: color,
              opacity: 1
          };
      }
      return holder;
  },

  "draw": function(time) {
      var ctx = this.context;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (var i = 0; i < this.options.count; i++) {
          var derpicle = this.particles[i];
          var modulus = Math.floor(Math.random() * 7);
          if (Math.floor(time) % modulus === 0) {
              derpicle.style = this.sprites[Math.floor(Math.random() * 4)];
          }
          ctx.save();
          ctx.globalAlpha = derpicle.opacity;
          ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x, derpicle.position.y, 7, 7);
          if (this.options.color) {
              ctx.globalCompositeOperation = "source-atop";
              ctx.globalAlpha = 0.5;
              ctx.fillStyle = derpicle.color;
              ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);
          }
          ctx.restore();
      }
  },

  "update": function() {
      var _this = this;
      this.anim = window.requestAnimationFrame(function(time) {
          for (var i = 0; i < _this.options.count; i++) {
              var u = _this.particles[i];
              if (Math.random() > 0.5) { u.position.x += (u.delta.x * _this.options.speed) / 1500; }
              if (Math.random() > 0.3) { u.position.y -= (u.delta.y * _this.options.speed) / 800; }
              if (u.position.x > _this.canvas.width) { u.position.x = -7; }
              if (u.position.y > _this.canvas.height) { u.position.y = -7; }
              if (_this.fade) { u.opacity -= 0.02; } else { u.opacity -= 0.005; }
              if (u.opacity <= 0) { u.opacity = (_this.fade) ? 0 : 1; }
          }
          _this.draw(time);
          _this.fade ? _this.update() : _this.update();
      });
  },

  "over": function() {
      window.cancelAnimationFrame(this.anim);
      for (var i = 0; i < this.options.count; i++) { this.particles[i].opacity = Math.random(); }
      this.fade = false;
      this.update();
  }
};
