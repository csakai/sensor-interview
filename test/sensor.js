const Sensor = require('../sensor');
const expect = require('chai').expect;

describe('Sensor', () => {
  let lower = 0;
  let upper = 10;
  let buffer = [0, -2, 20, 5, 6, 4, 4, 11, 9, 9, 9, 8, -1];
  let sensor;

  const createSensor = (...args) => new Sensor(...args);

  beforeEach(() => {
    sensor = createSensor(lower, upper, buffer);
  });

  describe('constructor', () => {
    it('initalizes a sensors valid range', () => {
      expect(sensor.lowerLimit).to.equal(0);
      expect(sensor.upperLimit).to.equal(10);
    });

    it('initalizes a sensors input buffer', () => {
      expect(sensor.buffer).to.equal(buffer);
    });

    it('rejects invalid values', () => {
      expect(sensor.output()).to.eql([0, 5, 6, 4, 4, 9, 9, 9, 8]);
    });

    it('rejects invalid range of values', () => {
      sensor = createSensor(10, 10, buffer);
      expect(sensor.output()).to.eql(null);
    });
  });

  describe('#mean', () => {
    it('can determine the float average of valid values', () => {
      sensor = createSensor(0, 10, [0, -2, 20, 5]);
      expect(sensor.mean()).to.eql(2.5);
    });

    it('returns null when there are no valid values', () => {
      sensor = createSensor(0, 10, [11,12, -1]);
      expect(sensor.mean()).to.eql(null);
    });
  });

  describe('#mode', () => {
    it('can determine the most common valid values', () => {
      expect(sensor.mode()).to.eql(9);
    });

    it('returns null when there are no valid values', () => {
      sensor = createSensor(0, 10, [11,12, -1]);
      expect(sensor.mode()).to.eql(null);
    });
  });

  describe('#median', () => {
    it('can determine the middle valid value', () => {
      expect(sensor.median()).to.eql(6);
    });

    it('can determine a middle valid value from an even buffer length', () => {
      sensor = createSensor(0, 10, [0, 1, 2, 3]);
      expect(sensor.median()).to.eql(1.5);
    });

    it('returns null when there are no valid values', () => {
      sensor = createSensor(0, 10, [11,12, -1]);
      expect(sensor.median()).to.eql(null);
    });
  });
});
