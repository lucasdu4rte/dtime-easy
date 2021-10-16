import { timeDurationToSeconds, secondsToTimeDuration } from '../index';

describe('timeDurationToSeconds', () => {
  test('should 00:00:10 duration return 10 seconds', () => {
    expect(timeDurationToSeconds('00:00:10')).toBe(10);
  });

  test('should 00:10:00 duration return 600 seconds', () => {
    expect(timeDurationToSeconds('00:10:00')).toBe(600);
  });

  test('should 10:00:00 duration return 36000 seconds', () => {
    expect(timeDurationToSeconds('10:00:00')).toBe(36000);
  });
});

describe('secondsToTimeDuration', () => {
  test('should 10 seconds return 00:00:10 duration', () => {
    expect(secondsToTimeDuration(10)).toBe('00:00:10');
  });

  test('should 600 seconds return 00:10:00 duration', () => {
    expect(secondsToTimeDuration(600)).toBe('00:10:00');
  });

  test('should 36000 seconds return 10:00:00 duration', () => {
    expect(secondsToTimeDuration(36000)).toBe('10:00:00');
  });
});
