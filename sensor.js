/**
 * Sensor.
 * @class
 */
class Sensor {
  /**
   * Constructor.
   * @constructor
   *
   * @param {integer} lowerLimit - Lowest valid buffer value.
   * @param {integer} upperLimit - Highest valid buffer value.
   * @param {array<integer>} buffer - Array of sensor data.
   */
  constructor(lowerLimit, upperLimit, buffer) {
  }

  /**
   * The average value from the internal buffer.
   *
   * @returns {integer}
   */
  mean() {
  }

  /**
   * The most frequently occurring value in the internal buffer.
   *
   * @returns {integer}
   */
  mode() {
  }

  /**
   * The middle value from the internal buffer.
   *
   * @returns {integer}
   */
  median() {
  }
}

module.exports = Sensor;
