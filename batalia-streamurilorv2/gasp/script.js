document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.getElementById('wrapper');
    const spin = document.getElementById('spin');
    let dragAmount = -3000;
    let cardGap = 1520;
    let startProgress;
    let draggableTrigger;
    let cardArray = [];
    let spinTween;
    for (let i = 0; i < 16; i++) {
        let card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h1>${i + 1}th card</h1>
            <p>HELLO!</p>
        `;
        wrapper.appendChild(card);
        cardArray.push(card);
    }
// This variable will store the spin tween instance
// let spinTween;

const onResize = () => {
    cardGap = Math.min(window.innerWidth * 1.2, 700);

    if (window.innerWidth <= 480) {
        dragAmount = -1500;
    }

    if (spinTween) {
        gsap.killTweensOf(spinTween.targets());
        spinTween.timeScale(0);
        startProgress = spinTween.progress();
    }

    spinTween = gsap.fromTo(
        cardArray, {
            rotationY: (i) => (i * 360) / cardArray.length
        }, {
            rotationY: "+=360",
            transformOrigin: `50% 50% ${-cardGap}px`,
            duration: 50,
            ease: "none",
            repeat: -1
        }
    );

    draggableTrigger = Draggable.create(cardArray, {
        trigger: [cardArray, spin],
        allowNativeTouchScrolling: true,
        onPress: function() {
            gsap.killTweensOf(spinTween.targets());
            spinTween.timeScale(0);
            startProgress = spinTween.progress();
        },
        onDrag: function() {
            let currentProgress = startProgress + (this.startX - this.x) / dragAmount;
            spinTween.progress(gsap.utils.wrap(0, 1, currentProgress));
        },
        onRelease: function() {
            if (!this.tween || !this.tween.isActive()) {
                spinTween.timeScale(1);
            }
        }
    });
};

    cardArray.reverse();
    onResize();
    window.addEventListener('resize', onResize);
});
