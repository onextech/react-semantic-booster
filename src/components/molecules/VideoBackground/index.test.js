import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import VideoBackground from '.';
import { demoVideo } from './index.story';


describe('<VideoBackground>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<VideoBackground video={demoVideo} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has essential classes/elements', () => {
    const wrapper = render(<VideoBackground video={demoVideo} />);
    const overlay = wrapper.find('.overlay');
    const video = wrapper.find('video');
    expect(overlay.length).toBe(1);
    expect(video.length).toBe(1);
  });
});
