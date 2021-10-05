export const timeDurationToSeconds = (time: string): number => {
  const [hh, mm, ss] = time.split(':');

  return (+hh) * 3600 + (+mm) * 60 + (+ss)
}
