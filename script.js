// ─── Helpers ────────────────────────────────────────────────────────────────

/** Safely get an element — returns null without throwing if missing */
const el = id => document.getElementById(id);

/** Set textContent only if element exists */
const setText = (id, val) => { const e = el(id); if (e) e.textContent = val; };

/** Set a style property only if element exists */
const setStyle = (id, prop, val) => { const e = el(id); if (e) e.style[prop] = val; };

/** Toggle a class only if element exists */
const toggleClass = (id, cls, force) => { const e = el(id); if (e) e.classList.toggle(cls, force); };

/** Format seconds → m:ss */
const fmt = s => (!s || isNaN(s)) ? '0:00' : Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');

// ─── Song list ───────────────────────────────────────────────────────────────

const songs = [
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025537/Doja_Cat_-_Kiss_Me_More_ft._SZA_d8lluj.mp3", thumb: "img/t1.jpg", title: "Kiss Me More ft. SZA", artist: "Doja Cat", genre: "pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775031570/The_Weeknd_Ariana_Grande_-_Die_For_You_Remix_Lyric_Video_u294g9.mp3", thumb: "img/t15.jpg", title: "The Weeknd, Ariana Grande - Die For You ", artist: "The Weeknd", genre: "Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775030958/Kendrick_Lamar_SZA_-_All_The_Stars_l05usr.mp3", thumb: "img/t13.jpg", title: "Kendrick Lamar, SZA - All The Stars", artist: "Kendrick Lamar, SZA", genre: "Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775031284/Ariana_Grande_-_positions_official_video_pfdjkk.mp3", thumb: "img/t14.jpg", title: "Ariana Grande - positions", artist: "Ariana Grande", genre: "Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025559/The_Weeknd_Lana_Del_Rey_-_The_Abyss_gc9zkt.mp3", thumb: "img/t2.jpg", title: "The Weeknd - The Abyss", artist: "The Weeknd", genre: "pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025558/Travis_Scott_-_STARGAZING_rrxa9l.mp3", thumb: "img/t3.jpg", title: "Travis Scott - STARGAZING", artist: "Travis Scott", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025558/ROSALI%CC%81A_-_TUYA_hpez02.mp3", thumb: "img/t4.jpg", title: "ROSALÍA - TUYA", artist: "ROSALÍA", genre: "Latin" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775025667/Bad_Bunny_-_Moscow_Mule_La_Letra_Lyrics_l23eup.mp3", thumb: "img/t5.jpg", title: "Bad Bunny - Moscow Mule", artist: "Bad Bunny", genre: "Latin" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775027821/Nonstop_e8xkgh.mp3", thumb: "img/t6.jpg", title: "Drake - Nonstop", artist: "Drake", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775028323/Future_-_I_M_ON_ONE_Official_Audio_ft._Drake_xnjkyi.mp3", thumb: "img/t7.jpg", title: "Future - I'M ON ONE ft. Drake", artist: "Future", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775058747/Sin_Pijama_m1sjff.mp3", thumb: "img/t21.jpg", title: "Becky G, Natti Natasha - Sin Pijama", artist: "Becky G, Natti Natasha", genre: "Latin" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775028907/A_AP_Rocky_-_L_D_Explicit_-_Official_Video_mesrof.mp3", thumb: "img/t8.jpg", title: "A$AP Rocky - L$D", artist: "A$AP Rocky", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775028584/Future_-_PUFFIN_ON_ZOOTIEZ_Official_Music_Video_kdqetm.mp3", thumb: "img/t7.jpg", title: "Future - PUFFIN ON ZOOTIEZ", artist: "Future", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775029178/Domino_Dancing_pfzyd7.mp3", thumb: "img/t9.jpg", title: "Pet Shop Boys - Domino Dancing", artist: "Pet Shop Boys", genre: "80s Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775029734/Michael_Jackson_-_Billie_Jean_Official_Video_mirehv.mp3", thumb: "img/t10.jpg", title: "Michael Jackson - Billie Jean", artist: "Michael Jackson", genre: "80s Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775030084/Eminem_-_Mockingbird_Official_Music_Video_jal444.mp3", thumb: "img/t11.jpg", title: "Eminem - Mockingbird", artist: "Eminem", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775030668/Kendrick_Lamar_-_luther_Official_Audio_jtdzka.mp3", thumb: "img/t12.jpg", title: "Kendrick Lamar - luther", artist: "Kendrick Lamar", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775055543/Bananarama_-_Cruel_Summer_sbfjyz.mp3", thumb: "img/t16.jpg", title: "Bananarama - Cruel Summer", artist: "Bananarama", genre: "80s Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775056214/90210_p9gubd.mp3", thumb: "img/t17.jpg", title: "Travis Scott - 90210", artist: "Travis Scott", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775056894/JAY-Z_-_Empire_State_Of_Mind_ft._Alicia_Keys_pncuzj.mp3", thumb: "img/t18.jpg", title: "JAŸ-Z - Empire State Of Mind ft. Alicia Keys", artist: "JAŸ-Z", genre: "Hip-Hop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775057528/Beyonce%CC%81_-_Halo_mwhql8.mp3", thumb: "img/t19.jpg", title: "Beyoncé - Halo", artist: "Beyoncé", genre: "Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775057838/The_Weeknd_-_Save_Your_Tears_Official_Audio_z4hkzt.mp3", thumb: "img/t20.jpg", title: "The Weeknd - Save Your Tears", artist: "The Weeknd", genre: "Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775058275/The_Weeknd_-_Snowchild_Audio_nq20t8.mp3", thumb: "img/t20.jpg", title: "The Weeknd - Snowchild", artist: "The Weeknd", genre: "Pop" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775059446/Shakira_-_Chantaje_Audio_ft._Maluma_lcpvyx.mp3", thumb: "img/t22.jpg", title: "Shakira - Chantaje ft. Maluma", artist: "Shakira", genre: "Latin" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775058791/Bad_Bunny_ft._Bomba_Este%CC%81reo_-_Ojitos_Lindos_Video_Oficial_Un_Verano_Sin_Ti_sehimp.mp3", thumb: "img/t5.jpg", title: "Bad Bunny ft. Bomba Estéreo - Ojitos Lindos", artist: "Bad Bunny", genre: "Latin" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775059851/Tum_Ho_-_Rockstar_Full_Song_Audio_Ranbir_Kapoor_Mohit_Chauhan_AR_Rahman_Imtiaz_Ali_Nargis_Fakhri_ajycpt.mp3", thumb: "img/t23.jpg", title: "Mohit Chauhan, AR Rahman - Tum Ho", artist: "Mohit Chauhan, AR Rahman", genre: "Hindi" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775060119/Yeh_Fitoor_Mera_grgtqe.mp3", thumb: "img/t24.jpg", title: "Arjit Singh - Yeh Fitoor Mera", artist: "Arjit Singh", genre: "Hindi" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775060317/Tera_Hone_Laga_Hoon_Lyrics_-_Ajab_Prem_Ki_Gazab_Kahaani_Pritam_Atif_Aslam_Alisha_Chinai_euvjnk.mp3", thumb: "img/t25.jpg", title: "Atif Aslam - Tera Hone Laga Hoon Lyrics Pritam", artist: "Atif Aslam", genre: "Hindi" },
    { mp3: "https://res.cloudinary.com/dotht6y4b/video/upload/v1775061545/ROSALI%CC%81A_Ozuna_-_Yo_x_Ti_Tu_x_Mi_Official_Video_1_qdqgrw.mp3", thumb: "img/t4.jpg", title: "ROSALÍA, Ozuna - Yo x Ti, Tu x Mi", artist: "ROSALÍA", genre: "Latin" },

];

// ─── State ───────────────────────────────────────────────────────────────────

const audio = el('audioPlayer');
let currentIdx = -1;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

audio.volume = 0.75;

// ─── Player UI update ────────────────────────────────────────────────────────

function updatePlayerUI(s) {
    // Mobile
    const thumbSm = el('playerThumbSm');
    if (thumbSm) thumbSm.src = s.thumb;
    setText('nowTitleSm', s.title);
    setText('nowArtistSm', s.artist);

    // Desktop (optional — only runs if those elements exist)
    const thumbD = el('playerThumbD');
    if (thumbD) thumbD.src = s.thumb;
    setText('nowTitleD', s.title);
    setText('nowArtistD', s.artist);

    // Hero section (optional)
    const heroImg = el('heroImg');
    if (heroImg) heroImg.src = s.thumb;
    setText('heroTitle', s.title);
    setText('heroSub', s.artist);
}

function setPlayingState(playing) {
    isPlaying = playing;

    // Mobile play button
    toggleClass('playBtnSm', 'playing', playing);

    // Desktop play button (optional)
    toggleClass('playBtnD', 'playing', playing);

    // Animated bars (optional desktop element)
    const bars = el('playingBarsD');
    if (bars) bars.classList.toggle('active', playing);

    // Glass card glow ring
    toggleClass('playerMobile', 'is-playing', playing);
}

// ─── Playback controls ───────────────────────────────────────────────────────

function playSong(idx) {
    if (!songs.length) return;
    currentIdx = ((idx % songs.length) + songs.length) % songs.length; // safe wrap
    const s = songs[currentIdx];
    audio.src = s.mp3;
    audio.play().catch(e => console.warn('Audio play error:', e));
    setPlayingState(true);
    updatePlayerUI(s);
    renderTracks();
    buildSidebar();
}

function togglePlay() {
    if (currentIdx < 0) {
        playSong(isShuffle ? Math.floor(Math.random() * songs.length) : 0);
        return;
    }
    if (isPlaying) audio.pause(); else audio.play();
}

function nextSong() {
    playSong(isShuffle
        ? Math.floor(Math.random() * songs.length)
        : (currentIdx + 1) % songs.length);
}

function prevSong() {
    if (audio.currentTime > 3) { audio.currentTime = 0; return; }
    playSong((currentIdx - 1 + songs.length) % songs.length);
}

function shuffleAll() {
    isShuffle = true;
    toggleClass('shuffleBtnD', 'active', true);
    playSong(Math.floor(Math.random() * songs.length));
}

function toggleShuffle() {
    isShuffle = !isShuffle;
    toggleClass('shuffleBtnD', 'active', isShuffle);
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    toggleClass('repeatBtnD', 'active', isRepeat);
}

function toggleHeart() {
    const btn = el('heartBtnD');
    if (!btn) return;
    btn.classList.toggle('liked');
    const liked = btn.classList.contains('liked');
    btn.innerHTML = liked
        ? '<svg width="15" height="15" fill="currentColor" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
        : '<svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
}

// ─── Seek & volume ───────────────────────────────────────────────────────────

function seekTo(e, type) {
    const trackId = type === 'sm' ? 'progressTrackSm' : 'progressTrackD';
    const track = el(trackId);
    if (!track || !audio.duration) return;
    const r = track.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    audio.currentTime = ratio * audio.duration;
}

function setVolume(e) {
    const r = e.currentTarget.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    audio.volume = p;
    setStyle('volFillD', 'width', (p * 100) + '%');
}

// ─── Audio events ────────────────────────────────────────────────────────────

audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration * 100) + '%';
    const t = fmt(audio.currentTime);
    setStyle('progressFillSm', 'width', pct);
    setStyle('progressFillD', 'width', pct);
    setText('currentTimeSm', t);
    setText('currentTimeD', t);
});

audio.addEventListener('loadedmetadata', () => {
    const t = fmt(audio.duration);
    setText('totalTimeSm', t);
    setText('totalTimeD', t);
    const durEl = el('dur-' + currentIdx);
    if (durEl) durEl.textContent = t;
});

audio.addEventListener('ended', () => {
    if (isRepeat) {
        // repeat single song: replay it
        audio.currentTime = 0;
        audio.play().catch(() => { });
    } else {
        nextSong();
    }
});
audio.addEventListener('play', () => setPlayingState(true));
audio.addEventListener('pause', () => setPlayingState(false));
audio.addEventListener('error', () => {
    console.error('Audio failed to load. Check the file path in the songs array:', audio.src);
    setPlayingState(false);
});

// ─── Card HTML builder ───────────────────────────────────────────────────────

function cardHTML(s, ri) {
    return `<div class="card ${ri === currentIdx ? 'playing' : ''}" id="card-${ri}" onclick="playSong(${ri})">
        <div class="card-art">
            <img src="${s.thumb}" alt="" onerror="this.style.opacity='0'">
            <div class="card-play">
                <svg width="12" height="12" fill="#000" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
            </div>
        </div>
        <div class="card-body">
            <div class="card-title">${s.title}</div>
            <div class="card-desc">${s.artist}</div>
        </div>
    </div>`;
}

// ─── Render all shelves ───────────────────────────────────────────────────────

// Genre definitions — must match chip labels exactly (case-insensitive compare done below)
const GENRE_SECTIONS = [
    { label: 'Hip-Hop', genres: ['hip-hop'] },
    { label: 'Pop', genres: ['pop', 'indie pop', 'latin pop', 'dream pop'] },
    { label: 'Rock', genres: ['rock', 'indie rock', 'alt rock', 'soft rock', 'pop rock', 'alternative rock'] },
    { label: 'Alternative Rock', genres: ['alternative rock', 'synth-pop', 'alt rock'] },
    { label: 'Jazz', genres: ['jazz'] },
    { label: 'Latin', genres: ['latin', 'latin pop', 'reggaeton'] },
    { label: '80s Pop', genres: ['80s pop', 'synth-pop'] },
    { label: 'Hindi', genres: ['Hindi'] },
];

function renderShelves() {
    // 1. Your Library row — all songs
    const rowAll = el('rowAll');
    if (rowAll) {
        rowAll.innerHTML = songs.length
            ? songs.map((s, i) => cardHTML(s, i)).join('')
            : '<div class="no-results">No songs yet</div>';
    }

    // 2. Genre rows — case-insensitive matching
    const genreContainer = el('genreSections');
    if (!genreContainer) return;

    genreContainer.innerHTML = '';

    GENRE_SECTIONS.forEach(section => {
        const matches = songs.filter(s =>
            section.genres.map(g => g.toLowerCase()).includes((s.genre || '').toLowerCase())
        );
        if (!matches.length) return; // skip genres with no songs

        const rowId = `genre-row-${section.label.toLowerCase().replace(/\s+/g, '-')}`;
        const sectionEl = document.createElement('section');
        sectionEl.className = 'shelf';
        sectionEl.setAttribute('data-genre', section.label.toLowerCase());
        sectionEl.innerHTML = `
            <div class="shelf-header">
                <h2 class="shelf-title">${section.label}</h2>
            </div>
            <div class="shelf-scroll-wrap">
                <div class="shelf-row" id="${rowId}">
                    ${matches.map(s => cardHTML(s, songs.indexOf(s))).join('')}
                </div>
            </div>`;
        genreContainer.appendChild(sectionEl);
    });
}

// Keep legacy name as alias so other code still works
function renderTracks() { renderShelves(); }

function buildSidebar() {
    const sidebar = el('sidebarList');
    if (!sidebar) return;
    sidebar.innerHTML = songs.map((s, i) => `
        <div class="sb-item ${i === currentIdx ? 'active' : ''}" onclick="playSong(${i})">
            <div class="sb-thumb">
                <img src="${s.thumb}" alt="" onerror="this.parentElement.textContent='🎵'">
            </div>
            <div style="min-width:0">
                <div class="sb-name">${s.title}</div>
                <div class="sb-meta">${s.artist}</div>
            </div>
        </div>`).join('');
}

// ─── Chip filter → scroll to genre section ───────────────────────────────────

document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const label = chip.textContent.trim();
        if (label === 'All') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        // Match by data-genre attribute (case-insensitive)
        const target = document.querySelector(`.shelf[data-genre="${label.toLowerCase()}"]`);
        if (target) {
            // offset by the fixed header height (approx 108px)
            const y = target.getBoundingClientRect().top + window.scrollY - 108;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

function handleSearch(q) { /* reserved for future search UI */ }
function setFilter(btn, key) { /* reserved */ }

// ─── Bottom nav ──────────────────────────────────────────────────────────────

document.querySelectorAll('.bottom-nav-item').forEach((item, i) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('active'));
        item.classList.add('active');
        const searchInput = el('searchInput');
        if (i === 1 && searchInput) searchInput.focus();
        const mainWrap = el('mainWrap');
        if ((i === 0 || i === 2) && mainWrap) mainWrap.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ─── Init ────────────────────────────────────────────────────────────────────

buildSidebar();
renderTracks();