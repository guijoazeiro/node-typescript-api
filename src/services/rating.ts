import { Beach, BeachPosition } from '@src/models/beach';

const waveHeights = {
  ankleToKnee: {
    min: 0.3,
    max: 1.0,
  },
  waistHigh: {
    min: 1.0,
    max: 2.0,
  },
  headHigh: {
    min: 2.0,
    max: 2.5,
  },
};

export class Rating {
  constructor(private beach: Beach) {}

  public getRatingBasedOnWindAndWavePositions(
    waveDirection: BeachPosition,
    windDirection: BeachPosition
  ): number {
    if (waveDirection === windDirection) {
      return 1;
    } else if (this.isWindOffShore(waveDirection, windDirection)) {
      return 5;
    }
    return 3;
  }
  public getRatingForSwellPeriod(period: number): number {
    if (period >= 7 && period < 10) {
      return 2;
    }

    if (period >= 10 && period < 14) {
      return 4;
    }
    if (period >= 14) {
      return 5;
    }

    return 1;
  }

  public getRatingForSwellSize(height: number): number {
    if (
      height >= waveHeights.ankleToKnee.min &&
      height < waveHeights.ankleToKnee.max
    ) {
      return 2;
    }
    if (
      height >= waveHeights.waistHigh.min &&
      height < waveHeights.waistHigh.max
    ) {
      return 3;
    }
    if (height >= waveHeights.headHigh.min) {
      return 5;
    }

    return 1;
  }

  private isWindOffShore(
    waveDirection: BeachPosition,
    windDirection: BeachPosition
  ): boolean {
    return (
      (waveDirection === BeachPosition.N &&
        windDirection === BeachPosition.S &&
        this.beach.position === BeachPosition.N) ||
      (waveDirection === BeachPosition.S &&
        windDirection === BeachPosition.N &&
        this.beach.position === BeachPosition.S) ||
      (waveDirection === BeachPosition.E &&
        windDirection === BeachPosition.W &&
        this.beach.position === BeachPosition.E) ||
      (waveDirection === BeachPosition.W &&
        windDirection === BeachPosition.E &&
        this.beach.position === BeachPosition.W)
    );
  }
}
