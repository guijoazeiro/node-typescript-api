import { BeachPosition } from '@src/models/beach';

export class Rating {
  public getRatingBasedOnWindAndWavePositions(
    waveDirection: BeachPosition,
    windDirection: BeachPosition
  ): number {
    if (waveDirection === windDirection) {
      return 1;
    }
    return 0;
  }
}
