 function generateMatrixRain() {
            const matrixRain = document.getElementById('matrixRain');
            const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const columns = Math.floor(window.innerWidth / 20);
            
            for (let i = 0; i < columns; i++) {
                const column = document.createElement('div');
                column.className = 'matrix-column';
                column.style.left = `${i * 20}px`;
                column.style.animationDuration = `${Math.random() * 5 + 10}s`;
                column.style.animationDelay = `${Math.random() * 5}s`;
                
                // Generate random characters for the column
                let text = '';
                const charCount = Math.floor(Math.random() * 20 + 10);
                for (let j = 0; j < charCount; j++) {
                    text += characters[Math.floor(Math.random() * characters.length)] + ' ';
                }
                column.textContent = text;
                
                matrixRain.appendChild(column);
            }
        }

        generateMatrixRain();

         let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const matrixRain = document.getElementById('matrixRain');
                matrixRain.innerHTML = '';
                generateMatrixRain();
            }, 250);
        });

         function generateParticles() {
            const particlesContainer = document.getElementById('particlesContainer');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.animationDelay = `${Math.random() * 20}s`;
                particle.style.animationDuration = `${Math.random() * 10 + 20}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        generateParticles();

        function generateDataStreams() {
            const dataStreams = document.getElementById('dataStreams');
            const streamCount = 10;
            
            for (let i = 0; i < streamCount; i++) {
                const stream = document.createElement('div');
                stream.className = 'data-stream';
                stream.style.top = `${Math.random() * 100}%`;
                stream.style.left = `-300px`;
                stream.style.animationDelay = `${Math.random() * 5}s`;
                stream.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
                
                dataStreams.appendChild(stream);
            }
        }

         generateDataStreams();