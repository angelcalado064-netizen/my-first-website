localStorage.clear();
const correctPassword = "081824";

function checkPassword() {

    const passwordInput =
        document.getElementById("password");

    const password =
        passwordInput.value;

    const message =
        document.getElementById("message");

    const container =
        document.getElementById("mainContainer");

if (password === correctPassword) {

        message.innerHTML = `

            <div class="success">

                ACCESS GRANTED ✓<br>

                AUTHENTICATING...

                <div class="loading">

                    ████████████████ 100%

                </div>

            </div>

        `;


        passwordInput.disabled = true;


        setTimeout(() => {

            message.innerHTML = `

                <div class="success">

                    ACCESS GRANTED ✓<br><br>

                    WELCOME.

                </div>

            `;

        }, 1500);


        setTimeout(() => {

            showGiftQuestion();

        }, 3000);

    }

else {

        document.body.classList.add("glitch");

        container.classList.add("error");


        message.innerHTML = `

            <div class="warning">

                ⚠ WARNING ⚠<br><br>

                ACCESS DENIED<br>

                INVALID PASSWORD<br><br>

                SYSTEM ERROR

            </div>

        `;


        playErrorSound();


        setTimeout(() => {

            document.body.classList.remove("glitch");

            container.classList.remove("error");

            message.innerHTML = "";

            passwordInput.value = "";

            passwordInput.focus();

        }, 1800);

    }

}

function showGiftQuestion() {

    const container =
        document.getElementById("mainContainer");


    container.innerHTML = `

        <div class="home-page">


            <div class="system-title">

                PRIVATE SYSTEM

            </div>


            <h1>

                I HAVE A GIFT FOR YOU.

            </h1>


            <p class="subtitle">

                WOULD YOU LIKE TO SEE IT?

            </p>


            <div class="choice-container">


                <button id="yesButton">

                    YES

                </button>


                <button id="noButton">

                    NO

                </button>


            </div>


        </div>

    `;


    document
        .getElementById("yesButton")
        .addEventListener(
            "click",
            showHome
        );


    setupNoButton();

}

function showHome() {

    const container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="home-page">

            <div class="home-title">
                PRIVATE SYSTEM
            </div>

            <div class="kishia-name">
                KISHIA
            </div>

            <div class="home-subtitle">
                SELECT A FILE TO ACCESS
            </div>

            <div class="word-grid">

                <button class="word-button" id="btnK">
                    <span class="word-letter">K</span>
                    <span class="word-name">KEEP</span>
                </button>

                <button class="word-button" id="btnI1">
                    <span class="word-letter">I</span>
                    <span class="word-name">ILLUMINATE</span>
                </button>

                <button class="word-button" id="btnS">
                    <span class="word-letter">S</span>
                    <span class="word-name">SPECIAL</span>
                </button>

                <button class="word-button" id="btnH">
                    <span class="word-letter">H</span>
                    <span class="word-name">HOME</span>
                </button>

                <button class="word-button" id="btnI2">
                    <span class="word-letter">I</span>
                    <span class="word-name">INFINITE</span>
                </button>

                <button class="word-button" id="btnA">
                    <span class="word-letter">A</span>
                    <span class="word-name">ALWAYS</span>
                </button>

            </div>

        </div>
    `;

    document.getElementById("btnK").onclick = () => openFile("K");
    document.getElementById("btnI1").onclick = () => openFile("I1");
    document.getElementById("btnS").onclick = () => openFile("S");
    document.getElementById("btnH").onclick = () => openFile("H");
    document.getElementById("btnI2").onclick = () => openFile("I2");
    document.getElementById("btnA").onclick = () => openFile("A");
    
  checkAndRenderFlower();
}

function openFile(file) {

    const container =
        document.getElementById("mainContainer");

if (file === "K") {

    container.innerHTML = `

        <div class="file-loading">

            <div class="access-text">
                ACCESSING MEMORY FILE...
            </div>

            <div class="file-id">
                K_01
            </div>

            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>

            <div class="access-text">
                DECRYPTING MEMORIES...
            </div>

        </div>

    `;

    setTimeout(() => {

        showMemoryGallery();

    }, 1700);

    return;

}

let title = "";

    let message = "";

    let fileCode = "";


    if (file === "I1") {

    showIlluminate();

    return;

}


  else if (file === "S") {

    showSpecial();
    return;

}


    else if (file === "H") {

    showHomeFile();
    return;

}

    else if (file === "I2") {

    showInfinite();
    return;

}
    else if (file === "A") {
    showAlways();
    return;
}

container.innerHTML = `

        <div class="file-loading">


            <div class="access-text">

                ACCESSING FILE...

            </div>


            <div class="file-id">

                ${fileCode}

            </div>


            <div class="loading-bar">

                <div class="loading-progress"></div>

            </div>


            <div class="access-text">

                DECRYPTING...

            </div>


        </div>

    `;

setTimeout(() => {

        container.innerHTML = `

            <div class="file-screen">


                <div class="file-code">

                    ACCESS GRANTED ✓

                </div>


                <div class="file-title">

                    ${title}

                </div>


                <div class="file-message">

                    ${message}

                </div>


                <button
                    class="back-button"
                    onclick="showHome()"
                >

                    ← BACK

                </button>


            </div>

        `;

    }, 1700);

}

function showMemoryGallery() {
        localStorage.setItem('opened_K', 'true');


    const container = document.getElementById("mainContainer");
    const keepPage = document.getElementById("keepPage");

    container.innerHTML = "";
    container.appendChild(keepPage);
    keepPage.hidden = false;

    startMemoryMusic();
}
function startMemoryMusic() {

    const song =
        new Audio("Mornings-Whisper.mp3");

    song.volume = 0.65;

    song.loop = true;

    song.play().catch(() => {});

    window.memorySong = song;

}

function closeMemoryGallery() {

    if (window.memorySong) {

        window.memorySong.pause();

        window.memorySong.currentTime = 0;

        window.memorySong = null;

    }

    showHome();

}

function showIlluminate() {
        localStorage.setItem('opened_I1', 'true');


    const container =
        document.getElementById("mainContainer");

    container.innerHTML = `

        <div class="illuminate-screen">

            <div id="lightParticles"></div>

            <div class="illuminate-content">

                <div class="illuminate-label">
                    FILE I_01
                </div>

                <div class="illuminate-title">
                    ILLUMINATE
                </div>

                <div class="illuminate-line"></div>

                <div class="illuminate-message">
                    YOU MAKE ORDINARY MOMENTS BRIGHTER.
                </div>

                <div class="illuminate-sub">
                    AND I'M GLAD I FOUND YOU.
                </div>

                <button
                    class="back-button"
                    onclick="showHome()"
                >
                    ← BACK
                </button>

            </div>

        </div>

    `;

    const particles =
        document.getElementById("lightParticles");

    for (let i = 0; i < 35; i++) {

        const light =
            document.createElement("div");

        light.className = "light-particle";

        light.style.left =
            Math.random() * 100 + "%";

        light.style.top =
            Math.random() * 100 + "%";

        light.style.animationDelay =
            Math.random() * 4 + "s";

        light.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        particles.appendChild(light);

    }

}

function showMusic() {

    const container =


    container.innerHTML = `

        <div class="music-screen">


            <div class="music-status">

                AUDIO FILE FOUND

            </div>


            <div class="music-title">

                HILING SA BITUIN

            </div>


            <div class="music-artist">

                RHAYO

            </div>


            <!-- AUDIO VISUALIZER -->

            <div
                class="visualizer"
                id="visualizer"
            >

                <div class="bar"></div>

                <div class="bar"></div>

                <div class="bar"></div>

                <div class="bar"></div>

                <div class="bar"></div>

            </div>


            <!-- CONTROLS -->

            <div class="music-controls">


                <button
                    class="music-button"
                    id="playButton"
                >

                    ▶

                </button>


                <button
                    class="music-button"
                    id="stopButton"
                >

                    ■

                </button>


            </div>


            <!-- PROGRESS -->

            <div class="progress-container">


                <div class="progress-bar">

                    <div
                        class="progress-fill"
                        id="progressFill"
                    ></div>

                </div>


                <div class="time">


                    <span id="currentTime">

                        0:00

                    </span>


                    <span id="duration">

                        0:00

                    </span>


                </div>


            </div>


            <!-- BACK -->

            <button
                class="music-back"
                id="musicBack"
            >

                ← BACK

            </button>


        </div>

    `;


    initializeMusic();

}

function initializeMusic() {


    const song =
        new Audio(
            "/I'd rather.mp3"
        );


    const playButton =
        document.getElementById(
            "playButton"
        );


    const stopButton =
        document.getElementById(
            "stopButton"
        );


    const backButton =
        document.getElementById(
            "musicBack"
        );


    const visualizer =
        document.getElementById(
            "visualizer"
        );


    const progressFill =
        document.getElementById(
            "progressFill"
        );


    const currentTime =
        document.getElementById(
            "currentTime"
        );


    const duration =
        document.getElementById(
            "duration"
        );


    /* VOLUME */

    song.volume = 0.8;

    function playSong() {


        song.play()

            .then(() => {


                playButton.innerHTML =
                    "❚❚";


                visualizer.classList.add(
                    "playing"
                );


            })


            .catch(() => {


                playButton.innerHTML =
                    "▶";


            });

    }

playButton.addEventListener(
        "click",
        function() {


            if (song.paused) {


                playSong();


            }


            else {


                song.pause();


                playButton.innerHTML =
                    "▶";


                visualizer.classList.remove(
                    "playing"
                );


            }

        }
    );

stopButton.addEventListener(
        "click",
        function() {


            song.pause();


            song.currentTime = 0;


            playButton.innerHTML =
                "▶";


            visualizer.classList.remove(
                "playing"
            );


            progressFill.style.width =
                "0%";


            currentTime.innerHTML =
                "0:00";

        }
    );

    song.addEventListener(
        "timeupdate",
        function() {


            if (!song.duration) {

                return;

            }


            const progress =
                (
                    song.currentTime /
                    song.duration
                ) * 100;


            progressFill.style.width =
                progress + "%";


            currentTime.innerHTML =
                formatTime(
                    song.currentTime
                );

        }
    );

song.addEventListener(
        "loadedmetadata",
        function() {


            duration.innerHTML =
                formatTime(
                    song.duration
                );

        }
    );

    song.addEventListener(
        "ended",
        function() {


            playButton.innerHTML =
                "▶";


            visualizer.classList.remove(
                "playing"
            );


            progressFill.style.width =
                "0%";


        }
    );

backButton.addEventListener(
        "click",
        function() {


            song.pause();


            song.currentTime = 0;


            showHome();

        }
    );

    playSong();

}

function formatTime(seconds) {


    if (isNaN(seconds)) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        Math.floor(
            seconds % 60
        );


    return (

        minutes +

        ":" +

        remainingSeconds
            .toString()
            .padStart(2, "0")

    );

}

function setupNoButton() {


    const noButton =
        document.getElementById(
            "noButton"
        );


    noButton.addEventListener(
        "click",
        moveNoButton
    );


    noButton.addEventListener(
        "touchstart",
        moveNoButton
    );

}

function moveNoButton(event) {


    event.preventDefault();


    const noButton =
        document.getElementById(
            "noButton"
        );


    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;


    const randomX =
        Math.floor(
            Math.random() * maxX
        );


    const randomY =
        Math.floor(
            Math.random() * maxY
        );


    noButton.style.position =
        "fixed";


    noButton.style.left =
        randomX + "px";


    noButton.style.top =
        randomY + "px";

}

function playErrorSound() {


    const audioContext =
        new (
            window.AudioContext ||
            window.webkitAudioContext
        )();


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "square";


    oscillator.frequency.setValueAtTime(
        180,
        audioContext.currentTime
    );


    oscillator.frequency.exponentialRampToValueAtTime(
        60,
        audioContext.currentTime + 0.35
    );


    gain.gain.setValueAtTime(
        0.15,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.35
    );


    oscillator.connect(gain);


    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.35
    );

}

document
    .getElementById("enterButton")
    .addEventListener(
        "click",
        checkPassword
    );

document
    .getElementById("password")
    .addEventListener(
        "keydown",
        function(event) {


            if (event.key === "Enter") {

                checkPassword();
            }


        }
    );

function showHomeFile() {
            localStorage.setItem('opened_H', 'true');


    const container = document.getElementById("mainContainer");
    const page = document.getElementById("homePage");

    container.innerHTML = "";
    container.appendChild(page);
    page.hidden = false;
}

function showSpecial() {
        localStorage.setItem('opened_S', 'true');


    const container =
        document.getElementById("mainContainer");

    container.innerHTML = `

        <div class="special-screen">

            <div class="special-label">
                FILE S_01
            </div>

            <div class="special-title">
                SPECIAL
            </div>

            <div class="special-subtitle">
                A LETTER FOR YOU
            </div>

            <div class="special-line"></div>

            <div class="letter-card">

                <div class="letter-text">

Happy 2nd Anniversary, my lovelovebaby!! ❤️

Eto yung simpleng regalo ko sayo, sana magustuhan mo. Hindi man to yung pinakamaganda or pinakamahal na bagay na pwede kong ibigay, ginawa ko to with all my love para sayo.

Lagi lang ako nandito para sayo, nakasuporta sa mga bagay na gusto mong gawin at sa mga pangarap na gusto mong maabot. Kahit anong mangyari, gusto kong malaman mo na may isang taong laging proud sayo at maniniwala sayo.

Mahal na mahal kitaa. Sana ikaw na talaga. 🥹

Sana makita na kita, kasi gusto na kitang makasama nang hindi na kailangan ng chat or calls para lang makita at makausap ka.

Gusto ko nang maranasan yung mga simpleng bagay kasama ka, maglakad tayo kung saan-saan, kumain together, magkwentuhan nang harapan, tumawa sa mga random na bagay, and just spend an ordinary day with you.

Gusto ko ring magawa natin yung mga bagay na matagal na nating gustong gawin together. Gusto kitang makasama sa mga celebrations natin, especially sa mga anniversaries.

Someday, sana hindi na lang tayo naghihintay ng pagkakataon para magkita. Sana dumating yung time na pwede na nating sabihin na "finally, we're together." ❤️

Thank you for staying, for understanding me, for loving me, and for being part of my life for these two years.

Hindi man naging madali lahat, I'm still grateful na ikaw yung kasama ko sa journey na to.

And I hope we still have so many more years, memories, laughs, and dreams to share together.

Again, happy 2nd anniversary, my lovelovebaby!! ❤️

Sana magustuhan mo to 😁

i love youu always, my love.

                </div>

                <div class="letter-heart">
                    🫶🫶🫶
                </div>

            </div>

            <button
                class="special-back"
                onclick="showHome()"
            >
                ← BACK
            </button>

        </div>

    `;
}
function showInfinite() {
  localStorage.setItem('opened_I2', 'true');

  const container = document.getElementById("mainContainer");

  container.innerHTML = `
    <div class="infinite-screen">
      
      <!-- TOP-LEFT RETURN BUTTON (Gaya ng sa Letter A) -->
      <button class="infinite-back" onclick="showHome()">[ &larr; RETURN ]</button>

      <div class="infinite-content">
        <div class="infinite-label">FILE I_02</div>
        <div class="infinite-title">INFINITE</div>
        <div class="infinite-subtitle">AN INFINITE LOVE FOR YOU</div>
        
        <div class="infinity-symbol">&infin;</div>
        <div class="infinite-line"></div>

        <div class="infinite-message">
          Hindi ko alam kung paano ko maipapaliwanag kung gaano kita kamahal, pero alam kong kahit ilang beses ko pa sabihin, parang hindi pa rin sapat.
          <br><br>
          YUNG love ko para sa'yo hindi ko kayang sukatin. Hindi siya may limit, hindi siya natatapos sa isang araw, isang buwan, or isang taon. <b>It just keeps growing.</b>
          <br><br>
          Mahal kita sa mga araw na masaya tayo, sa mga araw na namimiss kita, sa mga araw na nagkakaintindihan tayo, at kahit sa mga araw na hindi tayo okay.
          <br><br>
          Mahal kita hindi dahil perfect ka, kasi <b>ikaw yan eh.</b>
          <br><br>
          Kahit gaano pa katagal, kahit ilang distance pa ang kailangan nating lampasan, I hope you always remember that my love for you will always have no ending.
          <br><br>
          <b>No limit. No end. No matter how far.</b>
          <br><br>
          <b>My love for you is infinite.</b> ♾️
        </div>

        <div class="infinite-promise">
          <span>♡</span> I'll always choose you <span>♡</span>
        </div>
      </div>
    </div>
  `;
}

function showAlways() {
    localStorage.setItem("opened_A", "true");

    const container = document.getElementById("mainContainer");

    container.innerHTML = `
        <div class="always-screen">

            <button class="always-back" onclick="showHome()">
                [ ← RETURN ]
            </button>

            <div class="always-header">
                <div class="always-file">
                    FILE A_01
                </div>

                <div class="always-title">
                    ALWAYS
                </div>
            </div>

            <canvas id="heartCanvas"></canvas>

        </div>
    `;

    createAlwaysScene();
}
function createAlwaysScene() {
    const canvas = document.getElementById("heartCanvas");

    const scene = new THREE.Scene();

    scene.background = new THREE.Color(0x050005);

    const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 0, 55);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

    renderer.setPixelRatio(
        Math.min(window.devicePixelRatio, 2)
    );

    const controls =
        new THREE.OrbitControls(
            camera,
            renderer.domElement
        );

    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const particleCount = 5000;

    const geometry =
        new THREE.BufferGeometry();

    const positions =
        new Float32Array(
            particleCount * 3
        );

    const colors =
        new Float32Array(
            particleCount * 3
        );

    const white =
        new THREE.Color(0xffffff);

    const pink =
        new THREE.Color(0xff9fbd);

    const rose =
        new THREE.Color(0xff3f7f);

    for (let i = 0; i < particleCount; i++) {

        const t =
            Math.random() *
            Math.PI * 2;

        const fill =
            Math.sqrt(
                Math.random()
            );

        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );

        const y =
            13 *
            Math.cos(t)
            - 5 *
            Math.cos(2 * t)
            - 2 *
            Math.cos(3 * t)
            - Math.cos(4 * t);

        positions[i * 3] =
            x * 0.9 * fill;

        positions[i * 3 + 1] =
            y * 0.9 * fill;

        positions[i * 3 + 2] =
            (Math.random() - 0.5) * 6;

        const random =
            Math.random();

        const color =
            random < 0.25
                ? white
                : random < 0.65
                    ? pink
                    : rose;

        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            positions,
            3
        )
    );

    geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(
            colors,
            3
        )
    );
        const particleCanvas =
        document.createElement("canvas");

    particleCanvas.width = 64;
    particleCanvas.height = 64;

    const particleContext =
        particleCanvas.getContext("2d");

    const gradient =
        particleContext.createRadialGradient(
            32,
            32,
            0,
            32,
            32,
            32
        );

    gradient.addColorStop(
        0,
        "#ffffff"
    );

    gradient.addColorStop(
        0.35,
        "#ff9fbd"
    );

    gradient.addColorStop(
        0.7,
        "#ff3f7f"
    );

    gradient.addColorStop(
        1,
        "transparent"
    );

    particleContext.fillStyle =
        gradient;

    particleContext.fillRect(
        0,
        0,
        64,
        64
    );

    const particleMaterial =
        new THREE.PointsMaterial({
            size: 1.2,
            map: new THREE.CanvasTexture(
                particleCanvas
            ),
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

    const particles =
        new THREE.Points(
            geometry,
            particleMaterial
        );

    scene.add(particles);

    const starGeometry =
        new THREE.BufferGeometry();

    const starPositions =
        new Float32Array(
            1200 * 3
        );

    for (
        let i = 0;
        i < starPositions.length;
        i++
    ) {
        starPositions[i] =
            (Math.random() - 0.5) * 300;
    }

    starGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(
            starPositions,
            3
        )
    );

    const stars =
        new THREE.Points(
            starGeometry,
            new THREE.PointsMaterial({
                size: 0.7,
                color: 0xffffff,
                transparent: true,
                opacity: 0.6
            })
        );

    scene.add(stars);
        const loveWords = [
        "i love youu baby 🫶",
        "mahal kitaa 💖",
        "lovelove baby 😚",
        "i love youu always 🌸",
        "i'll always choose you 🫂",
        "te amo sin motivo ✨",
        "contigo todo es bonito 💫",
        "eres lo mejor na nangyari ❤️",
        "aking tahanan 🏡",
        "paborito ko 🧸",
        "ikaw lang araw-araw ☀️",
        "hanggang dulo ♾️",
        "my favorite person 🌷",
        "my babylovelove 💓",
        "Kishia Becodo 💖",
        "i miss youu 💘",
        "my safe space 🕊️",
        "mahal kitaa sobra 🥹",
        "happy anniversary 🎉",
        "my wife 🫰",
        "baby koo 🫠",
        "kishiamae 🥵"

    ];

    const wordSprites = [];

    loveWords.forEach((word, index) => {

        const textCanvas =
            document.createElement("canvas");

        textCanvas.width = 600;
        textCanvas.height = 120;

        const context =
            textCanvas.getContext("2d");

        context.font =
            "bold 32px sans-serif";

        context.textAlign = "center";
        context.textBaseline = "middle";

        context.shadowColor =
            "#ff4d8d";

        context.shadowBlur = 12;

        context.fillStyle =
            "#ffffff";

        context.fillText(
            word,
            300,
            60
        );

const texture =
            new THREE.CanvasTexture(
                textCanvas
            );

        const material =
            new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: 0.8
            });

        const sprite =
            new THREE.Sprite(material);

        sprite.scale.set(
            24,
            4.8,
            1
        );

        const radius =
            18 + (index % 4) * 4;

        const angle =
            (index / loveWords.length) *
            Math.PI * 2;

        sprite.position.set(
            Math.cos(angle) * radius,
            Math.sin(index * 1.5) * 18,
            Math.sin(angle) * radius
        );

        scene.add(sprite);

        wordSprites.push(sprite);
    });
        let rotationSpeed = 0.002;

    function animateAlways() {
        requestAnimationFrame(animateAlways);

        particles.rotation.y += rotationSpeed;
        stars.rotation.y += 0.0003;

        wordSprites.forEach((sprite, index) => {
            sprite.position.y +=
                Math.sin(
                    Date.now() * 0.001 +
                    index
                ) * 0.002;

            sprite.rotation.z =
                Math.sin(
                    Date.now() * 0.0008 +
                    index
                ) * 0.03;
        });

        const pulse =
            1 +
            Math.sin(
                Date.now() * 0.003
            ) * 0.08;

        particles.scale.set(
            pulse,
            pulse,
            pulse
        );

        controls.update();

        renderer.render(
            scene,
            camera
        );
    }

    animateAlways();

    function resizeAlways() {
        const width =
            window.innerWidth;

        const height =
            window.innerHeight;

        camera.aspect =
            width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(
            width,
            height
        );

        renderer.setPixelRatio(
            Math.min(
                window.devicePixelRatio,
                2
            )
        );
    }

    window.addEventListener(
        "resize",
        resizeAlways
    );
}


  animate();

function checkAllOpened() {
  const keys = ['opened_K', 'opened_I1', 'opened_S', 'opened_H', 'opened_I2', 'opened_A'];
  return keys.every(k => localStorage.getItem(k) === 'true');
}

function checkAllOpened() {
  const k = localStorage.getItem('opened_K') === 'true';
  const i1 = localStorage.getItem('opened_I1') === 'true';
  const s = localStorage.getItem('opened_S') === 'true';
  const h = localStorage.getItem('opened_H') === 'true';
  const i2 = localStorage.getItem('opened_I2') === 'true';
  const a = localStorage.getItem('opened_A') === 'true';

return k && i1 && s && h && i2 && a;
}

function checkAndRenderFlower() {
  if (!checkAllOpened()) {
    const existing = document.getElementById("blooming-tulip-box");
    if (existing) existing.remove();
    return;
  }

  if (document.getElementById("blooming-tulip-box")) return;

  const flowerWrapper = document.createElement("div");
  flowerWrapper.id = "blooming-tulip-box";
  flowerWrapper.style.cssText = "position: relative; width: 100%; height: 520px; margin-top: 20px; background: #050203; border-radius: 16px; overflow: hidden; display: flex; justify-content: center; align-items: flex-end;";

  flowerWrapper.innerHTML = `
    <style>
      .tulip-garden {
        position: relative;
        width: 320px;
        height: 460px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
      }

      /* ROMANTIC AMBIENT RED GLOW */
      .bg-glow {
        position: absolute;
        bottom: 120px;
        width: 260px;
        height: 260px;
        background: radial-gradient(circle, rgba(255, 0, 76, 0.25) 0%, rgba(0, 0, 0, 0) 70%);
        border-radius: 50%;
        filter: blur(40px);
      }

      /* STEMS */
      .tulip-stem {
        position: absolute;
        bottom: 0;
        width: 6px;
        background: linear-gradient(to top, #081d0f, #1b4332, #2d6a4f);
        border-radius: 10px;
        transform-origin: bottom center;
        animation: growStem 2s ease-out forwards;
      }

      /* PERFECT STEM COORDINATES & ROTATIONS */
      .ts-1 { height: 250px; left: 75px; transform: rotate(-7deg); animation-delay: 0.2s; }
      .ts-2 { height: 330px; left: 157px; transform: rotate(0deg); animation-delay: 0.5s; }
      .ts-3 { height: 270px; left: 239px; transform: rotate(7deg); animation-delay: 0.8s; }

      @keyframes growStem { from { height: 0; } }

      /* STEM LEAVES */
      .tulip-leaf {
        position: absolute;
        width: 40px;
        height: 18px;
        background: linear-gradient(135deg, #1b4332, #40916c);
        border-radius: 40px 0 40px 0;
        opacity: 0;
        animation: showLeaf 0.8s forwards 1.8s;
      }

      .tl-l { left: -32px; transform: rotate(-25deg); }
      .tl-r { right: -32px; transform: rotate(25deg) scaleX(-1); }

      @keyframes showLeaf { to { opacity: 0.9; } }

      /* FLOWER BUD WRAPPER (PERFECTLY CENTERED ON STEM TOPS) */
      .tulip-bud {
        position: absolute;
        width: 60px;
        height: 75px;
        opacity: 0;
        transform: scale(0);
        transform-origin: bottom center;
        animation: popBud 0.8s ease-out forwards;
      }

      /* EXACT TOP COORD FOR EACH STEM TIP */
      .tb-1 { top: 142px; left: 30px; animation-delay: 2.0s; transform-origin: bottom center; }
      .tb-2 { top: 62px; left: 130px; animation-delay: 2.4s; transform-origin: bottom center; }
      .tb-3 { top: 122px; left: 227px; animation-delay: 2.8s; transform-origin: bottom center; }

      @keyframes popBud { to { opacity: 1; transform: scale(1); } }

      /* PETAL STRUCTURE */
      .tulip-petals {
        position: relative;
        width: 100%;
        height: 100%;
      }

      /* INSIDE GLOWING STAMEN / CORE */
      .tulip-core {
        position: absolute;
        top: 15px;
        left: 23px;
        width: 14px;
        height: 28px;
        background: radial-gradient(circle, #ffea00 0%, #ff0055 100%);
        border-radius: 20px 20px 0 0;
        box-shadow: 0 0 15px #ffea00, 0 0 25px #ff0055;
        z-index: 2;
      }

      /* BACK / CENTER PETAL */
      .petal-back {
        position: absolute;
        top: 0;
        left: 15px;
        width: 30px;
        height: 68px;
        background: linear-gradient(to top, #590d22, #a71e34, #ff0055);
        border-radius: 40px 40px 10px 10px;
        box-shadow: 0 0 15px rgba(255, 0, 85, 0.4);
      }

      /* LEFT PETAL (BALANCED BLOOM) */
      .petal-left {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 30px;
        height: 70px;
        background: linear-gradient(to top, #800f2f, #c9184a, #ff4d6d);
        border-radius: 40px 15px 15px 30px;
        transform-origin: bottom right;
        animation: openLeft 1.5s ease-out forwards 2.8s;
        box-shadow: -2px 0 12px rgba(201, 24, 74, 0.6);
        z-index: 3;
      }

      /* RIGHT PETAL (BALANCED BLOOM) */
      .petal-right {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 30px;
        height: 70px;
        background: linear-gradient(to top, #800f2f, #c9184a, #ff4d6d);
        border-radius: 15px 40px 30px 15px;
        transform-origin: bottom left;
        animation: openRight 1.5s ease-out forwards 2.8s;
        box-shadow: 2px 0 12px rgba(201, 24, 74, 0.6);
        z-index: 3;
      }

      /* FRONT CUP PETAL */
      .petal-front {
        position: absolute;
        bottom: 0;
        left: 10px;
        width: 40px;
        height: 52px;
        background: linear-gradient(to top, #a71e34, #ff0055, #ff758f);
        border-radius: 20px 20px 30px 30px;
        box-shadow: 0 0 20px rgba(255, 0, 85, 0.85);
        z-index: 5;
      }

      /* NATURAL BLOOM ANGLES */
      @keyframes openLeft {
        to { transform: rotate(-26deg); }
      }

      @keyframes openRight {
        to { transform: rotate(26deg); }
      }

      /* LIGHT PARTICLES */
      .glow-particle {
        position: absolute;
        width: 5px;
        height: 5px;
        background: #ff758f;
        border-radius: 50%;
        box-shadow: 0 0 10px #ff0055, 0 0 15px #ff758f;
        animation: floatParticle 3s infinite ease-in-out;
      }

      .gp-1 { top: -10px; left: 8px; animation-delay: 0.3s; }
      .gp-2 { top: 12px; left: 48px; animation-delay: 0.8s; }

      @keyframes floatParticle {
        0%, 100% { transform: translateY(0); opacity: 0.9; }
        50% { transform: translateY(-16px); opacity: 0.3; }
      }

      /* TALL SIDE GRASS */
      .grass-side {
        position: absolute;
        bottom: 0;
        width: 5px;
        background: linear-gradient(to top, #041208, #1b4332, #40916c);
        border-radius: 10px 10px 0 0;
        transform-origin: bottom center;
        animation: growStem 1.5s ease-out forwards;
      }

      .gs-1 { height: 250px; left: 10px; transform: rotate(-22deg); }
      .gs-2 { height: 180px; left: 35px; transform: rotate(-10deg); }
      .gs-3 { height: 260px; right: 10px; transform: rotate(22deg); }
      .gs-4 { height: 190px; right: 35px; transform: rotate(10deg); }

      /* HEADER */
      .love-header {
        position: absolute;
        top: 20px;
        width: 100%;
        text-align: center;
        color: #ff758f;
        font-family: 'Courier New', monospace;
        font-size: 1.35rem;
        font-weight: bold;
        letter-spacing: 2px;
        text-shadow: 0 0 12px #ff0055, 0 0 20px #c9184a;
        opacity: 0;
        animation: fadeIn 1.2s forwards 3.2s;
      }

      @keyframes fadeIn { to { opacity: 1; } }
    </style>

    <div class="tulip-garden">
      <div class="bg-glow"></div>
      <div class="love-header">HAPPY ANNIVERSARY 🫶</div>

      <!-- Tall Grass -->
      <div class="grass-side gs-1"></div>
      <div class="grass-side gs-2"></div>
      <div class="grass-side gs-3"></div>
      <div class="grass-side gs-4"></div>

      <!-- TULIP 1 (LEFT) -->
      <div class="tulip-stem ts-1">
        <div class="tulip-leaf tl-l" style="bottom: 80px;"></div>
        <div class="tulip-leaf tl-r" style="bottom: 130px;"></div>
      </div>
      <div class="tulip-bud tb-1">
        <div class="tulip-petals">
          <div class="petal-back"></div>
          <div class="tulip-core"></div>
          <div class="petal-left"></div>
          <div class="petal-right"></div>
          <div class="petal-front"></div>
          <div class="glow-particle gp-1"></div>
        </div>
      </div>

      <!-- TULIP 2 (CENTER) -->
      <div class="tulip-stem ts-2">
        <div class="tulip-leaf tl-l" style="bottom: 100px;"></div>
        <div class="tulip-leaf tl-r" style="bottom: 160px;"></div>
      </div>
      <div class="tulip-bud tb-2">
        <div class="tulip-petals">
          <div class="petal-back"></div>
          <div class="tulip-core"></div>
          <div class="petal-left"></div>
          <div class="petal-right"></div>
          <div class="petal-front"></div>
          <div class="glow-particle gp-1"></div>
          <div class="glow-particle gp-2"></div>
        </div>
      </div>

      <!-- TULIP 3 (RIGHT) -->
      <div class="tulip-stem ts-3">
        <div class="tulip-leaf tl-l" style="bottom: 75px;"></div>
        <div class="tulip-leaf tl-r" style="bottom: 125px;"></div>
      </div>
      <div class="tulip-bud tb-3">
        <div class="tulip-petals">
          <div class="petal-back"></div>
          <div class="tulip-core"></div>
          <div class="petal-left"></div>
          <div class="petal-right"></div>
          <div class="petal-front"></div>
          <div class="glow-particle gp-2"></div>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById("mainContainer");
  if (container) {
    container.appendChild(flowerWrapper);
  }
}
    
