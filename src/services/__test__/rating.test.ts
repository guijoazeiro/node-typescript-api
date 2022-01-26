import { Beach, BeachPosition } from '@src/models/beach';
import { Rating } from '../rating';

describe('Rating Service', () => {
  const defaultBeach: Beach = {
    lat: -33.792726,
    lng: 151.289824,
    name: 'Manly',
    position: BeachPosition.E,
    user: 'some-user',
  };

  const defaultRating = new Rating()

  describe('Calculate rating for a given point', ()=>{})

  describe('Get rating based on wind ande wave position', ()=>{
      it('Should get rating 1 for a beach with onshore winds', ()=>{
        const rating = defaultRating.getRatingBasedOnWindAndWavePositions(
            BeachPosition.E,
            BeachPosition.E
        )
        expect(rating).toBe(1)
      })
  })
});
