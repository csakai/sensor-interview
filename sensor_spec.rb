require './sensor'

describe Sensor do
  let!(:lower_limit) { 0 }
  let!(:upper_limit) { 10 }
  let!(:buffer) { [0, -2, 20, 5, 6, 4, 4, 11, 9, 9, 9, 8, -1] }
  let!(:sensor) { Sensor.new(lower_limit, upper_limit, buffer) }

  context '.new' do
    it 'initalizes a sensors valid range' do
      expect(sensor.lower_limit).to eq 0
      expect(sensor.upper_limit).to eq 10
    end

    it 'initalizes a sensors input buffer' do
      expect(sensor.buffer).to eq buffer
    end

    context 'filter buffer input' do
      it 'rejects invalid values' do
        expect(sensor.output).to eq [0, 5, 6, 4, 4, 9, 9, 9, 8]
      end
    end

    context 'invalid limits' do
      let!(:lower_limit) { 10 }

      it 'rejects invalid range of values' do
        expect(sensor.output).to eq nil
      end
    end
  end

  context '#mean' do
    let!(:buffer) { [0, -2, 20, 5] }

    it 'can determine the float average of valid values' do
      expect(sensor.mean).to eq 2.5
    end

    context 'no valid values' do
      let!(:buffer) { [11,12, -1] }

      it 'returns nil' do
        expect(sensor.mean).to eq nil
      end
    end
  end

  context '#mode' do
    it 'can determine the most common valid values' do
      expect(sensor.mode).to eq 9
    end

    context 'no valid values' do
      let!(:buffer) { [11,12, -1] }

      it 'returns nil' do
        expect(sensor.mode).to eq nil
      end
    end
  end

  context '#median' do
    it 'can determine the middle valid value' do
      expect(sensor.median).to eq 6
    end

    context 'an even number of valid values' do
      let!(:buffer) { [0, 1, 2, 3] }

      it 'can determine a middle valid value' do
        expect(sensor.median).to eq 1.5
      end
    end

    context 'no valid values' do
      let!(:buffer) { [11,12, -1] }

      it 'returns nil' do
        expect(sensor.median).to eq nil
      end
    end
  end
end
