
        bubbly({
            blur:15,
            colorStart: '#f7c8d6',
            colorStop: '#f7c8d6',
            radiusFunc:() => 5 + Math.random() * 15,
            angleFunc:() => -Math.PI / 2,
            velocityFunc:() => Math.random() * -12,
            bubbleFunc:() => `hsla(${200 + Math.random() * 50}, 100%, 65%, .1)`,
            bubbles:350
        });
