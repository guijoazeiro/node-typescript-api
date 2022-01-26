import { Beach, BeachPosition } from '@src/models/beach';

export class Rating {
    constructor(private beach: Beach){

    }

  public getRatingBasedOnWindAndWavePositions(
    waveDirection: BeachPosition,
    windDirection: BeachPosition
  ): number {
    if (waveDirection === windDirection) {
      return 1;
    } else if (this.isWindOffShore(waveDirection, windDirection)){
        return 5;
    }
    return 3;
  }

  private isWindOffShore(waveDirection: BeachPosition, windDirection: BeachPosition): boolean{
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
