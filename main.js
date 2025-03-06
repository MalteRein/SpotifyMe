/////////////////////////////
function logoZoom() {
    Swal.fire({
        imageUrl: "./IMAGE/Logo/SpotifyMe.png",
        imageWidth: '100%',
        imageHeight: 'auto',
        imageAlt: "Ein Bild"
    });
}



function musicShowAll() {
    document.getElementById('playlist').style.display = 'block';
    document.getElementById('artist').style.display = 'block';
    document.getElementById('podcast').style.display = 'block';

    document.getElementById('musicSearch').value = '';
}

function musicShowPlaylist() {
    document.getElementById('playlist').style.display = 'block';
    document.getElementById('artist').style.display = 'none';
    document.getElementById('podcast').style.display = 'none';

    document.getElementById('musicSearch').value = '';
}

function musicShowArtist() {
    document.getElementById('playlist').style.display = 'none';
    document.getElementById('artist').style.display = 'block';
    document.getElementById('podcast').style.display = 'none';

    document.getElementById('musicSearch').value = '';
}

function musicShowPodcast() {
    document.getElementById('playlist').style.display = 'none';
    document.getElementById('artist').style.display = 'none';
    document.getElementById('podcast').style.display = 'block';

    document.getElementById('musicSearch').value = '';
}


function searchMusic() {
    event.preventDefault();

    let search = document.getElementById('musicSearch').value.toLowerCase();

    let playlistArea = document.getElementById('playlist');
    let artistArea = document.getElementById('artist');
    let podcastArea = document.getElementById('podcast');

    if(search === 'playlist' || search === 'playlists') {
        playlistArea.style.display = 'block';

        artistArea.style.display = 'none';
        podcastArea.style.display = 'none';
    } else if (search === 'künstler' || search === 'artists') {
        artistArea.style.display = 'block';

        playlistArea.style.display = 'none';
        podcastArea.style.display = 'none';
    } else if (search === 'podcast' || search === 'podcasts') {
        podcastArea.style.display = 'block';

        playlistArea.style.display = 'none';
        artistArea.style.display = 'none';
    } else {
        alert(`Für die Suchanfrage "${search}" haben wir leider kein Ergebnis`);
    }
}
