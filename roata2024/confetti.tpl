{literal}
<script>
  let confettiAnimationId = null;

  function startConfetti() {
    let duration = 5 * 1000;
    let animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    function frame() {
      let timeLeft = animationEnd - Date.now();
      let ticks = Math.max(100, 200 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      confetti({
        particleCount: 1,
        startVelocity: -10,
        ticks: ticks,
        origin: {
          x: Math.random(),
          y: Math.random() * skew - 0.2,
        },
        colors: ["#f2db0b"],
        shapes: ["circle"],
        gravity: randomInRange(1, 1.5),
        scalar: randomInRange(0.4, 4),
        drift: randomInRange(-0.4, 0.4),
        zIndex: 450,
        class: ["coins"],
      });

      if (timeLeft > 0) {
        confettiAnimationId = requestAnimationFrame(frame);
      }
    }

    frame();
  }

  function stopConfetti() {
    if (confettiAnimationId !== null) {
      cancelAnimationFrame(confettiAnimationId);
      confettiAnimationId = null; // Reset the animation ID
    }
  }
</script>

{/literal}
