export const timeDurationToSeconds = (time: string): number => {
  const [hh, mm, ss] = time.split(':');

  return +hh * 3600 + +mm * 60 + +ss;
};

export const secondsToTimeDuration = (seconds: number): string => {
  return [3600, 60]
    .reduceRight(
      (p, b) => (r) => [Math.floor(r / b)].concat(p(r % b)),
      (r: number) => [r],
    )(seconds)
    .map((a) => a.toString().padStart(2, '0'))
    .join(':');
};
