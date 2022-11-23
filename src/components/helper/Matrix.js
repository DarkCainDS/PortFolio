import React from 'react'
import { useRef, useEffect, useState } from 'react';
import '../Styles/matrix.css'


export default function Matrix() {

    const layer = useRef();

    useEffect(() => {


        const canvas = layer.current;
        const ctx = canvas.getContext('2d');


        canvas.width = document.body.offsetWidth;

        const w = canvas.width;
        const h = canvas.height;

        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);
        const columns = Math.floor(w / 20) + 1;
        const yPosition = Array(columns).fill(0);

        function matrix() {
            ctx.fillStyle = '#0001';
            ctx.fillRect(0, 0, w, h);
            ctx.fillStyle = '#0f0';
            ctx.font = '15pt monospace';

            yPosition.forEach((y, index) => {
                const text = String.fromCharCode(
                    Math.random() * 128);
                const x = index * 20;
                ctx.fillText(text, x, y);
                if (y > 100 + Math.random() * 10000) {
                    yPosition[index] = 0;
                } else {
                    yPosition[index] = y + 20;
                }
            });
        }
        setInterval(matrix, 50);

    }, []);

    return (
        <div className='Matrix-Layer'>

            <canvas ref={layer} height='2000' id="layer"></canvas>

        </div>
    );
}
