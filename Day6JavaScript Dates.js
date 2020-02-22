function getDayName(dateString) {
  return new Intl.DateTimeFormat('en-Us', {
    weekday: 'long',
  }).format(new Date(dateString));
}
