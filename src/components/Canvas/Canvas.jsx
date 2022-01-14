import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Canvas = (props) => {
    const { update, ...rest } = props;
    /**
     * @type {React.MutableRefObject<HTMLCanvasElement>}
     */
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            update(ctx, frameCount);
            animationFrameId = window.requestAnimationFrame(render);
        }

        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [update]);

    return (
        <canvas ref={canvasRef} {...rest} />
    );
}

Canvas.defaultProps = {
    update: PropTypes.func.isRequired,
}

export default Canvas;