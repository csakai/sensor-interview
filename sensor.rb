# Sensor.
class Sensor
  # Initialize.
  #
  # @param lower_limit [Integer] Lowest valid buffer value.
  # @param upper_limit [Integer] Highest valid buffer value.
  # @param buffer [Array<Integer>] Array of sensor data.
  def initialize(lower_limit, upper_limit, buffer)
  end

  # The average value from the internal buffer.
  #
  # @return [Integer]
  def mean
  end

  # The most frequently occurring value in the internal buffer.
  #
  # @return [Integer]
  def mode
  end

  # The middle value from the internal buffer.
  #
  # @return [Integer]
  def median
  end
end
