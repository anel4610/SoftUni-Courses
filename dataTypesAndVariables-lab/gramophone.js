function gramophone(band, album, song) {
  let time = (band.length * album.length * song.length) / 2;
  let rotat = Math.ceil(time / 2.5);

  console.log(`The plate was rotated ${rotat} times.`);
}
gramophone("Black Sabbath", "Paranoid", "War Pigs");
gramophone("Rammstein", "Sehnsucht", "Engel");
