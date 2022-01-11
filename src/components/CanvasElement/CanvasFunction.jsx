import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types'

const CanvasFunction = (props) => {

    const { draw, ...rest} = props;
    const canvasRef = useRef(null);

    // useEffect hooks allows us to perform side effects
    // In this case, we provide a dependency list, which means that the arrow
    // function will be triggered every time the props change or is updated/called
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            draw(ctx, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [draw])

    return (
        <canvas ref={canvasRef} {...rest} />
    );
}

CanvasFunction.defaultProps = {
    draw: PropTypes.func.isRequired,
}

export default CanvasFunction;