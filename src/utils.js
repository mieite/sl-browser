export const parseUri = (req) => {
  let uri;
  if (req.note && req.note.toLowerCase().startsWith('http')) {
    uri = req.note;
  } else if (req.nonlistSong && req.nonlistSong.toLowerCase().startsWith('http')) {
    uri = req.nonlistSong;
  }

  if (uri && uri.includes('youtube') && uri.includes('&')) {
    uri = uri.substring(0, uri.indexOf('&'));
  } else if (uri && uri.includes('spotify') && uri.includes('?')) {
    uri = uri.substring(0, uri.indexOf('?'));
  }
  return uri;
};

export const requestToDefaultTableRow = (req) => {
  const info = req.requests[0];
  const name = info && info.name || 'anonymous';
  const song = parseSong(req);
  const uri = parseUri(req);

  return {
    id: req.id,
    uri: uri,
    createdAt: req.createdAt,
    playedAt: req.playedAt,
    song: song,
    requester: name
  }
};

export const parseSong = (req) => {
  let song;
  if(req.song) {
    song = `${req.song.artist} - ${req.song.title}`;
  } else {
    if(req.nonlistSong) {
      if (req.note && req.note.includes('spotify.com')) {
        song = req.note.split('?')[0];
      } else if (req.nonlistSong.includes('spotify.com')) {
        song = req.nonlistSong.split('?')[0];
      } else {
        song = req.nonlistSong;
      }
    } else {
      song = req.note;
    }
  }
  return song;
};

